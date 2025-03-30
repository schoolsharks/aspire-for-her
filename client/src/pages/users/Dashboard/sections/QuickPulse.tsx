import React, { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const QuizCard = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample quiz questions data
  const questions = [
    {
      question: "What products do you work with?",
      options: ["Option A", "Option B", "Option C"],
      correctAnswer: "Option C",
      explanation: "Option C is the right answer because it represents the correct products."
    },
    {
      question: "Which approach is most effective for onboarding?",
      options: ["In-person training", "Video tutorials", "Documentation"],
      correctAnswer: "Video tutorials",
      explanation: "Video tutorials allow for consistent, repeatable training"
    },
    {
      question: "How often should you review product analytics?",
      options: ["Daily", "Weekly", "Monthly"],
      correctAnswer: "Weekly",
      explanation: "Weekly reviews provide enough time to gather significant data while allowing timely action on insights."
    }
  ];

  const handleChange = (index:number) => {
    setCurrentIndex(index);
  };

  return (
    <Box>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        Quickk Pulse
      </Typography>
      <Stack
        sx={{
          marginTop: "10px",
          background: theme.palette.lmsprimary.greyDark,
          padding: "16px 20px",
          borderRadius: "0px",
        }}
      >
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          selectedItem={currentIndex}
          onChange={handleChange}
          swipeable={true}
          emulateTouch={true}
          renderIndicator={() => (<></>)}
        >
          {questions.map((question, index) => (
            <QuestionCard
              key={index}
              question={question.question}
              options={question.options}
              correctAnswer={question.correctAnswer}
              explanation={question.explanation}
            />
          ))}
        </Carousel>
        <Stack justifyContent={"center"} direction={"row"} gap={"4px"} marginTop={"10px"}>
          {questions.map((_,index)=><Box sx={{width:"5px",height:"5px",borderRadius:"50%",bgcolor:index===currentIndex?"#fff":"transparent",border:index===currentIndex?"none":"1px solid #fff"}}/>)}
        </Stack>
      </Stack>
    </Box>
  );
};


interface QuestionCardProps{
  question:string;
  options:string[];
  correctAnswer:string;
  explanation:string;
}

const QuestionCard:React.FC<QuestionCardProps> = ({ question, options, correctAnswer, explanation }) => {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <Box padding={"5px"} height="100%">
    <Stack
      sx={{
        backgroundColor: theme.palette.lmsprimary.greyLight,
        padding: "16px",
        color: "#ffffff",
        gap: "20px",
        textAlign:"left",
        userSelect:"none",
        height:"100%"
      }}
    >
      {/* Question */}
      <Typography
        sx={{
          fontFamily: theme.typography.fontFamily,
          fontWeight: 700,
          fontSize: "18px",
        }}
      >
        {question}
      </Typography>

      {/* Options Container */}
      <Stack
        sx={{
          marginTop: "20px",
          gap: "5px",
        }}
      >
        {options.map((option) => (
          <Button
            key={option}
            fullWidth
            variant="contained"
            sx={{
              padding: "6px 17px",
              backgroundColor: selectedOption === option ? "#A4FF52" : "white",
              color: "#000",
              borderRadius: "0px",
              textTransform: "none",
            }}
            onClick={() => setSelectedOption(option)}
          >
            <Typography fontWeight="600" textAlign="left" width="100%">
              {option}
            </Typography>
          </Button>
        ))}
      </Stack>

      {/* Answer Explanation */}
      {selectedOption && <Box sx={{ gap: "5px", marginTop: "20px" }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "600",
          }}
        >
          Correct answer - {correctAnswer}
        </Typography>
        <Typography
          sx={{
            fontFamily: theme.typography.fontFamily,
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          Explanation – {explanation}
        </Typography>
      </Box>}
    </Stack>
    </Box>
  );
};

export default QuizCard;