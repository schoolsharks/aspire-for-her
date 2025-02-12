import { Check } from "@mui/icons-material";
import { Stack, useTheme } from "@mui/material";

const StepperPoints = ({
  totalPoints,
  active,
}: {
  totalPoints: number;
  active: number;
}) => {
    const theme=useTheme()
  return (
    <Stack direction={"row"} gap={"12px"}>
      {Array.from({ length: totalPoints }).map((_, index) => (
        <Stack
          key={index}
          sx={{ borderRadius: "50%", width: "18px", height: "18px",alignItems:"center",justifyContent:"center",bgcolor:index<active?theme.palette.secondary.main:"transparent",border:index<=active?`1px solid ${theme.palette.secondary.main}`:"1px solid #ffffff"}}
        >
          {index < active && <Check sx={{color:"#fff",fontSize:"14px"}} />}
        </Stack>
      ))}
    </Stack>
  );
};

export default StepperPoints;
