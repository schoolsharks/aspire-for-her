import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import OutlinedButton from "../../../components/OutlinedButton";
import { useNavigate } from "react-router-dom";
import { ArrowCircleDown } from "@mui/icons-material";
import { useEffect } from "react";
import HamburgerMenu from "../../../components/HamburgerMenu";
import ArrowButton from "../../../components/ArrowButton";

const mainPointers = [
  "11 City-Based Workshops (Delhi/NCR, Chandigarh, Kolkata , Mumbai, Pune, Ahmedabad, Surat, Indore, Bengaluru, Chennai, Coimbatore)",
  "One-on-One Mentorship (Tailored coaching with global business experts)",
  "Speed Mentoring Sessions (Focused problem-solving with industry leaders)",
  "Expert-Led Online Tracks (Deep dives into international markets, branding, AI, and more)",
];

const whySheExports = [
  {
    title: "Visibility & Exposure",
    description:
      "Showcase your business through an exclusive podcast series and Aspire For Her platform.",
  },
  {
    title: "Global Market Entry",
    description:
      "Gain insights into key international markets like UAE & USA, covering compliance, finance, and branding.",
  },
  {
    title: "Expert Mentorship & Networking",
    description:
      "Connect with top mentors, industry leaders, corporate buyers, and investors to unlock new business opportunities.",
  },
  {
    title: "Hybrid Learning Model",
    description:
      "Engage in city-based workshops, live sessions, hands-on mentorship, and expert-led digital tracks.",
  },
  {
    title: "Funding & Pitching Opportunities",
    description:
      "Top 10 startups will pitch for funding, with all participants gaining investor access and business expansion strategies.",
  },
  {
    title: "Exclusive Partner Benefits",
    description:
      "Enjoy preferred services from partners like Payoneer and access to Aspire For Her’s corporate offerings for business growth.",
  },
];

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
const Page3 = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Stack color={"#fff"} padding={"24px"} gap={"60px"}>
      <Box marginTop={"-36px"}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography fontSize={"30px"} fontWeight={"700"}>
            SheExports
          </Typography>
          <Box>
            <HamburgerMenu />
          </Box>
        </Stack>
        <Typography fontSize={"20px"} fontWeight={"600"}>
          Season 2
        </Typography>
        <Box
          padding={"5px 8px"}
          width={"max-content"}
          marginTop={"12px"}
          bgcolor={theme.palette.primary.main}
          borderRadius={"2px"}
        >
          <Typography>Launch Date - 12th April, Saturday, Mumbai <br/> 2PM Onwards</Typography>
        </Box>

        <Typography fontWeight={"300"} marginTop={"43px"}>
          This uniquely designed 5-month hybrid program will feature:
        </Typography>
        <ul>
          {mainPointers.map((point, index) => (
            <Typography
              fontWeight={"300"}
              marginLeft={"18px"}
              marginY={"5px"}
              key={index}
              component={"li"}
            >
              {point}
            </Typography>
          ))}
        </ul>

        {/* <Stack
          marginTop={"42px"}
          gap={"32px"}
          alignItems={"center"}
          position={"relative"}
        >
          <Stack direction={"row"} alignItems={"center"} gap={"60px"}>
            <Box width={"60px"}>
              <Typography fontWeight={"400"}>4th</Typography>
              <Typography fontSize={"12px"} fontWeight={"400"}>
                Apr
              </Typography>
            </Box>
            <Box
              padding={"5px 8px"}
              width={"198px"}
              bgcolor={theme.palette.primary.main}
              borderRadius={"2px"}
            >
              <Typography>Applications closes</Typography>
            </Box>
          </Stack>

          <Stack direction={"row"} alignItems={"center"} gap={"60px"}>
            <Box width={"60px"}>
              <Typography fontWeight={"400"}>7th</Typography>
              <Typography fontSize={"12px"} fontWeight={"400"}>
                Apr
              </Typography>
            </Box>
            <Box
              padding={"5px 8px"}
              width={"198px"}
              bgcolor={theme.palette.primary.main}
              borderRadius={"2px"}
            >
              <Typography>Orientation & networking</Typography>
            </Box>
          </Stack>

          <Stack
            position={"absolute"}
            height={"100%"}
            width={"4px"}
            bgcolor={theme.palette.primary.main}
            left={"30%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              width={"24px"}
              height={"24px"}
              borderRadius={"50%"}
              bgcolor={theme.palette.primary.main}
            />
            <Box
              width={"24px"}
              height={"24px"}
              borderRadius={"50%"}
              bgcolor={theme.palette.primary.main}
            />
          </Stack>
        </Stack> */}


        <Stack
          direction={"row"}
          alignItems={"center"}
          marginTop={"42px"}
          gap={"8px"}
        >
          <ArrowButton
            direction="LEFT"
            onClick={() => navigate("/onboarding/2")}
          />
          <OutlinedButton
            sx={{
              color: theme.palette.tertiary.main,
              fontSize: "20px",
              borderColor: theme.palette.tertiary.main,
            }}
            onClick={() => navigate("/login")}
          >
            Register
          </OutlinedButton>
        </Stack>
      </Box>

      {/* Why SheExports */}
      <Box>
        <Typography fontSize={"30px"} fontWeight={"700"}>
          Why SheExports
        </Typography>
        <Stack
          bgcolor={theme.palette.primary.main}
          marginTop={"20px"}
          padding={"20px"}
          borderRadius={"10px"}
          gap={"16px"}
        >
          {whySheExports.map((item, index) => (
            <Box key={index}>
              <Typography fontSize={"18px"} fontWeight={"700"}>
                {item.title}
              </Typography>
              <Typography fontSize={"12px"} fontWeight={"500"}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          marginTop={"42px"}
          gap={"8px"}
        >
          <ArrowButton
            direction="LEFT"
            onClick={() => navigate("/onboarding/2")}
          />
          <OutlinedButton
            sx={{
              color: theme.palette.tertiary.main,
              fontSize: "20px",
              borderColor: theme.palette.tertiary.main,
            }}
            onClick={() => navigate("/login")}
          >
            Register
          </OutlinedButton>
        </Stack>
      </Box>

      {/* Program Overview */}
      <Box>
        <Typography fontSize={"30px"} fontWeight={"700"}>
          Program Overview
        </Typography>
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

      {/* Workshop Details */}
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

      <Stack direction={"row"} gap={"14px"} marginTop={"-42px"}>
        <OutlinedButton
          sx={{
            color: theme.palette.tertiary.main,
            fontSize: "20px",
            marginTop: "42px",
            flex: "1",
            minWidth: "max-content",
            borderColor: theme.palette.tertiary.main,
          }}
          onClick={() => navigate("/onboarding/2")}
        >
          Season 1
        </OutlinedButton>
        <OutlinedButton
          onClick={() => navigate("/faqs")}
          sx={{
            color: theme.palette.tertiary.main,
            fontSize: "20px",
            marginTop: "42px",
            flex: "1",
            borderColor: theme.palette.tertiary.main,
          }}
        >
          FAQs
        </OutlinedButton>
      </Stack>
    </Stack>
  );
};

export default Page3;
