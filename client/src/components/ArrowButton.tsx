import { Theme } from "@emotion/react";
import { ArrowForward } from "@mui/icons-material";
import { IconButton, SxProps, useTheme } from "@mui/material";

const ArrowButton = ({
  onClick,
  direction = "RIGHT",
  sx
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  direction?: "RIGHT" | "LEFT" | "UP" | "DOWN";
  sx?:SxProps<Theme>;
}) => {
  const theme = useTheme();
  return (
    <IconButton onClick={onClick} sx={{padding:"0"}}>
      <ArrowForward
        sx={{
          color: theme.palette.tertiary.main,
          border: `2px solid ${theme.palette.tertiary.main}`,
          borderRadius: "50%",
          fontSize: "36px",
          padding: "5px",
          transformOrigin: "center",
          transform: direction === "LEFT" ? "rotate(180deg)" : direction === "UP" ? "rotate(-90deg)" : direction === "DOWN" ? "rotate(90deg)" : "",
          ...sx
          
        }}
      />
    </IconButton>
  );
};

export default ArrowButton;
