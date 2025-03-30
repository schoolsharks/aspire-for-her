import Marquee from "react-fast-marquee";
import { Stack, Typography } from "@mui/material";
import theme from "../../../theme";

const AnimatedTestimonials = ({ testimonials }: { testimonials: any[] }) => {
  return (
    <Marquee
      speed={40}
      gradient={false}
      pauseOnHover={false}
      pauseOnClick={false}
    >
      {testimonials.map((testimonial, index) => (
        <Stack
          key={index}
          sx={{
            border: `1.5px solid ${theme.palette.primary.main}`,
            padding: "12px",
            borderRadius: "5px",
            minWidth: "220px",
            width: "180px",
            marginRight: "8px",
            minHeight: "220px",
            height:"100%",
            justifyContent: "space-between",
            gap: "16px",
            paddingBottom: "24px",
            userSelect: "none",
            backgroundColor: "transparent"
          }}
        >
          <Typography fontSize="12px" fontWeight="300">
            {testimonial.testimonial}
          </Typography>
          <Typography fontSize="10px" fontWeight="600">
            {testimonial.name}
          </Typography>
        </Stack>
      ))}
    </Marquee>
  );
};

export default AnimatedTestimonials;