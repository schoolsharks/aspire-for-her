import { Button, IconButton, Stack, Typography } from "@mui/material";
import { benefitsData } from "../../../data/benefitsData";
import BenefitCard from "./BenefitCard";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        bgcolor: "#000000",
        color: "#fff",
        minHeight: Math.max(
          window.innerHeight,
          benefitsData.length * 140 + 220
        ),
        position: "relative",
      }}
      padding={"24px 16px"}
    >
      <Typography fontSize={"24px"} fontWeight={"600"}>
        Review
      </Typography>
      <Stack marginTop={"44px"}>
        {benefitsData.map((benefit, index) => (
          <Stack
            boxShadow={"0 0 100px #ffffff5d"}
            borderRadius={"20px"}
            sx={{
              position: "absolute",
              top: `${index * 120 + 100}px`,
              left: "16px",
              right: "16px",
              height: "200px",
            }}
          >
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              dragSlider={false}
            />
          </Stack>
        ))}
      </Stack>
      <Stack
        direction={"row"}
        margin={"auto 0 16px"}
        padding="8px"
        alignItems={"center"}
        gap={"16px"}
      >
        <IconButton onClick={() => navigate("/benefits")} sx={{ padding: "0" }}>
          <ArrowBack
            sx={{
              border: "2px solid white",
              fontSize: "40px",
              padding: "4px",
              borderRadius: "50%",
              color: "#ffffff",
            }}
          />
        </IconButton>
        <Button
          variant="outlined"
          onClick={() => navigate("/summary")}
          sx={{
            width: "max-content",
            textTransform: "none",
            borderRadius: "48px",
            fontSize: "20px",
            padding: "0 28px",
            height: "40px",
            border: "2px solid #fff",
            color: "#fff",
          }}
        >
          Secure your spot
        </Button>
      </Stack>
    </Stack>
  );
};

export default Review;
