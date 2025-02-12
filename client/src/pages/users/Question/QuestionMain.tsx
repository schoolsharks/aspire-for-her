import { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { cardsData } from "../../../data/cardsData";
import Question from "./Question";
import StepperPoints from "../../../components/StepperPoints";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { syncFinalResponses } from "../../../store/user/userSlice";

const QuestionMain = () => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "0");

  const dispatch = useDispatch<AppDispatch>();
  const [activeIndex, setActiveIndex] = useState(page);
  const responses = useSelector((state: RootState) => state.user.responses);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchParams({ page: activeIndex.toString() }); 
  }, [activeIndex, setSearchParams]);

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < cardsData.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      dispatch(syncFinalResponses());
      navigate("/thank-you");
    }
  };

  const getCardStyle = (index: number) => {
    const isActive = index === activeIndex;
    const isPrevious = index === activeIndex - 1;
    const isNext = index === activeIndex + 1;

    if (isActive) {
      return {
        transform: "scale(1) translateX(0)",
        zIndex: 3,
        opacity: 1,
        willChange: "transform, opacity",
      };
    } else if (isPrevious) {
      return {
        transform: "scale(0.85) translateX(-70%) rotate(-5deg)",
        zIndex: 2,
        opacity: 0.7,
        willChange: "transform, opacity",
      };
    } else if (isNext) {
      return {
        transform: "scale(0.85) translateX(70%) rotate(5deg)",
        zIndex: 2,
        opacity: 0.7,
        willChange: "transform, opacity",
      };
    }

    return {
      transform: "scale(0.7) translateX(0)",
      zIndex: 1,
      opacity: 0,
      willChange: "transform, opacity",
    };
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 20, behavior: "smooth" });
    }, 100);
  }, []);

  const allAnswered = cardsData[activeIndex].questions.every(
    (q) => (responses.find((res) => res.questionId === q.id)?.answer?.length ?? 0) > 0
  );
  

  return (
    <Stack
      sx={{ bgcolor: "#000", minHeight: window.innerHeight }}
      padding={"48px 0 10px"}
    >
      <Typography
        color={theme.palette.tertiary.main}
        fontSize={"24px"}
        fontWeight={"600"}
        margin={"0px 24px"}
        minHeight={"72px"}
      >
        {cardsData[activeIndex].title}
      </Typography>

      <Box margin={"24px auto"}>
        {" "}
        <StepperPoints totalPoints={cardsData.length} active={activeIndex} />
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          flex: "1",
          display: "flex",
          minHeight: "520px",
          justifyContent: "center",
          overflowX: "hidden",
          overflowY: "visible",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "90%",
          }}
        >
          {cardsData.map((card, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                position: "absolute",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                height: "max-content",
                minHeight: "490px",
                backgroundColor: "purple",
                borderRadius: "16px",
                transition: "all 0.5s ease-in-out",
                color: "#fff",
                background: "linear-gradient(180deg, #A04AD4 0%, #480571 100%)",
                border: "1px solid #fff",
                padding: "24px",
                gap: "16px",
                ...getCardStyle(index),
              }}
            >
              <Stack gap={"24px"} flex={"1"}>
                {card.questions.map((question, index) => (
                  <Question key={index} question={question} />
                ))}
              </Stack>

              <Stack
                direction={"row"}
                justifyContent={"center"}
                gap={"75px"}
                marginTop={"auto"}
              >
                <IconButton
                  onClick={handlePrevious}
                  disabled={activeIndex === 0}
                >
                  <ArrowBack
                    sx={{
                      color: "#fff",
                      border: "2px solid #ffffff",
                      borderRadius: "50%",
                      fontSize: "36px",
                      padding: "5px",
                    }}
                  />
                </IconButton>
                <IconButton disabled={!allAnswered} onClick={handleNext}>
                  <ArrowForward
                    sx={{
                      color: !allAnswered ? "#ffffff88" :"#fff",
                      border: !allAnswered? "2px solid #ffffff88":"2px solid #ffffff",
                      borderRadius: "50%",
                      fontSize: "36px",
                      padding: "5px",
                    }}
                  />
                </IconButton>
              </Stack>
            </Paper>
          ))}
        </Box>
      </Box>
    </Stack>
  );
};

export default QuestionMain;
