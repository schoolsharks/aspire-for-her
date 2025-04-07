import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import BehindTheScenes from "./InfoSections/BehindTheScenes";
import Season1 from "./InfoSections/Season1";
import Season2 from "./InfoSections/Season2";
import WhySheExports from "./InfoSections/WhySheExports";
import ProgramOverview from "./InfoSections/ProgramOverview";
import Faqs from "./InfoSections/Faqs";

const InfoMenu = () => {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState<number|null>(null);

  const sections = [
    {
      name: "Behind the scenes",
      data: <BehindTheScenes />,
    },
    {
      name: "SheExports Season 1",
      data: <Season1 />,
    },
    {
      name: "SheExports Season 2",
      data: <Season2 />,
    },
    {
      name: "Why SheExports?",
      data: <WhySheExports />,
    },
    {
      name: "Program Overview",
      data: <ProgramOverview />,
    },
    {
      name: "FAQs",
      data: <Faqs />,
    },
  ];

  return (
    <Stack padding={"24px"} gap={"20px"}>
      {sections.map((section, index) => (
        <>
        <Button sx={{padding:"0"}}>
          <Box
            key={index}
            onClick={() => setActiveSection(index)}
            sx={{
              cursor: "pointer",
              width:"100%",
              textAlign:"left",
              textTransform:"none",
              color: index % 2 === 0 ? "#fff" : "#000",
              padding: "1px",
              bgcolor: index % 2 === 0 ? theme.palette.tertiary.main : "#fff",
              //   border:
              //     index % 2 === 0
              //       ? `1px solid ${theme.palette.tertiary.main}`
              //       : "none",
              clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 85% 100%, 0% 100%)",
              borderRadius:"4px"
            }}
          >
            <Box
              bgcolor={index % 2 === 0 ? "#000" : "transparent"}
              padding={"12px"}
              sx={{
                borderRadius:"4px",
                clipPath:
                  "polygon(0% 0%, 85% 0%, 100% 100%, 85% 100%, 0% 100%)",
              }}
            >
              <Typography fontSize={"1.25rem"} fontWeight={"600"}>
                {section.name}
              </Typography>
            </Box>
          </Box>
          </Button>
          {index === activeSection && section.data}
        </>
      ))}
    </Stack>
  );
};

export default InfoMenu;
