import { Box, Stack } from "@mui/material";
import UpperTriangleBox from "../../../components/UpperTriangleBox";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import logos from "../../../assets/company-logos.webp";
import { useEffect } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";

const OnboardingMain = () => {
  const { page } = useParams();
  const location=useLocation()
  const navigate=useNavigate()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); 
        navigate(location.pathname, { replace: true });
      }
    }
  }, [location]);

  return (
    <Stack position={"relative"}>
      <UpperTriangleBox sx={{ minHeight: window.innerHeight }}>
        {page==="1" && <Page1/>}
        {page==="2" && <Page2/>}

      </UpperTriangleBox>
      <Box
        component="img"
        src={logos}
        alt=""
        sx={{
          position: "absolute",
          top: "10px",
          right: "16px",
          width: "218px",
        }}
      />
    </Stack>
  );
};

export default OnboardingMain;
