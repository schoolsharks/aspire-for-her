import {
  Box,
  CircularProgress,
  CircularProgressProps,
  Typography,
  useTheme,
} from "@mui/material";

export function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        {...props}
        size={61}
        sx={{
          color: theme.palette.lmsprimary.main,
          "& .MuiCircularProgress-circle": {
            strokeLinecap: "round",
          },
          "&.MuiCircularProgress-root": {
            backgroundColor: "#07010B", 
            borderRadius: "50%",
          },
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width:"100%",
          scale:0.85,
          bgcolor:theme.palette.lmsprimary.greyDark,
          borderRadius:"50%"
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ fontSize: "1.2rem", color: "#ffffff" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
