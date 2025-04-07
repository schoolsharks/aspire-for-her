import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CircularProgressWithLabel } from "../../../../components/CircularProgressWithLabel";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
const EngagementCard: React.FC = () => {
  const theme = useTheme();
  const { engagement } = useSelector((state: RootState) => state.approvedUser);

  return (
    <Box>
      <Stack
        direction={"row"}
        sx={{
          backgroundColor: theme.palette.lmsprimary.greyDark,
          border: `1px solid ${theme.palette.lmsprimary.greyLight}`,
          borderRadius: "0px",
          padding: "16px",
          alignItems: "center",
          width: "100%",
          gap: "18px",
        }}
      >
        {/* Circular Progress Bar */}
        <CircularProgressWithLabel
        size={61}
          variant="determinate"
          background={theme.palette.lmsprimary.greyDark??""}
          labelComponent={
            <Typography
              variant="caption"
              component="div"
              sx={{ fontSize: "1.2rem", color: "#ffffff" }}
            >{`${Math.round(engagement)}%`}</Typography>
          }
          value={engagement}
        />

        {/* Text Content */}
        <Box>
          <Typography
            sx={{ color: "white", fontWeight: "500", fontSize: "16px" }}
          >
            Your engagement is amazing!
          </Typography>
          <Typography
            sx={{
              color: theme.palette.lmsprimary.main,
              fontWeight: "500",
              fontSize: "12px",
            }}
          >
            Keep up the good work
          </Typography>
        </Box>
      </Stack>
      <Typography
        sx={{
          marginTop: "10px",
          color: "#FFFFFF",
          fontWeight: "300",
        }}
      >
        80% eligibility for client engagement
      </Typography>
    </Box>
  );
};

export default EngagementCard;
