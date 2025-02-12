import {
  Box,
  //   FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Question, questionTypes } from "../../../data/cardsData";
import React from "react";

const QuestionInput = React.memo(({ question }: { question: Question }) => {
  const theme = useTheme();

  if (question.type === questionTypes.TEXT_INPUT) {
    return (
      <Box>
        {question.question && (
          <Typography fontSize={"18px"} fontWeight={"600"}>
            {question.question}
          </Typography>
        )}
        <TextField
          id="standard-basic"
          label={question.label}
          placeholder={question.placeholder}
          variant="standard"
          sx={{
            input: {
              "&::placeholder": {
                color: theme.palette.primary.main,
                padding:"0 !important",
              },
            },
            "&::before":{bottom:"12px"}
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
        >
          <Stack gap={question.options.length>8?"5px":"16px"} marginTop={"24px"}>
            {question.options.map((option, index) => (
              <Stack
                key={index}
                direction={"row"}
                alignItems={"center"}
                gap={"12px"}
              >
                <Radio
                  value={true}
                  sx={{
                    padding: "0",
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                  }}
                />
                <Stack flex={"1"} >
                  <Typography>{option.text}</Typography>
                  {option.subtext && (
                    <Typography fontSize={"10px"}>{option.subtext}</Typography>
                  )}
                  {option.other && (
                    <TextField
                      id="standard-basic"
                      placeholder={"Please Specify"}
                      variant="standard"
                      sx={{
                        input: {
                          fontSize:"12px !important",
                          width:"100%",
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
          </Stack>
        </RadioGroup>
      </Box>
    );
  }
  return null;
});

export default QuestionInput;
