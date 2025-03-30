import { Typography, Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
const strategies = [
  {
    title: "Expert Consultation Call (30–60 min)",
    description: "Quick guidance on challenges via a 1:1 expert session.",
  },
  {
    title: "Strategy Report & Audit (Detailed Plan)",
    description: "A deep-dive analysis with a step-by-step action plan.",
  },
  {
    title: "Hands-On Execution Support  (Done-for-You/Done-with-You)",
    description:
      "Experts help implement sales, branding, or market expansion .",
  },
  {
    title: "Group Coaching & Mastermind (Peer & Expert Network)",
    description: "Weekly expert-led sessions with access to an exclusive CEO .",
  },
];
const Concern = () => {
  const theme = useTheme();

  const [selectedStrategy, setSelectedStrategy] = useState<number|null>(null);

  return (
    <Box>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        How can we help?
      </Typography>

      <Box marginTop={"10px"}>
        <Box padding={"13px"} bgcolor={theme.palette.lmsprimary.greyDark}>
          <Typography
            sx={{
              fontWeight: 400,
              color: theme.palette.lmsprimary.main,
              fontSize: "10px",
            }}
          >
            Concerned area
          </Typography>
          <Typography
            sx={{
              marginTop: "5px",
              fontWeight: 700,
              fontSize: "16px",
            }}
          >
            Sales, Lead Generation & Business Development
          </Typography>
        </Box>

        <Stack
          sx={{
            backgroundColor: theme.palette.lmsprimary.greyLight,
            padding: "22px 15px",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "10px",
            }}
          >
            Choose Your Expert-Led Growth Strategy
          </Typography>

          {strategies.map((strategy, index) => (
            <Box
              key={index}
              onClick={() => setSelectedStrategy(index)}
              sx={{
                backgroundColor: index===selectedStrategy?theme.palette.lmsprimary.main:"#fff",
                padding: "11px 14px",
                cursor: "pointer",
                color:"#000"
              }}
            >
              {/* Title */}
              <Typography

                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                {strategy.title}
              </Typography>

              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "10px",
                }}
              >
                {strategy.description}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Concern;
