import {
  Box,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { syncResponses } from "../../../store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { Question, setHiddenData } from "../../../store/cards/cardsSlice";
import { questionTypes } from "../../../data/cardsData";

const QuestionInput = React.memo(({ question,onValidationError, }: { question: Question,onValidationError:(isInvalid: boolean) => void; }) => {
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const {hiddenCards,hiddenQuestions}=useSelector((state:RootState)=>state.cards)
  const storedResponse = useSelector((state: RootState) =>
    state.user.responses.find((res) => res.questionId === question.id)
  );
  const [error, setError] = useState<string | null>(null);


  if(hiddenQuestions.includes(question.id)){
    return null
  }


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

    if (question.condition) {
      let updatedHiddenCards, updatedHiddenQuestions;
    
      if (answer.split("$$$")[0] === question.condition.if) {
        updatedHiddenCards = Array.from(
          new Set([...hiddenCards, ...(question.condition.removeCards || [])])
        );
        updatedHiddenQuestions = Array.from(
          new Set([...hiddenQuestions, ...(question.condition.removeQuestions || [])])
        );
      } else {
        updatedHiddenCards = hiddenCards.filter((item) => !question.condition?.removeCards?.includes(item));
        updatedHiddenQuestions = hiddenQuestions.filter((item) => !question.condition?.removeQuestions?.includes(item));
      }
      console.log("Ans",answer,question.condition.if)
      console.log(updatedHiddenQuestions,question.condition.removeQuestions)
      dispatch(setHiddenData({ hiddenCards: updatedHiddenCards, hiddenQuestions: updatedHiddenQuestions }));
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
  };
  

  const handleBlur = (value: string) => {
    const errorMessage = validateInput(value, true); 
    setError(errorMessage);
    onValidationError(!!errorMessage);
  };

  if (question.type === questionTypes.TEXT_INPUT) {
    return (
      <Box>
        {question.question && (
          <Typography fontSize={"18px"} fontWeight={"600"}>
            {question.question}
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
          helperText={error} 
          sx={{
            width: "100%",
            input: {
              fontSize: "1rem !important",
              "&::placeholder": {
                color: theme.palette.primary.main,
                padding: "0 !important",
              },
            },
            "&::before": { bottom: "12px" },
          }}
        />
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
                    <Typography fontSize={"10px"}>{option.subtext}</Typography>
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
                              storedResponse?.answer[0].split("$$$").length - 1
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
                            color: theme.palette.primary.main,
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
                      color: theme.palette.tertiary.main,
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
});

export default QuestionInput;
