import { ArrowCircleDown } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

// const programOverview = [
//   {
//     month: "April",
//     weeks: [
//       {
//         week: "Week 1",
//         content: [
//           {
//             text: "Indore Workshop",
//             variant: "contained",
//           },
//         ],
//       },
//       {
//         week: "Week 2",
//         content: [
//           {
//             text: "Chandigarh Workshop",
//             variant: "contained",
//           },
//         ],
//       },
//       {
//         week: "Week 3",
//         content: [
//           {
//             text: "Pune Workshop",
//             variant: "contained",
//           },
//         ],
//       },
//       {
//         week: "Week 4",
//         content: [
//           {
//             text: "Win Global Customers: UI/UX, Branding, Content, Email",
//             variant: "outlined",
//           },
//           {
//             text: "Leveraging LinkedIn Marketing (Tools)",
//             variant: "outlined",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     month: "May",
//     weeks: [
//       {
//         week: "Week 1",
//         content: [
//           {
//             text: "Ahmedabad Workshop",
//             variant: "contained",
//           },
//         ],
//       },
//       {
//         week: "Week 1",
//         content: [
//           {
//             text: "Surat Workshop",
//             variant: "contained",
//           },
//         ],
//       },
//       {
//         week: "Week 4",
//         content: [
//           {
//             text: "Mumbai Workshop",
//             variant: "contained",
//           },
//         ],
//       },
//       {
//         week: "Week 4",
//         content: [
//           {
//             text: "Professional Indemnity & Risk Management – Understanding insurance essentials and mitigating international risks.",
//             variant: "outlined",
//           },
//           {
//             text: "Navigating global data protection laws and compliance.",
//             variant: "outlined",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     month: "June",
//     weeks: [
//       {
//         week: "Week 3",
//         content: [
//           {
//             text: "Bengaluru Workshop",
//             variant: "contained",
//           },
//         ],
//       },
//       {
//         week: "Week 3",
//         content: [
//           {
//             text: "Chennai Workshop",
//             variant: "contained",
//           },
//         ],
//       },
//       {
//         week: "Week 4",
//         content: [
//           {
//             text: "Coimbatore Workshop",
//             variant: "contained",
//           },
//         ],
//       },
//       {
//         week: "Week 4",
//         content: [
//           {
//             text: "Leveraging International Social Media/Influencer Marketing &  User- Generated Content.",
//             variant: "outlined",
//           },
//         ],
//       },
//     ],
//   },
// {
//   month: "July",
//   weeks: [
//     {
//       week: "Week 2",
//       content: [
//         {
//           text: "Delhi & NCR Workshop",
//           variant: "contained",
//         },
//       ],
//     },
//     {
//       week: "Week 2",
//       content: [
//         {
//           text: "Kolkata Workshop",
//           variant: "contained",
//         },
//       ],
//     },
//     {
//       week: "Week 3",
//       content: [
//         {
//           text: "Scaling SaaS & Transitioning from Service to Product",
//           variant: "outlined",
//         },
//         {
//           text: "Service Exports Founder. Case Study",
//           variant: "outlined",
//         },
//       ],
//     },
//     {
//       week: "Week 4",
//       content: [
//         {
//           text: "Scaling your Service Businesses with AI",
//           variant: "outlined",
//         },
//       ],
//     },
//   ],
// },
// {
//   month: "August",
//   weeks: [
//     {
//       week: "Week 1",
//       content: [
//         {
//           text: "Art of Pitching using Story Telling",
//           variant: "outlined",
//         },
//       ],
//     },
//     {
//       week: "Week 2",
//       content: [
//         {
//           text: "Investors Interaction (Top 10)",
//           variant: "outlined",
//         },
//       ],
//     },
//     {
//       week: "Week 4",
//       content: [
//         {
//           text: "Podcast Launch & Finale",
//           variant: "outlined",
//         },
//       ],
//     },
//   ],
// },
// ];
const programOverview = [
  {
    month: "April",
    weeks: [
      {
        week: "12th",
        content: [
          {
            text: "Mumbai Workshop",
            variant: "contained",
          },
        ],
      },
      {
        week: "26th",
        content: [
          {
            text: "Pune Workshop",
            variant: "contained",
          },
        ],
      },
    ],
  },
  {
    month: "May",
    weeks: [
      {
        week: "10th",
        content: [
          {
            text: "Chandigarh Workshop",
            variant: "contained",
          },
        ],
      },
      {
        week: "17th",
        content: [
          {
            text: "Delhi Workshop",
            variant: "contained",
          },
        ],
      },
    ],
  },
  {
    month: "June",
    weeks: [
      {
        week: "17th",
        content: [
          {
            text: "Bangalore Workshop",
            variant: "contained",
          },
        ],
      },
    ],
  },
  {
    month: "July",
    weeks: [
      {
        week: "Week 2",
        content: [
          {
            text: "Delhi & NCR Workshop",
            variant: "contained",
          },
        ],
      },
      {
        week: "Week 2",
        content: [
          {
            text: "Kolkata Workshop",
            variant: "contained",
          },
        ],
      },
      {
        week: "Week 3",
        content: [
          {
            text: "Scaling SaaS & Transitioning from Service to Product",
            variant: "outlined",
          },
          {
            text: "Service Exports Founder. Case Study",
            variant: "outlined",
          },
        ],
      },
      {
        week: "Week 4",
        content: [
          {
            text: "Scaling your Service Businesses with AI",
            variant: "outlined",
          },
        ],
      },
    ],
  },
  {
    month: "August",
    weeks: [
      {
        week: "Week 1",
        content: [
          {
            text: "Art of Pitching using Story Telling",
            variant: "outlined",
          },
        ],
      },
      {
        week: "Week 2",
        content: [
          {
            text: "Investors Interaction (Top 10)",
            variant: "outlined",
          },
        ],
      },
      {
        week: "Week 4",
        content: [
          {
            text: "Podcast Launch & Finale",
            variant: "outlined",
          },
        ],
      },
    ],
  },
];

