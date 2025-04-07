import { Box, Stack, Typography, useTheme } from "@mui/material";

const mainPointers = [
  "11 City-Based Workshops (Delhi/NCR, Chandigarh, Kolkata , Mumbai, Pune, Ahmedabad, Surat, Indore, Bengaluru, Chennai, Coimbatore)",
  "One-on-One Mentorship (Tailored coaching with global business experts)",
  "Speed Mentoring Sessions (Focused problem-solving with industry leaders)",
  "Expert-Led Online Tracks (Deep dives into international markets, branding, AI, and more)",
];
const Season2 = () => {
  const theme = useTheme();
  return (
    <Box color={"#fff"}>
      <Typography fontSize={"30px"} fontWeight={"700"}>
        SheExports
      </Typography>

      <Typography fontSize={"20px"} fontWeight={"600"}>
        Season 2
      </Typography>
      <Box
        padding={"5px 8px"}
        width={"max-content"}
        marginTop={"12px"}
        bgcolor={theme.palette.primary.main}
        borderRadius={"2px"}
      >
        <Typography>Launch Date - 14th February</Typography>
      </Box>

      <Typography fontWeight={"300"} marginTop={"43px"}>
        This uniquely designed 5-month hybrid program will feature:
      </Typography>
      <ul>
        {mainPointers.map((point, index) => (
          <Typography
            fontWeight={"300"}
            marginLeft={"18px"}
            marginY={"5px"}
            key={index}
            component={"li"}
          >
            {point}
          </Typography>
        ))}
      </ul>

      <Stack
        marginTop={"42px"}
        gap={"32px"}
        alignItems={"center"}
        position={"relative"}
      >
        <Stack direction={"row"} alignItems={"center"} gap={"60px"}>
          <Box width={"60px"}>
            <Typography fontWeight={"400"}>4th</Typography>
            <Typography fontSize={"12px"} fontWeight={"400"}>
              Apr
            </Typography>
          </Box>
          <Box
            padding={"5px 8px"}
            width={"198px"}
            bgcolor={theme.palette.primary.main}
            borderRadius={"2px"}
          >
            <Typography>Applications closes</Typography>
          </Box>
        </Stack>

        <Stack direction={"row"} alignItems={"center"} gap={"60px"}>
          <Box width={"60px"}>
            <Typography fontWeight={"400"}>7th</Typography>
            <Typography fontSize={"12px"} fontWeight={"400"}>
              Apr
            </Typography>
          </Box>
          <Box
            padding={"5px 8px"}
            width={"198px"}
            bgcolor={theme.palette.primary.main}
            borderRadius={"2px"}
          >
            <Typography>Orientation & networking</Typography>
          </Box>
        </Stack>

        <Stack
          position={"absolute"}
          height={"100%"}
          width={"4px"}
          bgcolor={theme.palette.primary.main}
          left={"30%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            width={"24px"}
            height={"24px"}
            borderRadius={"50%"}
            bgcolor={theme.palette.primary.main}
          />
          <Box
            width={"24px"}
            height={"24px"}
            borderRadius={"50%"}
            bgcolor={theme.palette.primary.main}
          />
        </Stack>
      </Stack>
      {/* <Stack
        direction={"row"}
        alignItems={"center"}
        marginTop={"42px"}
        gap={"8px"}
      >
        <OutlinedButton
          sx={{
            color: theme.palette.tertiary.main,
            fontSize: "20px",
            borderColor: theme.palette.tertiary.main,
          }}
          onClick={handleNext}
        >
          SignIn
        </OutlinedButton>
      </Stack> */}
    </Box>
  );
};

export default Season2;
