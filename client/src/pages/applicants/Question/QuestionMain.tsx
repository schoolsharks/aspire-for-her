import { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Question from "./Question";
import StepperPoints from "../../../components/StepperPoints";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { syncFinalResponses } from "../../../store/applicants/applicantsSlice";
import { fetchCardsData } from "../../../store/cards/cardsActions";

const QuestionMain = () => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const { cardsData, hiddenCards, hiddenQuestions, validationRequirements, loading } = useSelector(
    (state: RootState) => state.cards
  );
  const page = parseInt(searchParams.get("page") || "0");

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [invalidFields, setInvalidFields] = useState<Set<string>>(new Set());

  const dispatch = useDispatch<AppDispatch>();
  const responses = useSelector((state: RootState) => state.user.responses);
  const navigate = useNavigate();

  const filteredCards = cardsData?.filter(
    (item) => !hiddenCards.includes(item.id)
  );

  const [activeIndex, setActiveIndex] = useState(
    (!filteredCards.length || page <= filteredCards.length) ? page : filteredCards.length
  );

  useEffect(() => {
    if (activeIndex >= 0) {
      setSearchParams({ page: activeIndex.toString() });
    }
  }, [activeIndex, setSearchParams]);

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < filteredCards.length - 1) {
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

  useEffect(() => {
    if (!cardsData.length) {
      dispatch(fetchCardsData())
    }
  }, [dispatch, cardsData.length]);

  // Updated to check validationRequirements
  const allMandatoryAnswered = filteredCards[activeIndex]?.questions
    .filter((item) => !hiddenQuestions.includes(item.id))
    .every((q) => {
      // Check if this question has a dynamic required state
      const isRequired = validationRequirements[q.id] !== undefined 
        ? validationRequirements[q.id] 
        : q.validation?.required || false;

      // If not required, return true (no need to check for answer)
      if (!isRequired) return true;

      // If required, check for a valid answer
      const response = responses.find((res) => res.questionId === q.id);
      return response?.answer?.some((ans) => ans && ans.trim() !== "") ?? false;
    });

  const hasInvalidFields = [...invalidFields].some(
    (item) => !hiddenQuestions.includes(item)
  );

  useEffect(() => {
    console.log("invalid", invalidFields);
    console.log("Has Invalid fields", hasInvalidFields);
  }, [invalidFields]);

  const isNextDisabled = !allMandatoryAnswered || hasInvalidFields;

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return (
      <Stack
        minHeight={window.innerHeight}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <CircularProgress sx={{ color: "#000" }} />
      </Stack>
    );
  }

  return (
    <Stack
      sx={{ bgcolor: "#000", minHeight: windowHeight }}
      padding={"48px 0 10px"}
    >
      <Typography
        color={theme.palette.tertiary.main}
        fontSize={"24px"}
        fontWeight={"600"}
        margin={"0px 24px"}
        minHeight={"72px"}
      >
        {filteredCards[activeIndex]?.title}
      </Typography>

      <Box margin={"24px auto"}>
        <StepperPoints
          totalPoints={filteredCards.length}
          active={activeIndex}
        />
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
          {filteredCards.map((card, index) => (
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
                  <Question
                    key={index}
                    question={question}
                    onValidationError={(isInvalid) => {
                      setInvalidFields((prev) => {
                        const newSet = new Set(prev);
                        if (isInvalid) {
                          newSet.add(question.id);
                          console.log("Adding", question.id);
                        } else {
                          newSet.delete(question.id);
                        }
                        return newSet;
                      });
                    }}
                  />
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
                <IconButton disabled={isNextDisabled} onClick={handleNext}>
                  <ArrowForward
                    sx={{
                      color: isNextDisabled ? "#ffffff88" : "#fff",
                      border: isNextDisabled
                        ? "2px solid #ffffff88"
                        : "2px solid #ffffff",
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