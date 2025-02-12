import { ArrowBackIos, Close } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";

const BenefitCard = ({
  title,
  description,
  dragSlider = true,
  onClose,
}: {
  title: string;
  description: string;
  dragSlider?: boolean;
  onClose?:()=>void
}) => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        borderRadius: "20px",
        width:"100%",
        padding: "18px",
        height:"100%",
        bgcolor: theme.palette.secondary.main,
        color: "#fff",
        position:"relative"
      }}
    >
     {!dragSlider && <IconButton onClick={onClose} sx={{position:"absolute",top:"4px",right:"4px"}}><Close sx={{color:"#fff"}}/></IconButton>}
      <Box padding="22px">
        <Typography fontSize="24px" fontWeight="700">
          {title}
        </Typography>
        <Typography
          marginTop="8px"
          fontSize="12px"
          fontWeight="600"
          color="#F2DDFFAD"
        >
          {description}
        </Typography>
      </Box>
      {dragSlider && (
        <Stack
          alignItems="center"
          direction="row"
          sx={{
            border: "2px solid #fff",
            borderRadius: "28px",
            padding: "10px 28px",
          }}
        >
          <ArrowBackIos sx={{ fontSize: "16px", position: "absolute" }} />
          <Typography margin="auto" fontWeight="600">
            Drag To Select
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default BenefitCard;
