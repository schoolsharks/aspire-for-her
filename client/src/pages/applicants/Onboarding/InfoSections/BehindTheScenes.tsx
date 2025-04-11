import { Box, Stack, Typography } from "@mui/material";
import ArrowButton from "../../../../components/ArrowButton";

const BehindTheScenes = () => {
  return (
    <Stack color={"#fff"}>
      {/* Payoneer */}
      <Typography fontSize={"20px"} fontWeight={"400"}>
        Behind the scenes
      </Typography>
      <Stack gap={"54px"}>
        <Box>
          <Typography fontSize={"30px"} fontWeight={"700"}>
            Payoneer
          </Typography>
          <Typography fontSize={"18px"} fontWeight={"400"} marginTop={"12px"}>
            Payoneer is a financial technology company empowering the world’s
            small and medium-sized businesses to transact, do business, and grow
            globally. Payoneer was founded in 2005 with the belief that talent
            is equally distributed, but opportunity is not. It is our mission to
            enable any entrepreneur and business anywhere to participate and
            succeed in an increasingly digital global economy. Since our
            founding, we have built a global financial stack that removes
            barriers and simplifies cross-border commerce. We make it easier for
            millions of SMBs, particularly in emerging markets, to connect to
            the global economy, pay and get paid, manage their funds across
            multiple currencies, and grow their businesses.
          </Typography>
          <ArrowButton
            direction="UP"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{ marginTop: "22px" }}
          />
        </Box>

        {/* Aspire for Her */}
        <Box>
          <Typography fontSize={"30px"} fontWeight={"700"}>
            Aspire For Her
          </Typography>
          <Typography fontSize={"18px"} fontWeight={"400"} marginTop={"12px"}>
            Aspire For Her (AFH) is a unique organisation with the vision to add
            a million women to the workforce by 2025, 10 million by 2030. AFH
            motivates women to enter and stay in the workforce by using the
            power of communities and networks. AFH has built 24 communities
            using its mindset-change model including mentors and role models,
            courses, cohorts and learning, career previews, and community
            support. They partner with SEED, India’s leading integrated CSR and
            social intervention agency to create and deliver programs to unleash
            the economic potential of Indian women.
          </Typography>
          <ArrowButton
            direction="UP"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{ marginTop: "22px" }}
          />
          {/* <ArrowButton onClick={handleNext} sx={{ marginTop: "22px" }} /> */}
        </Box>

        {/* Seed */}

        <Box>
          <Typography fontSize={"30px"} fontWeight={"700"}>
            SEED
          </Typography>
          <Typography fontSize={"18px"} fontWeight={"400"} marginTop={"12px"}>
            SEED has established itself as India’s premier integrated CSR &
            Social Intervention agency, offering diverse services to businesses
            across various sectors including energy, banking, financial services
            & insurance (BFSI), oil & gas, steel & mines, cement,
            infrastructure, manufacturing, IT & ITES, pharmaceuticals,
            automobiles, aviation, healthcare, hospitality, and logistics.
            Evolving into a large and trusted brand, SEED specializes in
            implementing CSR & Social Intervention projects for both public and
            private sector companies. Supported by a dedicated team, SEED’s
            leadership is committed to promoting equitable growth and creating
            opportunities for marginalized and disadvantaged groups in
            hard-to-reach areas.
          </Typography>
          <ArrowButton
            direction="UP"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{ marginTop: "22px" }}
          />
          {/* <OutlinedButton
          sx={{
            color: theme.palette.tertiary.main,
            fontSize: "20px",
            marginTop: "22px",
            borderColor: theme.palette.tertiary.main,
          }}
          onClick={handleNext}
        >
          Secure your spot
        </OutlinedButton> */}
        </Box>
      </Stack>
    </Stack>
  );
};

export default BehindTheScenes;
