import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import UpperTriangleBox from "../../../components/UpperTriangleBox";
import { useNavigate, useParams } from "react-router-dom";
import logos from "../../../assets/company-logos.webp";
import { useEffect } from "react";
import HamburgerMenu from "../../../components/HamburgerMenu";
import OutlinedButton from "../../../components/OutlinedButton";
import { ArrowForward } from "@mui/icons-material";
import partnersLogos from "../../../assets/partners.webp";
import InfoMenu from "./InfoMenu";

const OnboardingMain = () => {
  const { page } = useParams();
  const theme = useTheme();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <Stack position={"relative"}>
      <UpperTriangleBox sx={{ minHeight: window.innerHeight }}>
        <Stack
          color={"#fff"}
          marginTop={"-24px"}
          padding={"24px"}
          position={"relative"}
        >
          <Box marginLeft={"auto"}>
            <HamburgerMenu />
          </Box>
          <Stack marginTop={"39px"} position={"relative"}>
            <Typography
              fontSize={"20px"}
              fontWeight={"400"}
              sx={{ transform: "translateY(-100%)" }}
              position={"absolute"}
            >
              Welcome to
            </Typography>
            <Typography fontSize={"30px"} fontWeight={"700"}>
              SheExports
            </Typography>
            <Typography
              fontSize={"25px"}
              fontWeight={"600"}
              color={theme.palette.primary.main}
            >
              Season 2
            </Typography>
            <Box
              marginTop={"15px"}
              bgcolor={theme.palette.primary.main}
              padding={"5px 8px"}
              borderRadius={"2px"}
              width={"max-content"}
            >
              <Typography>Launched on - 14th February</Typography>
            </Box>
            <Typography fontSize={"18px"} fontWeight={"400"} marginTop={"15px"}>
              <b>Aspire For Her,</b> in partnership with <b>SEED</b> &{" "}
              <b>Payoneer</b>, proudly presents SheExports Season 2—a
              transformational initiative designed to help women-led service
              businesses in India expand globally! After the phenomenal success
              of Season One, we are back with a bigger, bolder season—offering
              structured learning, expert mentorship, and real growth
              opportunities to help women entrepreneurs succeed in international
              markets.
            </Typography>
            <SignInAndNextButtons />
          </Stack>

          {/* Partners */}
          <Box marginTop={"65px"}>
            <Box
              component={"img"}
              marginTop={"20px"}
              src={partnersLogos}
              alt=""
              width={"100%"}
            />
            <SignInAndNextButtons />
          </Box>
        </Stack>

        {/* Info Menu */}

        <InfoMenu />
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

const SignInAndNextButtons = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/users/login");
  };
  return (
    <Stack direction={"row"} marginTop={"22px"} gap={"10px"}>
      <OutlinedButton
        sx={{
          color: theme.palette.tertiary.main,
          fontSize: "20px",
          borderColor: theme.palette.tertiary.main,
        }}
        onClick={handleNext}
      >
        Sign In
      </OutlinedButton>
      <IconButton sx={{ padding: "0" }} onClick={handleNext}>
        <ArrowForward
          sx={{
            border: `2px solid ${theme.palette.tertiary.main}`,
            fontSize: "40px",
            padding: "4px",
            borderRadius: "50%",
            color: theme.palette.tertiary.main,
          }}
        />
      </IconButton>
    </Stack>
  );
};
