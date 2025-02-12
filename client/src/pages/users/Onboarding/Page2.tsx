import { Box, Stack, Typography } from "@mui/material";
import ArrowButton from "../../../components/ArrowButton";
import { useNavigate } from "react-router-dom";
import theme from "../../../theme";
import OutlinedButton from "../../../components/OutlinedButton";

const numberData = [
  {
    stat: "2",
    name: "Cohorts",
  },
  {
    stat: "120+",
    name: "Members Engaged",
  },
  {
    stat: "18",
    name: "States, spanning various industries",
  },
  {
    stat: "20+",
    name: "Live sessions",
  },
  {
    stat: "100+",
    name: "One-on-one Mentorship meetings",
  },
];

const testimonialsData = [
  {
    testimonial:
      "Thank you so much for arranging this session; it has been incredibly positive, encouraging, and insightful. I wish this session continues indefinitely, providing us with even more enlightenment ;)",
    name: "Neha Pathak - Swasthyam ",
  },
  {
    testimonial:
      "Thank you so much for arranging this session; it has been incredibly positive, encouraging, and insightful. I wish this session continues indefinitely, providing us with even more enlightenment ;)",
    name: "Neha Pathak - Swasthyam ",
  },
  {
    testimonial:
      "Thank you so much for arranging this session; it has been incredibly positive, encouraging, and insightful. I wish this session continues indefinitely, providing us with even more enlightenment ;)",
    name: "Neha Pathak - Swasthyam ",
  },
];

const Page2 = () => {
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate("/onboarding/3");
  };
  return (
    <Stack color={"#fff"} padding={"24px"} gap={"46px"}>
      <Box>
        <Typography fontSize={"30px"} fontWeight={"700"}>
          Season 1 at a glance
        </Typography>
        <Stack gap={"12px"} marginTop={"36px"}>
          {numberData.map((data, index) => (
            <Box key={index}>
              <Typography
                fontSize={"45px"}
                fontWeight={"700"}
                lineHeight={"45px"}
              >
                {data.stat}
              </Typography>
              <Typography fontSize={"18px"} fontWeight={"300"} marginTop={"5px"}>
                {data.name}
              </Typography>
            </Box>
          ))}
        </Stack>
        <ArrowButton onClick={handleNextPage} sx={{ marginTop: "22px" }} />
      </Box>

      {/* Testimonials */}

      <Box>
        <Typography fontSize={"30px"} fontWeight={"700"}>
          Testimonials
        </Typography>
        <Stack
          marginTop={"26px"}
          direction={"row"}
          gap={"8px"}
          width={"100%"}
          overflow={"scroll"}
        >
          {testimonialsData.map((testimonial, index) => (
            <Stack
              key={index}
              sx={{
                border: `1.5px solid ${theme.palette.primary.main}`,
                padding: "12px",
                borderRadius: "5px",
                minWidth: "165px",
                flex:"1",
                minHeight:"220px",
                justifyContent:"space-between",
                gap:"24px",
                paddingBottom:"24px"
              }}
            >
              <Typography fontSize={"12px"} fontWeight={"300"}>
                {testimonial.testimonial}
              </Typography>
              <Typography fontSize={"10px"} fontWeight={"600"}>
                {testimonial.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
          <OutlinedButton
            sx={{
              color: theme.palette.tertiary.main,
              fontSize: "20px",
              marginTop: "22px",
              borderColor: theme.palette.tertiary.main,
            }}
            onClick={handleNextPage}
          >
            Secure your spot!
          </OutlinedButton>
      </Box>
    </Stack>
  );
};

export default Page2;