const workshopDetails = [
  { point: "Finance & Compliance Essentials for Global Expansion" },
  { point: "Streamlining Cross-Border Payments & International Transactions" },
  {
    point: "Fundraising & Financial Planning for International Expansion",
    subpoints: [
      "Fundability Matrix",
      "Identify and Reaching out Investors",
      "Valuation my business ",
    ],
  },
  { point: "Networking Lunch" },
];

const ProgramOverview = () => {
  const theme = useTheme();
  return (
    <Stack gap={"30px"} color={"#fff"}>
      <Box>
        <Stack gap={"8px"} marginTop={"20px"}>
          {programOverview.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                bgcolor: "#07010B",
                border: "1px solid #ffffff",
                borderRadius: "10px !important",
                color: "#fff",
              }}
            >
              <AccordionSummary
                expandIcon={<ArrowCircleDown sx={{ color: "#fff" }} />}
              >
                <Typography
                  color={theme.palette.tertiary.main}
                  fontSize="20px"
                  fontWeight={"700"}
                >
                  {item.month}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack gap={"10px"}>
                  {item.weeks.map((week, index) => (
                    <Stack key={index} direction={"row"} gap={"5px"}>
                      <Stack
                        width={"80px"}
                        height="44px"
                        alignItems={"center"}
                        justifyContent={"center"}
                        sx={{
                          // border: `0.5px solid ${theme.palette.tertiary.main}`,
                          borderRadius: "5px",
                        }}
                      >
                        <Typography>{week.week}</Typography>
                      </Stack>
                      <Stack flex={"1"} gap={"4px"}>
                        {week.content.map((content, index) => (
                          <Box
                            key={index}
                            sx={{
                              borderRadius: "5px",
                              padding: "12px",
                              bgcolor:
                                content.variant === "outlined"
                                  ? "transparent"
                                  : theme.palette.tertiary.main,
                              border:
                                content.variant === "outlined"
                                  ? `1.5px solid ${theme.palette.tertiary.main}`
                                  : "",
                            }}
                          >
                            <Typography>{content.text}</Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Box>

      <Box
        padding="20px"
        borderRadius={"10px"}
        bgcolor={theme.palette.primary.main}
      >
        <Typography fontSize="20px" fontWeight={"700"}>
          Workshop Details
        </Typography>
        <Typography fontSize="18px" fontWeight={"500"} color="#DA9DFF">
          Offline
        </Typography>
        <Stack component={"ol"} marginTop={"5px"} gap={"12px"}>
          {workshopDetails.map((item, index) => (
            <Typography
              marginLeft={"18px"}
              key={index}
              component="li"
              fontWeight={"700"}
            >
              {item.point}
              <Stack component={"ul"} marginLeft={"14px"}>
                {item.subpoints?.map((subPoint, index) => (
                  <Typography
                    component={"li"}
                    key={index}
                    fontSize={"15px"}
                    sx={{ listStyleType: "disc" }}
                  >
                    {subPoint}
                  </Typography>
                ))}
              </Stack>
            </Typography>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProgramOverview;
