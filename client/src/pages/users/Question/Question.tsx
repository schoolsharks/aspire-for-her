import {
  Box,
//   FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Question, questionTypes } from "../../../data/cardsData";
import React from "react";

const QuestionInput = React.memo(({ question }: { question: Question }) => {
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
          label={question.placeholder}
          variant="standard"
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
          <Stack gap={"16px"} marginTop={"24px"}>
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
                <Box>
                  <Typography>{option.text}</Typography>
                  {option.subtext && (
                    <Typography fontSize={"10px"}>{option.subtext}</Typography>
                  )}
                </Box>
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
