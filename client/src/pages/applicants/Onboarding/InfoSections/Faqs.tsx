import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Stack,
    Typography,
    useTheme,
  } from "@mui/material";
  import {  useState } from "react";
  
  const faqs = [
    {
      question: "Is there a cost for the Founder/Co-Founder?",
      answer: "Ans: No. This is a no-cost, no-equity accelerator program.",
    },
    {
      question: "What percentage of the business should be women-led?",
      answer:
        "Ans: The business must have a majority active stake held by a woman founder.",
    },
    {
      question: "Can men apply to the program?",
      answer:
        "Ans: Yes. While the program is women-focused, 10% of seats are reserved for male entrepreneurs who wish to participate.",
    },
    {
      question: "Is the program focused on both products and services?",
      answer: "Ans: No, Season 2 is exclusively focused on the service industry.",
    },
    {
      question: "What if I am unable to attend a session?",
      answer:
        "Ans: Sessions will be recorded and available on request. However, active participation is monitored, and any lack of engagement may result in exclusion from the program.",
    },
    {
      question: "Do I need prior export experience to apply?",
      answer:
        "Ans: No. The program is designed for both beginners and experienced entrepreneurs looking to expand internationally.",
    },
    {
      question: "What industries are eligible for the program?",
      answer:
        "Ans: The program is open to all service-based businesses, including IT, consulting, education, wellness, financial services, and creative industries.",
    },
    {
      question: "How will the one-on-one mentorship be structured?",
      answer:
        "Ans: Each participant will receive three personalized mentoring sessions with industry experts tailored to their business needs.",
    },
    {
      question: "Will there be networking opportunities?",
      answer:
        "Ans: Yes! Participants will have multiple opportunities to connect with fellow entrepreneurs, industry experts, and potential partners through workshops and online sessions.",
    },
    {
      question: "Is this program open to startups at all stages?",
      answer:
        "Ans: This program is suitable for early revenue or early growth stage startups. It is designed to accelerate your growth.",
    },
    {
      question: "How can I apply?",
      answer:
        "Ans: Applications will open on February 10, 2025, and you can apply through this link",
    },
    {
      question: "Can MSME/SME join the program?",
      answer: "Ans. Yes, as long as it is service-focused.",
    },
    {
      question: "Does filling this application guarantee spot?",
      answer: "Ans. We wish, if we can have you all. But the application selection will happen via an independent jury members based on various criteria and one important one is revenue making and not at ideation stage.",
    },
    {
      question: "What monthly commitment is needed from my end?",
      answer:
        "Ans: Even though it’s a five month program we expect you to participate in the monthly virtual workshop/session or panel engagement x 2 hours/ month. Mandatory to attend in person one of the 10 live city workshops (depending on the city schedule) and your personal one X one mentoring sessions.",
    },
    {
      question:
        "What if I had selected Mumbai as a choice of preference for live workshops, but a sudden travel comes up? Can I attend another one in another city?",
      answer:
        "Ans: Yes, we are flexible on that. Kindly keep the team informed in advance.",
    },
  ];
  const Faqs = () => {
    const [expanded, setExpanded] = useState(0);
    const theme = useTheme();
    
    return (
      <Stack  color={"#fff"} >
        <Stack gap={"6px"}>
          {faqs.map((faq, index) => (
            <Accordion
              expanded={index === expanded}
              onClick={() => index===expanded?setExpanded(-1):setExpanded(index)}
              key={index}
              sx={{
                borderRadius: "5px !important",
                color: "#fff",
                border: "0.5px solid #ffffff",
                bgcolor:
                  expanded === index ? theme.palette.primary.main : "transparent",
              }}
            >
              <AccordionSummary>
                <Typography fontSize={"18px"} fontWeight="400">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography marginTop={"-20px"} fontSize={"16px"} fontWeight={"400"}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
  
        {/* <Typography marginTop={"60px"} fontWeight={"600"}>
          For any questions in the interim, please contact <br />
          <br />
          <b>Vibha</b>
          <br />
          (vibha.manohara@aspireforher.com) <br />
          or <br />
          <b>Anuj</b>
          <br /> (anuj.kanwar@aspireforher.com)
        </Typography> */}
      </Stack>
    );
  };
  
  export default Faqs;
  