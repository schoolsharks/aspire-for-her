import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const CityBox = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        Member Directory
      </Typography>

      <Box
        sx={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 12px",
          background: "#FFFFFF",
          color: "#000",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          Select City
        </Typography>

        <KeyboardArrowDownIcon
          sx={{
            borderWidth: "1.5px",
          }}
        />
      </Box>
    </Box>
  );
};

export default CityBox;
