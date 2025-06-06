import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTheme } from "@mui/material/styles";

type Workshop = {
  date: string;
  mode: "Live" | "Recorded";
  title: string;
  details: string;
  author?: string;
  role?: string; // Make role optional
  time: string;
};

const workshopsByMonth: { [key: string]: Workshop[] } = {
  April: [
    {
      date: "12th April, Saturday",
      mode: "Live",
      title: "Mumbai - SNDT",
      details: "Launch Event",
      time: "11am - 6:00pm",
    },
    {
      date: "26th April, Saturday",
      mode: "Live",
      title: "Pune - Venue details",
      details: "Launch Event",
      time: "7pm - 9pm",
    },
    {
      date: "10th May, Friday",
      mode: "Live",
      title: "Ahmedabad - Venue details",
      details: "Launch Event",
      time: "7pm - 9pm",
    },
  ],
  May: [
    {
      date: "10th May, Friday",
      mode: "Live",
      title: "Ahmedabad - Venue details",
      details: "Win Global Customers: UI/UX, Branding, Content, Email",
      author: "By Rahul Verma",
      role: "(Content Writer)",
      time: "7pm - 9pm",
    },
    {
      date: "16th May, Friday",
      mode: "Live",
      title: "Chandigarh - Venue details ",
      details: "Win Global Customers: UI/UX, Branding, Content, Email",
      author: "By Astha Jain",
      role: "(Content Writer)",
      time: "7pm - 9pm",
    },
    {
      date: "17th May, Saturday",
      mode: "Live",
      title: "Delhi - Venue details",
      details: "Win Global Customers: UI/UX, Branding, Content, Email",
      author: "By Rahul Verma",
      role: "(Content Writer)",
      time: "7pm - 9pm",
    },
  ],
  June: [
    {
      date: "7th June, Saturday",
      mode: "Live",
      title: "Bangalore - Venue details",
      details: "Win Global Customers: UI/UX, Branding, Content, Email",
      author: "By Rahul Verma",
      role: "(Content Writer)",
      time: "7pm - 9pm",
    },
  ],
};

type WorkshopMode = "Live" | "Recorded";
const workshopModes: WorkshopMode[] = ["Live", "Recorded"];

const WorkshopList: React.FC = () => {
  const theme = useTheme();
  const [selectedMode, setSelectedMode] = useState<"Live" | "Recorded">("Live");

  const handleModeChange = (mode: "Live" | "Recorded") => {
    setSelectedMode(mode);
  };

  return (
    <Stack>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        Upcoming Workshops
      </Typography>

      <Stack direction="row" sx={{ width: "100%", marginTop: "15px" }}>
        {workshopModes.map((mode, index) => (
          <Button
            key={index}
            variant="contained"
            onClick={() => handleModeChange(mode)}
            sx={{
              flex: 1,
              borderRadius: "0px",
              backgroundColor:
                selectedMode === mode
                  ? theme.palette.lmsprimary.greyLight
                  : theme.palette.lmsprimary.greyDark,
              color: "white",
              textTransform: "none",
            }}
          >
            {mode}
          </Button>
        ))}
      </Stack>
      <Box
        sx={{
          borderRadius: "0px",
          gap: "18px",
          marginTop: "15px",
        }}
      >
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          swipeable={true}
          emulateTouch={true}
          centerMode={true}
          centerSlidePercentage={96}
          renderIndicator={() => <></>}
        >
          {Object.entries(workshopsByMonth).map(([month, workshops]) => {
            // Filter workshops by selected mode
            const filteredWorkshops = workshops.filter(
              (workshop) => workshop.mode === selectedMode
            );

            // Group workshops by date
            const groupedWorkshops = filteredWorkshops.reduce(
              (acc: { [key: string]: typeof workshops }, workshop) => {
                if (!acc[workshop.date]) {
                  acc[workshop.date] = [];
                }
                acc[workshop.date].push(workshop);
                return acc;
              },
              {}
            );

            return (
              <Box key={month} padding="5px" sx={{ userSelect: "none", textAlign: "left",height:"100%" }} >
                <Box
                  key={month}
                  sx={{
                    padding: "10px",
                    // height:"100%",
                    border: "0.5px solid #fff",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: 700,
                      fontSize: "20px",
                    }}
                  >
                    {month}
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      height: "1px",
                      margin: "5px 0 18px",
                      bgcolor: "#FFFFFF",
                    }}
                  />
                  {Object.entries(groupedWorkshops).map(
                    ([date, workshopsOnDate]) => (
                      <Box key={date} sx={{ marginBottom: "20px" }}>
                        {/* Date Heading */}
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          {date}
                        </Typography>
                        {/* Workshops under the same date */}
                        <Stack gap={"5px"} marginTop={"5px"}>
                          {workshopsOnDate.map((workshop, index) => (
                            <Box
                              key={index}
                              sx={{
                                backgroundColor:
                                  theme.palette.lmsprimary.greyLight,
                                padding: "9px 12px",
                                borderRadius: "0px",
                              }}
                            >
                              <Typography
                                sx={{
                                  color: theme.palette.lmsprimary.main,
                                  fontWeight: 700,
                                }}
                              >
                                {workshop.title}
                              </Typography>
                              <Typography
                                sx={{
                                  marginTop: "8px",
                                  fontWeight: 500,
                                  fontSize: "14px",
                                }}
                              >
                                {workshop.details}
                              </Typography>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginTop: "8px",
                                  color: theme.palette.lmsprimary.main,
                                  // Add spacing between details and this row
                                }}
                              >
                                {workshop.author && <Box>
                                  <Typography
                                    sx={{
                                      fontWeight: 500,
                                      fontSize: "14px",
                                    }}
                                  >
                                    {workshop.author}
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontWeight: 500,
                                      fontSize: "10px",
                                      fontFamily: theme.typography.fontFamily,
                                      textAlign: "left",
                                    }}
                                  >
                                    {workshop.role}
                                  </Typography>
                                </Box>}
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontWeight: 500,
                                    fontSize: "14px",
                                  }}
                                >
                                  {workshop.time}
                                </Typography>
                              </Box>
                            </Box>
                          ))}
                        </Stack>
                      </Box>
                    )
                  )}
                </Box>
              </Box>
            );
          })}
        </Carousel>
      </Box>
    </Stack>
  );
};

export default WorkshopList;
