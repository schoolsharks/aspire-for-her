import {
  Box,
  Checkbox,
  IconButton,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import UpperTriangleBox from "../../../components/UpperTriangleBox";
import "./Login.css";
import { Close, ShareOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { createApplicant } from "../../../store/applicants/applicantsActions";
import logos from "../../../assets/company-logos.webp";
import ArrowButton from "../../../components/ArrowButton";
import OutlinedButton from "../../../components/OutlinedButton";

const Login = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const [tncModalOpen, setTncModalOpen] = useState<boolean>(false);
  const [tncAccepted, setTncAccepted] = useState<boolean>(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    contact: "",
    employeeId: "",
  });

  const handleChange = (field: any) => (e: any) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (formValues.name.trim() === "") {
      setError("Name is required");
    } else if (formValues.email.trim() === "") {
      setError("Email is required");
    } else if (formValues.contact.trim() === "") {
      setError("Contact is required");
    } else if (!tncAccepted) {
      setError("Accept terms and conditions to continue");
    } else {
      // navigate("/questions");
      dispatch(createApplicant(formValues)).then((response) => {
        if (createApplicant.rejected.match(response)) {
          console.error("API error:", response.error);
          return;
        }
        navigate("/questions");
      });
    }
  };

  const handleShare = () => {
    const waShareUrl =
      "https://api.whatsapp.com/send?text=Join%20SheExports%20Season%202%20-%20A%20transformational%20initiative%20for%20women-led%20service%20businesses%20in%20India.%0ALaunch%20Date:%2012th%20April,%20Saturday,%20Mumbai.%0A2PM%20Onwards.%0Ahttps://sheexports.afh.wgab.world";

    window.open(waShareUrl, "_blank");
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Stack minHeight={windowHeight} position="relative">
      {/* {!tncModalOpen ? ( */}
      <UpperTriangleBox
        sx={{
          height: "100%",
          flex: !tncModalOpen ? "1" : "auto",
          borderRadius: !tncModalOpen ? "0" : "20px",
          margin: !tncModalOpen ? "0" : "72px 20px ",
          transition: "all 0.3s ease",
        }}
      >
        {!tncModalOpen ? (
          <Stack padding="24px" flex={"1"} marginTop={"-36px"}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Box>
                <Typography color="#fff" fontSize={"30px"} fontWeight={"700"}>
                  SheExports
                </Typography>
                <Typography color="#fff" fontSize={"20px"} fontWeight={"600"}>
                  Season 2
                </Typography>
              </Box>
              <Box marginTop={"12px"}>
                <IconButton onClick={handleShare}>
                  <ShareOutlined
                    sx={{
                      color: theme.palette.tertiary.main,
                    }}
                  />
                  {/* <HamburgerMenu /> */}
                </IconButton>
              </Box>
            </Stack>

            <Stack spacing={3} marginTop={"32px"}>
              <TextField
                id="name"
                label="Name *"
                variant="standard"
                placeholder="eg. Vanessa Jenson"
                value={formValues.name}
                onChange={handleChange("name")}
              />
              <TextField
                id="email"
                label="Email *"
                // className="not-mandate"
                variant="standard"
                placeholder="eg. vanessa.jenson@example.com"
                value={formValues.email}
                onChange={handleChange("email")}
              />
              <TextField
                id="contact"
                label="Contact *"
                variant="standard"
                // className="not-mandate"
                placeholder="eg. +91 XXXXX XXXXX"
                value={formValues.contact}
                onChange={handleChange("contact")}
              />
              {error && (
                <Typography
                  fontSize={"12px"}
                  color="red"
                  bgcolor="white"
                  padding="0 10px"
                >
                  {error}
                </Typography>
              )}
              <Stack
                direction={"row"}
                alignItems={"center"}
                sx={{ transform: "translateX(-14px)" }}
              >
                <Checkbox
                  checked={tncAccepted}
                  onChange={() => setTncAccepted((prev) => !prev)}
                  sx={{
                    "&.MuiCheckbox-root": { color: "#ffffff" },
                  }}
                />
                <Typography
                  fontWeight={"500"}
                  color={"#ffffffad"}
                  fontSize={"14px"}
                >
                  I agree to the
                  <span
                    onClick={() => setTncModalOpen(true)}
                    style={{
                      cursor: "pointer",
                      marginLeft: "4px",
                      color: "#ffffff",
                    }}
                  >
                    Terms & conditions{" "}
                  </span>
                </Typography>
              </Stack>
            </Stack>

            <Stack
              margin={"auto 0 16px"}
              alignItems={"center"}
              gap={"8px"}
              direction={"row"}
            >
              <ArrowButton
                direction="LEFT"
                onClick={() => navigate("/onboarding/1")}
              />
              <OutlinedButton
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: "20px",
                  borderColor: theme.palette.primary.main,
                }}
                onClick={handleSubmit}
              >
                Secure your spot
              </OutlinedButton>
            </Stack>
            {/* <Stack direction={"row"}>
              <IconButton
                onClick={() => navigate("/onboarding/1")}
                sx={{ padding: "0" }}
              >
                <ArrowBack
                  sx={{
                    border: "2px solid white",
                    fontSize: "40px",
                    padding: "4px",
                    borderRadius: "50%",
                    color: "#ffffff",
                  }}
                />
              </IconButton>

              <Button
                variant="outlined"
                sx={{
                  width: "max-content",
                  textTransform: "none",
                  borderRadius: "48px",
                  fontSize: "20px",
                  padding: "0 28px",
                  height: "40px",
                  border: "2px solid #fff",
                  color: "#fff",
                }}
              >
                Secure your spot
              </Button>
            </Stack> */}
          </Stack>
        ) : (
          <Stack
            color={"#fff"}
            padding={"16px"}
            marginBottom={"32px"}
            marginTop={"-20px"}
          >
            <Stack direction={"row-reverse"}>
              <IconButton onClick={() => setTncModalOpen(false)}>
                <Close sx={{ color: "#fff" }} />
              </IconButton>
            </Stack>
            <Typography
              fontSize={"25px"}
              fontWeight={"800"}
              textAlign={"center"}
              marginTop={"16px"}
            >
              DISCLAIMER
            </Typography>
            <Typography marginTop={"24px"} fontSize={"12px"} fontWeight={"700"}>
              By submitting your application, you give consent for the
              information provided to be used for evaluation purposes and to be
              shared with mentors and program partners for guidance and
              networking opportunities. You agree to join the Aspire For Her
              community and receive exclusive offers from partners, event
              invitations, and program-related communications. The information
              provided should be accurate and factual; any misrepresentation may
              result in immediate disqualification from the program. Aspire For
              Her reserves the right of refusal, and submission of information
              does not guarantee inclusion in the program. The organization may
              not be held responsible for selection decisions.
              <br />
              <br />
              Please note that travel and accommodation expenses must be covered
              by participants. Session dates and venues will be communicated
              well in advance. The management reserves the right to modify or
              consolidate venues in case of unforeseen circumstances or
              unavailability. We strongly recommend confirming details with the
              organizers before making travel arrangements, especially for
              outstation participants.
            </Typography>
          </Stack>
        )}
      </UpperTriangleBox>
      {/* ) : ( */}
      {/* <UpperTriangleBox
          sx={{ height: "100%", margin: "72px 20px ", borderRadius: "20px" }}
        >
          <Stack color={"#fff"} padding={"16px"} marginBottom={"32px"} marginTop={"-20px"}>
            <Stack direction={"row-reverse"}>
              <IconButton onClick={() => setTncModalOpen(false)}>
                <Close sx={{ color: "#fff" }} />
              </IconButton>
            </Stack>
            <Typography
              fontSize={"24px"}
              fontWeight={"800"}
              textAlign={"center"}
              marginTop={"16px"}
            >
              TERMS & CONDITIONS
            </Typography>
            <Typography marginTop={"12px"}>
              This game is designed for fun and educational purposes only!{" "}
              <br />
              <br />
              No real data will be collected, stored, or shared during the game.{" "}
              <br />
              <br />
              All inputs will be erased after the game concludes unless you
              explicitly request to stay connected for follow-up discussions or
              insights. <br />
              <br />
              Enjoy the experience without any worries! <br />
              <br />
            </Typography>
          </Stack>
        </UpperTriangleBox>
      )} */}

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

export default Login;
