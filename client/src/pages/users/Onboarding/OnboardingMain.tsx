import { Stack } from "@mui/material";
import UpperTriangleBox from "../../../components/UpperTriangleBox";
import { useParams } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const OnboardingMain = () => {
  const { page } = useParams();
  return (
    <Stack>
      <UpperTriangleBox sx={{ minHeight: window.innerHeight }}>
        {page === "1" && <Page1 />}
        {page === "2" && <Page2 />}
        {page === "3" && <Page3 />}
      </UpperTriangleBox>
    </Stack>
  );
};

export default OnboardingMain;
