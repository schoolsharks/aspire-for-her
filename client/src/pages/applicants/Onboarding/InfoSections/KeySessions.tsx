import { Box, Stack, Typography, useTheme } from "@mui/material";

const KeySessions = () => {
  const theme = useTheme();

  const keySessions = [
    {
      point: "Finance & Compliance Essentials for Global Expansion",
    },
    {
      point: "Streamlining Cross-Border Payments & International Transactions",
    },
    {
      point: "Fundraising & Financial Planning for International Expansion",
      subPoints: [
        "Fundability Matrix",
        "Identify and Reaching out Investors",
        "Valuation my business",
      ],
    },
    {
      point: "Win Global Customers: UI/UX, Branding, Content, Email",
    },
    {
      point: "Leveraging LinkedIn Marketing (Tools)",
    },
    {
      point:
        "Professional Indemnity & Risk Management – Understanding insurance essentials and mitigating international risks.",
    },
    {
      point: "Navigating global data protection laws and compliance.",
    },
    {
      point:
        "Leveraging International Social Media/Influencer Marketing &  User- Generated Content.",
    },
    {
      point: "Scaling SaaS & Transitioning from Service to Product",
    },
    {
      point: "Service Exports Founder. Case Study",
    },
    {
      point: "Scaling your Service Businesses with AI",
    },
    {
      point: "Art of Pitching using Story Telling",
    },
  ];
  return (
    <Box
      id="program-schedule"
      border={`1px solid ${theme.palette.tertiary.main}`}
      borderRadius={"10px"}
      padding={"20px"}
      bgcolor={"#07010B"}
    >
      <Typography
        fontWeight={"700"}
        fontSize="20px"
        color={theme.palette.tertiary.main}
      >
        Key Sessions
      </Typography>

      <Stack gap={"15px"} marginTop={"25px"}>
        {keySessions.map((session, index) => (
          <Stack key={index} direction={"row"} gap={"4px"}>
            <Typography fontWeight={"500"} fontSize="18px">{index+1}.</Typography>
            <Box>
              <Typography fontWeight={"500"} fontSize="18px">{session.point}</Typography>
              {session.subPoints && session.subPoints.map((subPoint,index)=>(
                <Typography fontWeight={"300"} fontSize={"18px"} key={index}>{subPoint}</Typography>
              ))}
            </Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default KeySessions;
