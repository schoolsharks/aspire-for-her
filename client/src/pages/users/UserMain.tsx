import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./Login/Login";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import QuestionMain from "./Question/QuestionMain";
import Benefits from "./Benefits/Benefits";
import OnboardingMain from "./Onboarding/OnboardingMain";
import FAQs from "./FAQs/FAQs";
import Summary from "./Summary/Summary";
import ThankYou from "./ThankYou/ThankYou";
import Review from "./Benefits/Review";
// import { useDispatch, 
  // useSelector
//  } from "react-redux";
// import { AppDispatch, 
  // RootState 
// } from "../../store/store";
// import { fetchUser } from "../../store/user/userActions";
// import { CircularProgress } from "@mui/material";
// import { AnimatePresence } from "framer-motion";
// import AnimatedPage from "../../utils/AnimatedPage";

const UserMain = () => {
  // const dispatch=useDispatch<AppDispatch>()
  // const {status,loading}=useSelector((state:RootState)=>state.user)
  const location = useLocation();
  const [windowHeight,setWindowHeight]=useState(window.innerHeight)

  // useEffect(()=>{
  //   dispatch(fetchUser())
  // },[])

  useEffect(()=>{
    setWindowHeight(window.innerHeight)
  },[window.innerHeight])


  // if(loading){
  //   return <CircularProgress/>
  // }

  return (
    <Stack sx={{ minHeight: windowHeight, height: "100%",maxWidth:"480px",margin:"auto"}}>

      <Routes  location={location}>
        {/* <Route path="/login" element={status==="LOGGED_IN"? <Navigate to="/questions"/>:<Login/> } /> */}
        <Route path="/login" element={<Login/> } />
        <Route path="/questions" element={<QuestionMain/> } />
        <Route path="/thank-you" element={<ThankYou/> } />
        <Route path="/benefits" element={<Benefits/> } />
        <Route path="/onboarding/:page" element={<OnboardingMain/> } />
        <Route path="/faqs" element={<FAQs/> } />
        <Route path="/summary" element={<Summary/> } />
        <Route path="/review" element={<Review/> } />

        <Route path="/*" element={<Navigate to="/onboarding/1" />} />
      </Routes>
    </Stack>
  );
};

export default UserMain;
