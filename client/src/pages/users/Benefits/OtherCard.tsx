import { Close } from "@mui/icons-material";
import {
  IconButton,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

const OtherCard = ({
  dragSlider = true,
  onClose,
}: {
  dragSlider?: boolean;
  onClose?: () => void;
}) => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        borderRadius: "20px",
        width: "100%",
        padding: "36px",
        height: "100%",
        bgcolor: theme.palette.secondary.main,
        color: "#fff",
        position: "relative", 
        gap:"48px",
      }}
    >
      {!dragSlider && (
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: "4px", right: "4px" }}
        >
          <Close sx={{ color: "#fff" }} />
        </IconButton>
      )}
      <Typography fontSize="24px" fontWeight="700">
        Other
      </Typography>
      <TextField
        id="standard-basic"
        placeholder={"Please Specify"}
        variant="standard"
        sx={{
          width: "100%",
          input: {
            "&::placeholder": {
              color: theme.palette.primary.main,
              padding: "0 !important",
            },
          },
          "&::before": { bottom: "12px" },
        }}
      />
    </Stack>
  );
};

export default OtherCard;
