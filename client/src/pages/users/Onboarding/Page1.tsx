import { Box, Stack, Typography, useTheme } from "@mui/material";
import ArrowButton from "../../../components/ArrowButton";
import { useNavigate } from "react-router-dom";
import OutlinedButton from "../../../components/OutlinedButton";

const Page1 = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate("/onboarding/2");
  };
  return (
    <Stack color={"#fff"} padding={"24px"} gap={"54px"}>
      {/* Welcome */}
      <Box>
        <Typography fontSize={"20px"} fontWeight={"400"}>
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
        <Typography fontSize={"18px"} fontWeight={"400"} marginTop={"12px"}>
          <b>Aspire For Her,</b> in partnership with <b>SEED</b> &{" "}
          <b>Payoneer</b>, proudly presents SheExports Season 2—a
          transformational initiative designed to help women-led service
          businesses in India expand globally! After the phenomenal success of
          Season One, we are back with a bigger, bolder season—offering
          structured learning, expert mentorship, and real growth opportunities
          to help women entrepreneurs succeed in international markets.
        </Typography>
        <ArrowButton onClick={handleNextPage} sx={{ marginTop: "22px" }} />
      </Box>

      {/* Partners */}
      <Box>
        <Typography fontSize={"30px"} fontWeight={"700"}>
          Partners
        </Typography>
        {/* images here */}
        <ArrowButton onClick={handleNextPage} sx={{ marginTop: "22px" }} />
      </Box>

      {/* Behind the Scenes */}
      <Box>
        <Typography fontSize={"20px"} fontWeight={"400"}>
          Behind the scenes
        </Typography>
        <Typography fontSize={"30px"} fontWeight={"700"}>
          Aspire For Her
        </Typography>
        <Typography fontSize={"18px"} fontWeight={"400"} marginTop={"12px"}>
          Aspire For Her (AFH) is an impact enterprise committed to adding 1
          million women to the workforce by 2025 and 10 million by 2030. Focused
          on fostering financial independence, AFH motivates women to enter,
          stay, and thrive in their careers. Through a unique mindset change
          model, the organization partners with corporates to address gender
          disparities while building India’s leading women networking platform.
          With a community of over 750,000 members, including 25,000+
          entrepreneurs and 25,000+ returnees, AFH drives impact through the
          EÂ³=MCÂ³ framework ”Employment, Education, and Entrepreneurship. Its
          B2B services, including Employment and Marketing Solutions, support
          organizations in promoting workplace diversity.
        </Typography>
        <ArrowButton onClick={handleNextPage} sx={{ marginTop: "22px" }} />
      </Box>

      {/* Payoneer */}

      <Box>
        <Typography fontSize={"30px"} fontWeight={"700"}>
          Payoneer
        </Typography>
        <Typography fontSize={"18px"} fontWeight={"400"} marginTop={"12px"}>
          Payoneer, a prominent global payment solutions provider, enables
          freelancers, SMBs, startups, and enterprises to overcome their biggest
          payment challenges. Leveraging sophisticated technology and a robust
          banking infrastructure, it drives growth in emerging markets,
          facilitating secure and straightforward global commerce. With millions
          of customers, support for 70 currencies, a global team of 2,000
          employees, 24 global offices, and services in over 35 languages,
          Payoneer stands as a paragon of global financial connectivity.
        </Typography>
        <ArrowButton onClick={handleNextPage} sx={{ marginTop: "22px" }} />
      </Box>

      {/* Seed */}

      <Box marginBottom={"120px"}>
        <Typography fontSize={"30px"} fontWeight={"700"}>
          Seed
        </Typography>
        <Typography fontSize={"18px"} fontWeight={"400"} marginTop={"12px"}>
          SEED has established itself as India’s premier integrated CSR & Social
          Intervention agency, offering diverse services to businesses across
          various sectors including energy, banking, financial services &
          insurance (BFSI), oil & gas, steel & mines, cement, infrastructure,
          manufacturing, IT & ITES, pharmaceuticals, automobiles, aviation,
          healthcare, hospitality, and logistics. Evolving into a large and
          trusted brand, SEED specializes in implementing CSR & Social
          Intervention projects for both public and private sector companies.
          Supported by a dedicated team, SEED’s leadership is committed to
          promoting equitable growth and creating opportunities for marginalized
          and disadvantaged groups in hard-to-reach areas.
        </Typography>
        <OutlinedButton
          sx={{
            color: theme.palette.tertiary.main,
            fontSize: "20px",
            marginTop:"22px",
            borderColor: theme.palette.tertiary.main,
          }}
          onClick={()=>navigate("/login")}
        >
          Secure your spot
        </OutlinedButton>
      </Box>
    </Stack>
  );
};

export default Page1;
