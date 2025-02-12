import { Box, Stack, Typography } from "@mui/material";
import theme from "../../../theme";

const AnimatedTestimonials = ({ testimonials }:{testimonials:any}) => {
//   const [isPaused, setIsPaused] = useState(false);

  // Duplicate testimonials to create seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <Box sx={{ 
      overflowX: 'hidden',
      width: '100%'
    }}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          display: 'flex',
        //   animation: isPaused ? 'none' : 'scroll 10s linear infinite',
          animation: 'scroll 10s linear infinite',
          '&:hover': {
            animationPlayState: 'paused',
          },
          '@keyframes scroll': {
            '0%': {
              transform: 'translateX(0)',
            },
            '100%': {
              transform: 'translateX(-50%)',
            },
          },
        //   cursor: isPaused ? 'grabbing' : 'grab',
          cursor:'grab',
        }}
        // onMouseDown={() => setIsPaused(true)}
        // onMouseUp={() => setIsPaused(false)}
        // onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <Stack
            key={index}
            sx={{
              border: `1.5px solid ${theme.palette.primary.main}`,
              padding: "12px",
              borderRadius: "5px",
              minWidth: "165px",
              flex: "1",
              minHeight: "220px",
              justifyContent: "space-between",
              gap: "16px",
              paddingBottom: "24px",
              userSelect:"none",
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
      </Stack>
    </Box>
  );
};

export default AnimatedTestimonials;