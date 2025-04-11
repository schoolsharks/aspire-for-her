import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import UpperTriangleBox from "../../../components/UpperTriangleBox";
import { useNavigate, useParams } from "react-router-dom";
import logos from "../../../assets/company-logos.webp";
import { useEffect } from "react";
// import HamburgerMenu from "../../../components/HamburgerMenu";
import OutlinedButton from "../../../components/OutlinedButton";
import { ShareOutlined } from "@mui/icons-material";
// import partnersLogos from "../../../assets/partners.webp";
// import InfoMenu from "./InfoMenu";
import WorkshopsSessions from "./InfoSections/WorkshopsSessions";
import KeySessions from "./InfoSections/KeySessions";
import WhySheExports from "./InfoSections/WhySheExports";
// import ArrowButton from "../../../components/ArrowButton";
import Partners from "./InfoSections/Partners";
import BehindTheScenes from "./InfoSections/BehindTheScenes";

const OnboardingMain = () => {
  const { page } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handleShare=()=>{
    const waShareUrl="https://api.whatsapp.com/send?text=Join%20SheExports%20Season%202%20-%20A%20transformational%20initiative%20for%20women-led%20service%20businesses%20in%20India.%0ALaunch%20Date:%2012th%20April,%20Saturday,%20Mumbai.%0A2PM%20Onwards.%0Ahttps://sheexports.afh.wgab.world";

    window.open(waShareUrl, "_blank")
  }

  return (
    <Stack position={"relative"}>
      <UpperTriangleBox sx={{ minHeight: window.innerHeight }}>
        <Stack
          color={"#fff"}
          marginTop={"-24px"}
          padding={"24px"}
          paddingBottom={"150px"}
          position={"relative"}
        >
          <Box marginLeft={"auto"}>
            <IconButton onClick={handleShare}>
              <ShareOutlined sx={{color:theme.palette.tertiary.main}}/>
            </IconButton>
            {/* <HamburgerMenu /> */}
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
              <Typography>
                Launch Date - 12th April, Saturday, Mumbai <br />2 PM Onwards
              </Typography>
            </Box>
            <Typography fontSize={"18px"} fontWeight={"300"} marginTop={"15px"}>
              <b style={{ fontWeight: "600" }}>Aspire For Her,</b> in
              partnership with <b style={{ fontWeight: "600" }}>SEED</b> &{" "}
              <b style={{ fontWeight: "600" }}>Payoneer</b>, proudly presents{" "}
              <b style={{ fontWeight: "600" }}>SheExports Season 2</b>—a
              transformational initiative designed to help women-led service
              businesses in India expand globally!
              <br />
              <br />
              SheExports is a high-impact 5-month hybrid accelerator program
              created to:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  11 City-Based Workshops (Delhi/NCR, Chandigarh, Kolkata ,
                  Mumbai, Pune, Ahmedabad, Surat, Indore, Bengaluru, Chennai,
                  Coimbatore)
                </li>
                <li>
                  One-on-One Mentorship (Tailored coaching with global business
                  experts)
                </li>
                <li>
                  Speed Mentoring Sessions (Focused problem-solving with
                  industry leaders)
                </li>
                <li>
                  Expert-Led Online Tracks (Deep dives into international
                  markets, branding, AI, and more)
                </li>
              </ul>
            </Typography>
            <OutlinedButton
              sx={{
                color: theme.palette.tertiary.main,
                fontSize: "20px",
                borderColor: theme.palette.tertiary.main,
                marginTop: "37px",
              }}
              onClick={() => navigate("/login")}
            >
              Secure Your Spot
            </OutlinedButton>
          </Stack>

          <Box marginTop={"80px"}>
            <WorkshopsSessions />
          </Box>

          <Box marginTop={"80px"}>
            <KeySessions />
          </Box>

          <Box marginTop={"80px"}>
            <WhySheExports />
          </Box>

          {/* Partners */}
          <Box marginTop={"65px"}>
            <Partners/>
          </Box>


          <Box marginTop={"65px"}>
            <BehindTheScenes/>
          </Box>
        </Stack>


                
        {/* Info Menu

        <InfoMenu /> */}
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

// const SignInAndNextButtons = () => {
//   const theme = useTheme();
//   const navigate = useNavigate();

//   const handleNext = () => {
//     navigate("/users/login");
//   };
//   return (
//     <Stack direction={"row"} marginTop={"22px"} gap={"10px"}>
//       <OutlinedButton
//         sx={{
//           color: theme.palette.tertiary.main,
//           fontSize: "20px",
//           borderColor: theme.palette.tertiary.main,
//         }}
//         onClick={handleNext}
//       >
//         Sign In
//       </OutlinedButton>
//       <IconButton sx={{ padding: "0" }} onClick={handleNext}>
//         <ArrowForward
//           sx={{
//             border: `2px solid ${theme.palette.tertiary.main}`,
//             fontSize: "40px",
//             padding: "4px",
//             borderRadius: "50%",
//             color: theme.palette.tertiary.main,
//           }}
//         />
//       </IconButton>
//     </Stack>
//   );
// };
