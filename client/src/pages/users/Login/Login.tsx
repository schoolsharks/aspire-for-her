import {
  Box,
  //   Checkbox,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import UpperTriangleBox from "../../../components/UpperTriangleBox";
import "./Login.css";
// import { Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../../store/store";
import logos from "../../../assets/company-logos.webp";
import HamburgerMenu from "../../../components/HamburgerMenu";
import ArrowButton from "../../../components/ArrowButton";
import OutlinedButton from "../../../components/OutlinedButton";
import useWindowHeight from "../../../hooks/useWindowHeight";

const Login = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { windowHeight } = useWindowHeight();

  const [error, setError] = useState<string | null>(null);
//   const dispatch = useDispatch<AppDispatch>();
//   const [tncModalOpen, setTncModalOpen] = useState<boolean>(false);
  const [emailContact, setEmailContact] = useState<string>("");

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmailContact(value);
    setError(null);
  };

  const handleSubmit = () => {
    navigate("/users/dashboard")
    //   dispatch(createApplicant(formValues)).then((response) => {
    //     if (createApplicant.rejected.match(response)) {
    //       console.error("API error:", response.error);
    //       return;
    //     }
    //     navigate("/questions");
    //   });
    // }
  };

  return (
    <Stack minHeight={windowHeight} position="relative">
      {/* {!tncModalOpen ? ( */}
      <UpperTriangleBox
        sx={{
          height: "100%",
          flex: "1",
          borderRadius: "0" ,
          margin:  "0",
          transition: "all 0.3s ease",
        }}
      >
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
            <Box>
              <HamburgerMenu />
            </Box>
          </Stack>

          <Stack spacing={3} marginTop={"32px"}>
            <TextField
              id="email-contact"
              label="Email/Contact*"
              variant="standard"
              value={emailContact}
              onChange={handleChange}
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

            <Typography
              fontWeight={"500"}
              color={"#ffffffad"}
              fontSize={"14px"}
            >
              Didn't register yet?
              <span
                onClick={() => navigate("/login")}
                style={{
                  cursor: "pointer",
                  marginLeft: "4px",
                  color: "#CD7BFF",
                }}
              >
                Signup
              </span>
            </Typography>
          </Stack>

          <Stack
            margin={"auto 0 16px"}
            alignItems={"center"}
            gap={"8px"}
            direction={"row"}
          >
            <ArrowButton
              direction="LEFT"
              onClick={() => navigate("/onboarding/3")}
            />
            <OutlinedButton
              sx={{
                color: theme.palette.tertiary.main,
                fontSize: "20px",
                borderColor: theme.palette.tertiary.main,
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

export default Login;
