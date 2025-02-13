import { Box, Stack, Typography } from "@mui/material";
import ArrowButton from "../../../components/ArrowButton";
import { useNavigate } from "react-router-dom";
import theme from "../../../theme";
import OutlinedButton from "../../../components/OutlinedButton";
import AnimatedTestimonials from "./AnimatedTestimonials";
import HamburgerMenu from "../../../components/HamburgerMenu";

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
      "On behalf of the cohort. I'll take the opportunity to thank the folks at Payoneer for sponsoring this amazing learning opportunity. Before this I was very apprehensive of venturing into exports, these sessions are bringing in a lot of clarity.",
    name: "Susan DSilva_ Goodness Project",
  },
  {
    testimonial:
      "Amazing session team! This cohort has been a huge learning! Thank you 🙏",
    name: "Shweta Runwal - Tickle Your Art",
  },
  {
    testimonial:
      "The sessions are another level @Anuj @Madhura Dasgupta Sinha !! Thanks a lot for organising!",
    name: "Jasmine Grover - Artistree91",
  },
  {
    testimonial:
      "Very informative…I actually thought blogs is such a waste of money …I loved the way Geet pointed out the importance",
    name: "Anita Golani - iORA",
  },
  {
    testimonial:
      "Thank you so much Team Aspire for her 🙏, for thoughtfully curating such topics and such amazing mentors, this is helping all of us come one step closer to our Entrepreneurial goals🎯",
    name: "Priyanka Surve - Kalia Cloth Store/ House Of Amritsar",
  },
  {
    testimonial:
      "Kalia Cloth Store/ House Of Amritsar - Thank you Team AFH for such a detailed and strategically important session, it really helped ponder on some very crucial business decisions that we often take out guts feeling. Thank you @Zil and @Anuj AFH for putting this all together",
    name: "Priyanka Surve ",
  },
];

const Page2 = () => {
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate("/onboarding/3");
  };
  return (
    <Stack color={"#fff"} padding={"24px"} gap={"46px"}>
      <Box marginTop={"-36px"}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography fontSize={"30px"} fontWeight={"700"}>
            Season 1 at a glance
          </Typography>
          <Box>
            <HamburgerMenu />
          </Box>
        </Stack>

        <Stack gap={"20px"} marginTop={"36px"}>
          {numberData.map((data, index) => (
            <Box key={index}>
              <Typography
                fontSize={"45px"}
                fontWeight={"700"}
                lineHeight={"45px"}
              >
                {data.stat}
              </Typography>
              <Typography
                fontSize={"18px"}
                fontWeight={"300"}
                marginTop={"2px"}
              >
                {data.name}
              </Typography>
            </Box>
          ))}
        </Stack>
        <ArrowButton onClick={handleNextPage} sx={{ marginTop: "30px" }} />
      </Box>

      {/* Testimonials */}

      <Box>
        <Typography fontSize={"30px"} fontWeight={"700"} marginBottom={"26px"}>
          Testimonials
        </Typography>

        <AnimatedTestimonials testimonials={testimonialsData} />

        <Stack direction={"row"} alignItems={"center"} marginTop={"40px"} gap={"8px"}>
          <ArrowButton
            direction="LEFT"
            onClick={()=>navigate("/onboarding/1")}
          />
          <OutlinedButton
            sx={{
              color: theme.palette.tertiary.main,
              fontSize: "20px",
              borderColor: theme.palette.tertiary.main,
            }}
            onClick={() => navigate("/login")}
          >
            Secure your spot
          </OutlinedButton>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Page2;
