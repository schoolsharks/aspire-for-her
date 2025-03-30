import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./Login/Login";
import { Stack } from "@mui/system";
import { useEffect } from "react";
import QuestionMain from "./Question/QuestionMain";
import Benefits from "./Benefits/Benefits";
import OnboardingMain from "./Onboarding/OnboardingMain";
import FAQs from "./FAQs/FAQs";
import Summary from "./Summary/Summary";
import ThankYou from "./ThankYou/ThankYou";
import Review from "./Benefits/Review";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchApplicant } from "../../store/applicants/applicantsActions";
import { CircularProgress } from "@mui/material";
import useWindowHeight from "../../hooks/useWindowHeight";
// import { CircularProgress } from "@mui/material";
// import { AnimatePresence } from "framer-motion";
// import AnimatedPage from "../../utils/AnimatedPage";

const ApplicantsMain = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { status, loading } = useSelector((state: RootState) => state.user);
  const location = useLocation();
  const {windowHeight} = useWindowHeight()

  useEffect(() => {
    dispatch(fetchApplicant());
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
      sx={{
        minHeight: windowHeight,
        height: "100%",
        maxWidth: "480px",
        margin: "auto",
      }}
    >
      <Routes location={location}>
        <Route path="/onboarding/:page" element={<OnboardingMain />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route
          path="/login"
          element={
            status === "LOGGED_IN" ? <Navigate to="/questions" /> : <Login />
          }
        />
        <Route
          path="/questions"
          element={
            status != "LOGGED_IN" ? <Navigate to="/login" /> : <QuestionMain />
          }
        />
        <Route
          path="/thank-you"
          element={
            status != "LOGGED_IN" ? <Navigate to="/login" /> : <ThankYou />
          }
        />
        <Route
          path="/benefits"
          element={
            status != "LOGGED_IN" ? <Navigate to="/login" /> : <Benefits />
          }
        />
        <Route
          path="/review"
          element={
            status != "LOGGED_IN" ? <Navigate to="/login" /> : <Review />
          }
        />
        <Route
          path="/summary"
          element={
            status != "LOGGED_IN" ? <Navigate to="/login" /> : <Summary />
          }
        />

        <Route path="/*" element={<Navigate to="/onboarding/1" />} />
      </Routes>
    </Stack>
  );
};

export default ApplicantsMain;
