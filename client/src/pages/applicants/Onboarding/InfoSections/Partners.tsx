import { Box, Stack, useTheme } from "@mui/material";
import OutlinedButton from "../../../../components/OutlinedButton";
import ArrowButton from "../../../../components/ArrowButton";
import { useNavigate } from "react-router-dom";
import partnersLogos from "../../../../assets/partners.webp";

const Partners = () => {
    const navigate=useNavigate();
    const theme=useTheme()
  return (
    <Box>
      <Box
        component={"img"}
        marginTop={"20px"}
        src={partnersLogos}
        alt=""
        width={"100%"}
      />
      <Stack
        direction={"row"}
        marginTop={"20px"}
        alignItems={"center"}
        gap={"8px"}
      >
        <ArrowButton
          direction="UP"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        <OutlinedButton
          sx={{
            color: theme.palette.primary.main,
            fontSize: "20px",
            borderColor: theme.palette.primary.main,
          }}
          onClick={() => navigate("/login")}
        >
          Secure Your Spot
        </OutlinedButton>
      </Stack>
    </Box>
  );
};

export default Partners;
