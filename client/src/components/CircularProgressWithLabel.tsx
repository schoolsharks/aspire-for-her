import {
  Box,
  CircularProgress,
  CircularProgressProps,
  useTheme,
} from "@mui/material";

interface CustomCircularProgressProps extends CircularProgressProps {
  size: number;
  value: number;
  background: string;
  trackColor?: string;
  thickness?: number;
  labelComponent?: JSX.Element | string | number;
}

export const CircularProgressWithLabel: React.FC<CustomCircularProgressProps> = ({
  size,
  thickness=3,
  labelComponent,
  background,
  trackColor,
  ...props
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        thickness={thickness}
        {...props}
        size={size ?? 61}
        sx={{
          color: theme.palette.lmsprimary.main,
          "& .MuiCircularProgress-circle": {
            strokeLinecap: "round",
          },
          "&.MuiCircularProgress-root": {
            backgroundColor: trackColor ?? "#07010B",
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
          width: "100%",
          scale: 1 - thickness * 0.05,
          bgcolor: background,
          borderRadius: "50%",
        }}
      >
        {labelComponent}
      </Box>
    </Box>
  );
};
