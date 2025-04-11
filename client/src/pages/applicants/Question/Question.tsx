import {
  Box,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { syncResponses } from "../../../store/applicants/applicantsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { Question, questionTypes, setHiddenData, setValidationRequirements } from "../../../store/cards/cardsSlice";

const QuestionInput = React.memo(
  ({
    question,
    onValidationError,
  }: {
    question: Question;
    onValidationError: (isInvalid: boolean) => void;
  }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { hiddenQuestions, validationRequirements } = useSelector((state: RootState) => state.cards);
    const storedResponse = useSelector((state: RootState) =>
      state.user.responses.find((res) => res.questionId === question.id)
    );
    const [error, setError] = useState<string | null>(null);

    // Get the actual required state (either from validationRequirements or from question's default)
    const isRequired = validationRequirements && validationRequirements[question.id] !== undefined 
      ? validationRequirements[question.id]
      : question.validation?.required || false;

    // Handle hidden questions and conditional logic
    useEffect(() => {
      dispatch((dispatch, getState) => {
        const { hiddenCards, hiddenQuestions, validationRequirements } = getState().cards;
    
        let updatedHiddenCards = new Set(hiddenCards);
        let updatedHiddenQuestions = new Set(hiddenQuestions);
        let updatedValidationRequirements = { ...validationRequirements };
    
        if (question.defaultHidden && !storedResponse) {
          updatedHiddenQuestions.add(question.id);
        } else if (storedResponse) {
          const answer = Array.isArray(storedResponse?.answer)
            ? storedResponse.answer[0]
            : storedResponse?.answer;
          
          const selectedOption = answer?.split("$$$")[0];
          
          // Process conditional logic
          question.condition?.forEach((cond) => {
            if (cond.if.includes(selectedOption)) {
              // Handle cards and questions to hide
              cond.removeCards?.forEach((card) => updatedHiddenCards.add(card));
              cond.removeQuestions?.forEach((q) => updatedHiddenQuestions.add(q));
              
              // Handle questions to make not required
              cond.notRequiredQuestions?.forEach((q) => {
                updatedValidationRequirements[q] = false;
              });
              
              // Handle questions to make required
              cond.requiredQuestions?.forEach((q) => {
                updatedValidationRequirements[q] = true;
              });
            } else {
              // Restore default state for cards and questions
              cond.removeCards?.forEach((card) => updatedHiddenCards.delete(card));
              cond.removeQuestions?.forEach((q) => updatedHiddenQuestions.delete(q));
              
              // Reset validation requirements for questions affected by this condition
              if (cond.notRequiredQuestions?.length || cond.requiredQuestions?.length) {
                // Only reset validation requirements for questions affected by this condition
                [...(cond.notRequiredQuestions || []), ...(cond.requiredQuestions || [])].forEach(q => {
                  delete updatedValidationRequirements[q];
                });
              }
            }
          });
        }
    
        const finalHiddenCards = Array.from(updatedHiddenCards);
        const finalHiddenQuestions = Array.from(updatedHiddenQuestions);
    
        const hiddenDataChanged = 
          JSON.stringify(finalHiddenCards) !== JSON.stringify(Array.from(hiddenCards)) ||
          JSON.stringify(finalHiddenQuestions) !== JSON.stringify(Array.from(hiddenQuestions));
        
        const validationReqChanged = 
          JSON.stringify(updatedValidationRequirements) !== JSON.stringify(validationRequirements);
        
        if (hiddenDataChanged) {
          dispatch(
            setHiddenData({
              hiddenCards: finalHiddenCards,
              hiddenQuestions: finalHiddenQuestions,
            })
          );
        }
        
        if (validationReqChanged) {
          dispatch(setValidationRequirements(updatedValidationRequirements));
        }
      });
    }, [storedResponse, question, dispatch]);
    
    // Validate user input based on question validation rules
    const validateInput = (
      value: string,
      validateRequiredAndPattern: boolean
    ) => {
      if (!value) return validateRequiredAndPattern && isRequired 
        ? "This field is required" : null;
      
      if (validateRequiredAndPattern && 
          question.validation?.pattern && 
          !question.validation.pattern.test(value)) {
        return "Invalid format";
      }

      if (question.validation?.minLength && value.length < question.validation.minLength) {
        return `Minimum length is ${question.validation.minLength}`;
      }
      
      if (question.validation?.maxLength && value.length > question.validation.maxLength) {
        return `Maximum length is ${question.validation.maxLength}`;
      }
      
      if (question.validation?.min && Number(value) < question.validation.min) {
        return `Minimum value is ${question.validation.min}`;
      }
      
      if (question.validation?.max && Number(value) > question.validation.max) {
        return `Maximum value is ${question.validation.max}`;
      }
      
      return null;
    };

    // Handle response changes for all input types
    const handleResponseChange = (newAnswer: string | string[]) => {
      let answer = Array.isArray(newAnswer) ? newAnswer[0] : newAnswer;

      // For number inputs, validate it's a number
      if (question.validation?.type === "number" && answer && isNaN(Number(answer))) {
        return;
      }

      // Unselect option if it's already selected (for CHOICES type)
      if(question.type===questionTypes.CHOICES && question.options.find((item)=>item.text===answer.split("$$$")[0])?.other && !answer.split("$$$")[1] ){
        setError("Please Specify")
        const errorMessage="Please Specify"
        onValidationError(!!errorMessage)
        return;
      }

      // Validate "Other" option has a specified value
      if (question.type === questionTypes.CHOICES && 
          question.options.find((item) => 
            item.text === answer.split("$$$")[0])?.other && 
          !answer.split("$$$")[1]) {
        setError("Please Specify");
        onValidationError(true);
        return;
      }

      // Validate the input
      const errorMessage = validateInput(answer, false);
      setError(errorMessage);
      onValidationError(!!errorMessage);

      // If no validation errors, sync the response
      if (!errorMessage) {
        dispatch(
          syncResponses({
            questionId: question.id,
            answer: [answer],
          })
        );
      }
    };

    // Validate on blur with required check
    const handleBlur = (value: string) => {
      const errorMessage = validateInput(value, true);
      setError(errorMessage);
      onValidationError(!!errorMessage);
    };

    // If question is hidden, don't render anything
    if (hiddenQuestions.includes(question.id)) {
      return null;
    }

    // Render question title if available
    const QuestionTitle = question.question && (
      <Typography fontSize="18px" fontWeight="600">
        {question.question}
        {isRequired && <span style={{ color: "#fff" }}>*</span>}
      </Typography>
    );

    // Render text input question
    if (question.type === questionTypes.TEXT_INPUT) {
      return (
        <Box>
          {QuestionTitle}
          <Box position="relative">
            {question.unit && (
              <Typography
                sx={{
                  position: "absolute",
                  right: "0",
                  color: "#ffffff",
                  top: "5px",
                }}
              >
                {question.unit}
              </Typography>
            )}
            <TextField
              value={storedResponse?.answer?.[0] || ""}
              id="standard-basic"
              label={question.label}
              placeholder={question.placeholder}
              onChange={(e) => handleResponseChange(e.target.value)}
              onBlur={(e) => handleBlur(e.target.value)}
              variant="standard"
              error={!!error}
              multiline={question.multiline}
              helperText={error}
              required={isRequired}
              sx={{
                width: "100%",
                "& textarea": {
                  color: "#fff !important"
                },
                input: {
                  fontSize: "1rem !important",
                  "&::placeholder": {
                    color: "#ffffff",
                    padding: "0 !important",
                  },
                },
                "&::before": { bottom: "12px" },
              }}
            />
          </Box>
        </Box>
      );
    } 
    
    // Render choice question
    else if (question.type === questionTypes.CHOICES) {
      const currentValue = storedResponse?.answer?.[0] || "";
      const selectedOption = currentValue.split("$$$")[0];
      const otherValue = currentValue.split("$$$")[1] || "";
      
      return (
        <Box>
          {QuestionTitle}
          {/* We don't use RadioGroup's built-in value handling since we need custom unselect behavior */}
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={selectedOption || ""}
          >
            <Stack
              gap={question.options.length > 8 ? "5px" : "16px"}
              marginTop="24px"
            >
              {question.options.map((option, index) => (
                <Stack
                  key={index}
                  direction="row"
                  alignItems="center"
                  gap="12px"
                >
                  <Radio
                    value={option.text}
                    checked={selectedOption === option.text}
                    onClick={() => {
                      // Handle the click manually to support unselect
                      if (selectedOption === option.text) {
                        // If already selected, unselect it
                        handleResponseChange("");
                      } else {
                        // Otherwise select this option
                        const hasOtherField = option.other;
                        const needsTextInput = question.textInput && option.text;
                        
                        if (hasOtherField || needsTextInput) {
                          handleResponseChange(option.text + "$$$");
                        } else {
                          handleResponseChange(option.text);
                        }
                      }
                    }}
                    sx={{
                      padding: "0",
                      color: "white",
                      "&.Mui-checked": {
                        color: "white",
                      },
                    }}
                  />
                  <Stack flex="1">
                    <Typography>{option.text}</Typography>
                    {option.subtext && (
                      <Typography fontSize="10px">
                        {option.subtext}
                      </Typography>
                    )}
                    {option.other && (
                      <TextField
                        id="standard- basic"
                        placeholder={"Please Specify"}
                        variant="standard"
                        value={
                          storedResponse?.answer[0].split("$$$")[0] ===
                          option.text
                            ? storedResponse?.answer[0].split("$$$")[
                                storedResponse?.answer[0].split("$$$").length -
                                  1
                              ]
                            : ""
                        }
                        onChange={(e) =>
                          handleResponseChange("Other$$$" + e.target.value)
                        }
                        onBlur={(e) => handleBlur(e.target.value)}
                        error={!!error}
                        helperText={error}
                        sx={{
                          input: {
                            fontSize: "12px !important",
                            width: "100%",
                            "&::placeholder": {
                              color: "#ffffff87",
                            },
                          },
                        }}
                      />
                    )}
                  </Stack>
                </Stack>
              ))}
              {question.textInput && selectedOption && (
                <TextField
                  id="standard-basic"
                  placeholder={question.textInput.placeholder}
                  variant="standard"
                  value={otherValue}
                  onChange={(e) =>
                    handleResponseChange(selectedOption + "$$$" + e.target.value)
                  }
                  error={!!error}
                  helperText={error}
                  sx={{
                    input: {
                      fontSize: "1rem !important",
                      width: "100%",
                      "&::placeholder": {
                        color: "#ffffff87",
                      },
                    },
                  }}
                />
              )}
            </Stack>
          </RadioGroup>
        </Box>
      );
    }

    return null;
  }
);

export default QuestionInput;