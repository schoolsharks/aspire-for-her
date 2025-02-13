import { Box, Stack, Typography, useTheme } from "@mui/material";
import ArrowButton from "../../../components/ArrowButton";
import { useNavigate } from "react-router-dom";
import OutlinedButton from "../../../components/OutlinedButton";
import HamburgerMenu from "../../../components/HamburgerMenu";
import partnersLogos from "../../../assets/partners-.webp"

const Page1 = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate("/onboarding/2");
  };
  return (
    <Stack color={"#fff"} padding={"24px"} gap={"54px"} position={"relative"}>
      {/* Welcome */}
      <Box>
        <Stack
          direction={"row"}
          position={"relative"}
          marginTop={"-36px"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              fontSize={"20px"}
              fontWeight={"400"}
              sx={{ transform: "translateY(-100%)" }}
              position={"absolute"}
            >
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
          </Box>
          <Box>
            <HamburgerMenu />
          </Box>
        </Stack>

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
        <Box component={"img"} marginTop={"20px"} src={partnersLogos} alt="" width={"100%"}  />
        {/* images here */}
        <ArrowButton onClick={handleNextPage} sx={{ marginTop: "22px" }} />
      </Box>

      {/* Behind the Scenes */}

      <Box>
        <Typography fontSize={"20px"} fontWeight={"400"}>
          Behind the scenes
        </Typography>
        {/* Payoneer */}

        <Typography fontSize={"30px"} fontWeight={"700"}>
          Payoneer
        </Typography>
        <Typography fontSize={"18px"} fontWeight={"400"} marginTop={"12px"}>
          Payoneer is a financial technology company empowering the world’s
          small and medium-sized businesses to transact, do business, and grow
          globally. Payoneer was founded in 2005 with the belief that talent is
          equally distributed, but opportunity is not. It is our mission to
          enable any entrepreneur and business anywhere to participate and
          succeed in an increasingly digital global economy. Since our founding,
          we have built a global financial stack that removes barriers and
          simplifies cross-border commerce. We make it easier for millions of
          SMBs, particularly in emerging markets, to connect to the global
          economy, pay and get paid, manage their funds across multiple
          currencies, and grow their businesses.
        </Typography>
        <ArrowButton onClick={handleNextPage} sx={{ marginTop: "22px" }} />
      </Box>

      {/* Aspire for Her */}
      <Box>
        <Typography fontSize={"30px"} fontWeight={"700"}>
          Aspire For Her
        </Typography>
        <Typography fontSize={"18px"} fontWeight={"400"} marginTop={"12px"}>
          Aspire For Her (AFH) is a unique organisation with the vision to add a
          million women to the workforce by 2025, 10 million by 2030. AFH
          motivates women to enter and stay in the workforce by using the power
          of communities and networks. AFH has built 24 communities using its
          mindset-change model including mentors and role models, courses,
          cohorts and learning, career previews, and community support. They
          partner with SEED, India’s leading integrated CSR and social
          intervention agency to create and deliver programs to unleash the
          economic potential of Indian women.
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
            marginTop: "22px",
            borderColor: theme.palette.tertiary.main,
          }}
          onClick={() => navigate("/login")}
        >
          Secure your spot
        </OutlinedButton>
      </Box>
    </Stack>
  );
};

export default Page1;
