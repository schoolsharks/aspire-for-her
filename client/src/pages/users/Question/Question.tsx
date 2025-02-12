import {
  Box,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Question, questionTypes } from "../../../data/cardsData";
import React from "react";
import { syncResponses } from "../../../store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";

const QuestionInput = React.memo(({ question }: { question: Question }) => {
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const storedResponse = useSelector((state: RootState) =>
    state.user.responses.find((res) => res.questionId === question.id)
  );

  const handleResponseChange = (newAnswer: string | string[]) => {
    dispatch(
      syncResponses({
        questionId: question.id,
        answer: Array.isArray(newAnswer) ? newAnswer : [newAnswer],
      })
    );
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
          variant="standard"
          sx={{
            width: "100%",
            input: {
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
            storedResponse?.answer[0].split("$$$")[0] === "Other" || question?.textInput
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
                      id="standard-basic"
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
                sx={{
                  input: {
                    fontSize: "12px !important",
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
