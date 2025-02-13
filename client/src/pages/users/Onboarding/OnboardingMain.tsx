import { Box, Stack } from "@mui/material";
import UpperTriangleBox from "../../../components/UpperTriangleBox";
import { useParams } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import logos from "../../../assets/company-logos.webp";
import { useEffect } from "react";

const OnboardingMain = () => {
  const { page } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);
  return (
    <Stack position={"relative"}>
      <UpperTriangleBox sx={{ minHeight: window.innerHeight }}>
        {page === "1" && <Page1 />}
        {page === "2" && <Page2 />}
        {page === "3" && <Page3 />}
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
