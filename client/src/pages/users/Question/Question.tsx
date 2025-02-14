import {
  Box,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  // useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { syncResponses } from "../../../store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import  { AppDispatch, RootState } from "../../../store/store";
import { Question, questionTypes, setHiddenData } from "../../../store/cards/cardsSlice";

const QuestionInput = React.memo(
  ({
    question,
    onValidationError,
  }: {
    question: Question;
    onValidationError: (isInvalid: boolean) => void;
  }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { hiddenQuestions } = useSelector((state: RootState) => state.cards);
    const storedResponse = useSelector((state: RootState) =>
      state.user.responses.find((res) => res.questionId === question.id)
    );
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      dispatch((dispatch, getState) => {
        const { hiddenCards, hiddenQuestions } = getState().cards;
    
        let updatedHiddenCards = new Set(hiddenCards);
        let updatedHiddenQuestions = new Set(hiddenQuestions);
    
        if (question.defaultHidden && !storedResponse) {
          updatedHiddenQuestions.add(question.id);
        } else if (storedResponse) {
          let answer = Array.isArray(storedResponse?.answer)
            ? storedResponse.answer[0]
            : storedResponse?.answer;
    
          question.condition?.forEach((cond) => {
            if (cond.if.includes(answer?.split("$$$")[0])) {
              cond.removeCards?.forEach((card) => updatedHiddenCards.add(card));
              cond.removeQuestions?.forEach((q) => updatedHiddenQuestions.add(q));
            }
          });
    
          question.condition?.forEach((cond) => {
            if (!cond.if.includes(answer?.split("$$$")[0])) {
              cond.removeCards?.forEach((card) => updatedHiddenCards.delete(card));
              cond.removeQuestions?.forEach((q) => updatedHiddenQuestions.delete(q));
            }
          });
        }
    
        const finalHiddenCards = Array.from(updatedHiddenCards);
        const finalHiddenQuestions = Array.from(updatedHiddenQuestions);
    
        if (
          JSON.stringify(finalHiddenCards) !== JSON.stringify(hiddenCards) ||
          JSON.stringify(finalHiddenQuestions) !== JSON.stringify(hiddenQuestions)
        ) {
          dispatch(
            setHiddenData({
              hiddenCards: finalHiddenCards,
              hiddenQuestions: finalHiddenQuestions,
            })
          );
        }
      });
    }, [storedResponse, question, dispatch]);
    



    const validateInput = (
      value: string,
      validateRequiredAndPattern: boolean
    ) => {
      if (validateRequiredAndPattern) {
        if (question.validation?.required && !value) {
          return "This field is required";
        }
        if (
          question.validation?.pattern &&
          !question.validation.pattern.test(value)
        ) {
          return "Invalid format";
        }
      }

      if (
        question.validation?.minLength &&
        value.length < question.validation.minLength
      ) {
        return `Minimum length is ${question.validation.minLength}`;
      }
      if (
        question.validation?.maxLength &&
        value.length > question.validation.maxLength
      ) {
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

    const handleResponseChange = (newAnswer: string | string[]) => {
      let answer = Array.isArray(newAnswer) ? newAnswer[0] : newAnswer;

      if (question.validation?.type === "number" && isNaN(Number(answer))) {
        return;
      }

      const errorMessage = validateInput(answer, false);
      setError(errorMessage);
      onValidationError(!!errorMessage);

      if (!errorMessage) {
        dispatch(
          syncResponses({
            questionId: question.id,
            answer: [answer],
          })
        );
      }

      if(question.type===questionTypes.CHOICES && question.options.find((item)=>item.text===answer.split("$$$")[0])?.other && !answer.split("$$$")[1] ){
        setError("Please Specify")
        const errorMessage="Please Specify"
        onValidationError(!!errorMessage)
        return;
      }

    };

    const handleBlur = (value: string) => {
      const errorMessage = validateInput(value, true);
      setError(errorMessage);
      onValidationError(!!errorMessage);
    };

    if (hiddenQuestions.includes(question.id)) {
      return null;
    }

    if (question.type === questionTypes.TEXT_INPUT) {
      return (
        <Box>
          {question.question && (
            <Typography fontSize={"18px"} fontWeight={"600"}>
              {question.question}
            </Typography>
          )}
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
              value={storedResponse?.answer[0] || ""}
              id="standard-basic"
              label={question.label}
              placeholder={question.placeholder}
              onChange={(e) => handleResponseChange(e.target.value)}
              onBlur={(e) => handleBlur(e.target.value)}
              variant="standard"
              error={!!error}
              multiline={question.multiline}
              helperText={error}
              sx={{
                width: "100%",
                "& textarea":{
                  color:"#fff !important"
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
    } else if (question.type === questionTypes.CHOICES) {
      return (
        <Box>
          {question.question && (
            <Typography fontSize={"18px"} fontWeight={"600"}>
              {question.question}
            </Typography>
          )}
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={
              storedResponse?.answer[0].split("$$$")[0] === "Other" ||
              question?.textInput
                ? storedResponse?.answer[0].split("$$$")[0]
                : storedResponse?.answer[0] || ""
            }
            onChange={(e) =>
              question?.textInput || e.target.value === "Other"
                ? handleResponseChange(e.target.value + "$$$")
                : handleResponseChange(e.target.value)
            }
          >
            <Stack
              gap={question.options.length > 8 ? "5px" : "16px"}
              marginTop={"24px"}
            >
              {question.options.map((option, index) => (
                <Stack
                  key={index}
                  direction={"row"}
                  alignItems={"center"}
                  gap={"12px"}
                >
                  <Radio
                    value={option.text}
                    sx={{
                      padding: "0",
                      color: "white",
                      "&.Mui-checked": {
                        color: "white",
                      },
                    }}
                  />
                  <Stack flex={"1"}>
                    <Typography>{option.text}</Typography>
                    {option.subtext && (
                      <Typography fontSize={"10px"}>
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
              {question.textInput && (
                <TextField
                  id="standard-basic"
                  placeholder={question.textInput.placeholder}
                  variant="standard"
                  value={
                    storedResponse?.answer[0].split("$$$")[
                      storedResponse?.answer[0].split("$$$").length - 1
                    ]
                  }
                  onChange={(e) =>
                    handleResponseChange(
                      storedResponse?.answer[0].split("$$$")[0] +
                        "$$$" +
                        e.target.value.split("$$$")[
                          e.target.value.split("$$$").length - 1
                        ]
                    )
                  }
                  // onBlur={(e) => handleBlur(e.target.value)}
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
