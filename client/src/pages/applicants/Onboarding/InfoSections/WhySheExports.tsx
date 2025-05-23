import { Box, Stack, Typography, useTheme } from "@mui/material";
import OutlinedButton from "../../../../components/OutlinedButton";
import { useNavigate } from "react-router-dom";

const whySheExports = [
  {
    title: "Visibility & Exposure",
    description:
      "Showcase your business through an exclusive podcast series and Aspire For Her platform.",
  },
  {
    title: "Global Market Entry",
    description:
      "Gain insights into key international markets like UAE & USA, covering compliance, finance, and branding.",
  },
  {
    title: "Expert Mentorship & Networking",
    description:
      "Connect with top mentors, industry leaders, corporate buyers, and investors to unlock new business opportunities.",
  },
  {
    title: "Hybrid Learning Model",
    description:
      "Engage in city-based workshops, live sessions, hands-on mentorship, and expert-led digital tracks.",
  },
  {
    title: "Funding & Pitching Opportunities",
    description:
      "Top 10 startups will pitch for funding, with all participants gaining investor access and business expansion strategies.",
  },
  {
    title: "Exclusive Partner Benefits",
    description:
      "Enjoy preferred services from partners like Payoneer and access to Aspire For Her’s corporate offerings for business growth.",
  },
];
const WhySheExports = () => {
  const theme = useTheme();
  const navigate=useNavigate()
  return (
    <Box color={"#fff"}>
      <Typography fontSize={"30px"} fontWeight={"700"}>Why SheExports?</Typography>
      <Stack
        bgcolor={theme.palette.primary.main}
        marginTop={"20px"}
        padding={"20px"}
        borderRadius={"10px"}
        gap={"16px"}
      >
        {whySheExports.map((item, index) => (
          <Box key={index}>
            <Typography fontSize={"18px"} fontWeight={"700"}>
              {item.title}
            </Typography>
            <Typography fontSize={"12px"} fontWeight={"500"}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        marginTop={"42px"}
        gap={"8px"}
      >
        <OutlinedButton
          sx={{
            color: theme.palette.primary.main,
            fontSize: "20px",
            borderColor: theme.palette.primary.main,
          }}
          onClick={()=>navigate("/faqs")}
        >
          FAQs
        </OutlinedButton>
        <OutlinedButton
          sx={{
            color: theme.palette.primary.main,
            fontSize: "20px",
            borderColor: theme.palette.primary.main,
          }}
          onClick={()=>navigate("/login")}
        >
          Secure your spot
        </OutlinedButton>
      </Stack>
    </Box>
  );
};

export default WhySheExports;
