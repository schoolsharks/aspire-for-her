import { Button, IconButton, Stack, Typography } from "@mui/material";
import { benefitsData } from "../../../data/benefitsData";
import BenefitCard from "./BenefitCard";
import { ArrowBack } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { updateSelectedBenefits } from "../../../store/user/userActions";
import { useState } from "react";

const Review = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { selectedBenefits } = useSelector((state: RootState) => state.user);
  const [removingCard, setRemovingCard] = useState<string | null>(null);

  
  const selectedBenefitsData = benefitsData.filter(benefit => 
    selectedBenefits.some(selected => selected.benefitId === benefit.id.toString())
  );

  const handleRemoveCard = (benefitId: string) => {
    
    setRemovingCard(benefitId);

    
    setTimeout(() => {
      const updatedBenefits = selectedBenefits.filter(
        benefit => benefit.benefitId !== benefitId
      );
      
      
      dispatch(updateSelectedBenefits({ benefits: updatedBenefits }));
      setRemovingCard(null);
    }, 600); 
  };

  const getCardStyle = (benefitId: string, index: number) => {
    const baseStyle = {
      position: "absolute",
      top: `${index * 120 + 100}px`,
      left: "16px",
      right: "16px",
      height: "250px",
      transition: "all 0.5s ease-out",
    };

    if (removingCard === benefitId) {
      return {
        ...baseStyle,
        transform: "translateX(-100%)",
        opacity: 0,
      };
    }

    if (removingCard) {
      const removingIndex = selectedBenefitsData.findIndex(
        benefit => benefit.id.toString() === removingCard
      );
      if (index > removingIndex) {
        return {
          ...baseStyle,
          top: `${(index - 1) * 120 + 100}px`,
        };
      }
    }

    return baseStyle;
  };


  if(selectedBenefits.length===0){
    return <Navigate to="/benefits"/>
  }
  return (
    <Stack
      sx={{
        bgcolor: "#000000",
        color: "#fff",
        minHeight: Math.max(
          window.innerHeight,
          selectedBenefitsData.length * 140 + 220
        ),
        position: "relative",
      }}
      padding={"24px 16px"}
    >
      <Typography fontSize={"24px"} fontWeight={"600"}>
        Review
      </Typography>
      <Stack marginTop={"44px"}>
        {selectedBenefitsData.map((benefit, index) => (
          <Stack
            key={benefit.id}
            boxShadow={"0 0 100px #ffffff5d"}
            borderRadius={"20px"}
            sx={getCardStyle(benefit.id.toString(), index)}
          >
            <BenefitCard
              title={benefit.title}
              description={benefit.description}
              dragSlider={false}
              onClose={() => handleRemoveCard(benefit.id.toString())}
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
        <IconButton 
          onClick={() => navigate("/benefits")} 
          sx={{ padding: "0",marginTop:"24px" }}
        >
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
            marginTop:"24px",
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
          Confirm
        </Button>
      </Stack>
    </Stack>
  );
};

export default Review;