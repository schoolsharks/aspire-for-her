import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { useTheme } from "@mui/material/styles";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const workshops = [
  {
    title: "Win Global Customers: UI/UX, Branding, Content, Email",
    author: "By Karan Singla",
    role: "(Content Writer)",
    duration: "2hr",
    views: "250",
  },
  {
    title: "Mastering Digital Marketing Strategies",
    author: "By Sneha Gupta",
    role: "(Marketing Expert)",
    duration: "1.5hr",
    views: "180",
  },
];

const Onlineworkshop: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        Online Workshops
      </Typography>

      <Box marginTop={"10px"}>
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          infiniteLoop={false}
          centerMode={true}
          centerSlidePercentage={70}
          emulateTouch
        >
          {workshops.map((workshop, index) => (
            <Box
              padding={index === 0 ? "0 5px 0 0" : "0 5px"}
              sx={{ textAlign: "center",userSelect:"none" }}
            >
              <Box
                key={index}
                sx={{
                  backgroundColor: "#252525",
                  borderRadius: "0px",
                  padding: "10px 6px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    opacity: 0.6,
                  }}
                >
                  <Stack direction={"row"} alignItems={"center"} gap={"4px"}>
                    <VisibilityOutlinedIcon
                      sx={{
                        fontSize: "12px", // Sets width and height to 12px
                      }}
                    />
                    <Typography fontSize={"10px"}>250</Typography>
                  </Stack>
                  <Typography fontSize="10px">2hr</Typography>
                </Box>
                <Stack
                  sx={{
                    backgroundColor: theme.palette.lmsprimary.main,
                    padding: "7px 3px",
                    marginTop: "5px",
                    borderRadius: "10px 10px 0 0",
                    color: "#07010B",
                    minHeight: "128px",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      textAlign: "left",
                    }}
                  >
                    {workshop.title}
                  </Typography>
                  <Stack
                    marginTop={"24px"}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between" // Ensures left text & right image
                    sx={{
                      width: "100%",
                    }}
                  >
                    {/* Author & Role moved slightly down */}
                    <Stack alignItems={"flex-start"}>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "10px",
                        }}
                      >
                        {workshop.author}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "8px",
                        }}
                      >
                        {workshop.role}
                      </Typography>
                    </Stack>

                    {/* Circular Image shifted slightly downward */}
                    <Box
                      sx={{
                        width: "23px",
                        height: "23px",
                        borderRadius: "50%",
                        backgroundImage: `url(https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                      }}
                    />
                  </Stack>
                </Stack>

                <Button
                  variant="outlined"
                  endIcon={
                    <LinkedInIcon
                      style={{ fontSize: "16px", marginLeft: "5px" }}
                    />
                  }
                  sx={{
                    backgroundColor: "transparent",
                    color: "white",
                    marginTop: "10px",
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: "8px",
                    borderRadius: "2px",
                    borderColor: "#FFFFFF",
                  }}
                >
                  Connect with mentor
                </Button>

                <Stack
                  sx={{
                    borderRadius: "2px",
                    padding: "5px",
                    marginTop: "10px",
                    backgroundColor: "#F1F1F1",
                    color: "#000",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "10px",
                      textAlign: "left",
                    }}
                  >
                    One-on-one with the speaker
                  </Typography>

                  <Box position={"relative"}>
                    <TextField
                      fullWidth
                      // variant="standard"
                      multiline={true}
                      rows={3}
                      sx={{
                        color: "#000",
                        "& .MuiInputBase-root ":{
                          padding:"0"
                        },
                        "& textarea": {
                          fontSize: "12px",
                          lineHeight: "15px",
                          zIndex: "1",
                        },
                        "& fieldset": {
                          padding:"0",
                          border: "none",
                        },
                      }}
                    />
                    <Stack
                      position="absolute"
                      width={"100%"}
                      top={"0"}
                    >
                      {Array.from({ length: 3 }).map(() => (
                        <Box
                          width="100%"
                          height={"1px"}
                          marginTop={"14px"}
                          bgcolor="#000"
                        />
                      ))}
                    </Stack>
                  </Box>

                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#000",
                      textTransform: "none",
                      borderRadius: "2px",
                      width: "max-content",
                      padding: "2px ",
                      marginTop: "13px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: "#000",
                        fontSize: "10px",
                      }}
                    >
                      Request
                    </Typography>
                  </Button>
                </Stack>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Onlineworkshop;
