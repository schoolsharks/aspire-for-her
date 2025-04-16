import { Box, Stack, Typography, useTheme } from "@mui/material";

const WorkshopsSessions = () => {
  const theme = useTheme();
  const currentActiveDot = 1;
  const lineActive = 1;

  const workshopsSessions = [
    "12th April, Sunday \nSNDT Campus, Mumbai \n2pm-8pm",
    "25th April, Friday\nVenue TBA, Pune \n2pm-8pm",
    "May,\nAhmedabad",
    "May,\nChandigarh",
    "May,\nDelhi",
  ];
  return (
    <Stack>
      <Typography fontWeight={"700"} fontSize={"30px"}>
        Workshops
      </Typography>
      <Typography
        color={theme.palette.primary.main}
        fontWeight={"600"}
        fontSize={"25px"}
      >
        Sessions
      </Typography>
      <Stack
        bgcolor={"#07010B"}
        padding="20px"
        borderRadius={"10px"}
        gap="40px"
        marginTop={"12px"}
      >
        {workshopsSessions.map((session, index) => (
          <Stack key={index} direction={"row"} gap={"22px"} minHeight={"102px"}>
            <Box
              border={`4px solid ${
                lineActive === index ? theme.palette.tertiary.main :index<lineActive?"#ffffff5b": "#FFFFFF40"
              }`}
              borderRadius={"50%"}
              height={"max-content"}
              marginTop={"12px"}
              position={"relative"}
            >
              <Box
                bgcolor={index === currentActiveDot ? "#fff" : "#07010B"}
                sx={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  boxSizing: "content-box",
                  border: `4px solid #07010B`,
                }}
              ></Box>
              {index != workshopsSessions.length-1 && (
                <Box
                  height={"100px"}
                  width={"4px"}
                  position={"absolute"}
                  sx={{
                    bgcolor:
                    index===lineActive ?theme.palette.tertiary.main:
                      (index < lineActive
                        ? "#ffffff5b"
                        : "#FFFFFF40"),
                    borderRadius: "5px",
                    top: "140%",
                    left: "50%",
                    transform: "translate(-50%,0)",
                  }}
                />
              )}
            </Box>
            <Typography
              fontWeight={"700"}
              fontSize="20px"
              sx={{
                whiteSpace: "pre-line",
                color:
                  index === currentActiveDot
                    ? theme.palette.tertiary.main
                    : index<currentActiveDot?"#ffffff5b":"#fff",
              }}
              width="max-content"
            >
              {session}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default WorkshopsSessions;
