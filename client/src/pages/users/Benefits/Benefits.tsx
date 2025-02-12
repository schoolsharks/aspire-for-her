import { Box, Stack, Typography, useTheme } from "@mui/material";
import { benefitsData } from "../../../data/benefitsData";
import { useState, useEffect, useCallback } from "react";
import OutlinedButton from "../../../components/OutlinedButton";
import { useNavigate } from "react-router-dom";
import BenefitCard from "./BenefitCard";

const Benefits = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(3);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [swipingCard, setSwipingCard] = useState<number | null>(null);
  const [swipePosition, setSwipePosition] = useState({ x: 0, y: 0 });

  const getCardStyle = (index: number) => {
    if (swipingCard === index) {
      return {
        transform: `translate(${swipePosition.x}px, ${swipePosition.y}px)`,
        opacity: Math.max(0, 1 - Math.abs(swipePosition.x) / 500),
        transition: isDragging ? "none" : "all 0.5s ease",
        zIndex: 4,
      };
    }

    const isActive = index === activeIndex;
    const isPrevious = index === activeIndex - 1;
    const isPrevious2 = index === activeIndex - 2;
    const isNext = index === activeIndex + 1;
    const isNext2 = index === activeIndex + 2;

    if (isActive) {
      return {
        transform: "scale(1) translateY(0)",
        zIndex: 3,
        opacity: 1,
        willChange: "transform, opacity",
        boxShadow: "0 0 100px #ffffff5d",
      };
    } else if (isPrevious) {
      return {
        transform: "translateY(-30%) translateX(30%) rotate(5deg)",
        zIndex: 2,
        willChange: "transform, opacity",
      };
    } else if (isPrevious2) {
      return {
        transform: "translateY(-50%) translateX(50%) rotate(15deg)",
        zIndex: 1,
        opacity: 0.8,
        willChange: "transform, opacity",
      };
    } else if (isNext) {
      return {
        transform: "translateY(70%) translateX(30%) rotate(-5deg)",
        zIndex: 2,
        willChange: "transform, opacity",
      };
    } else if (isNext2) {
      return {
        transform: "translateY(100%) translateX(70%) rotate(-15deg)",
        zIndex: 1,
        opacity: 0.8,
        willChange: "transform, opacity",
      };
    }

    return {
      transform: "scale(0.7) translateY(0)",
      zIndex: 1,
      opacity: 0,
      willChange: "transform, opacity",
    };
  };

  const handleIndexChange = useCallback((direction: "up" | "down") => {
    setActiveIndex((prev) => {
      if (direction === "up") {
        return Math.max(prev - 1, 0);
      } else {
        return Math.min(prev + 1, benefitsData.length - 1);
      }
    });
  }, []);

  const handleCardSelect = (index: number) => {
    if (!selectedCards.includes(index)) {
      setSelectedCards([...selectedCards, index]);
    }

    if (index === activeIndex) {
      handleIndexChange("down");
    } else if (index < activeIndex) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  // Combined start handler for both touch and mouse
  const handleDragStart = (
    e: React.TouchEvent | React.MouseEvent,
    index: number
  ) => {
    if (index === activeIndex) {
      const position = {
        x: "touches" in e ? e.touches[0].clientX : e.clientX,
        y: "touches" in e ? e.touches[0].clientY : e.clientY,
      };
      setStartPosition(position);
      setIsDragging(true);
      setSwipingCard(index);
      setSwipePosition({ x: 0, y: 0 });
    }
  };

  // Combined move handler for both touch and mouse
  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;

    const currentPosition = {
      x: "touches" in e ? e.touches[0].clientX : e.clientX,
      y: "touches" in e ? e.touches[0].clientY : e.clientY,
    };

    const deltaX = currentPosition.x - startPosition.x;
    const deltaY = currentPosition.y - startPosition.y;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      setSwipePosition({ x: deltaX, y: 0 });
    } else {
      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0) {
          handleIndexChange("up");
        } else {
          handleIndexChange("down");
        }
        setIsDragging(false);
        setSwipingCard(null);
      }
    }
  };

  // Combined end handler for both touch and mouse
  const handleDragEnd = () => {
    if (isDragging && swipingCard !== null) {
      if (Math.abs(swipePosition.x) > 50) {
        handleCardSelect(swipingCard);
      } else {
        setSwipePosition({ x: 0, y: 0 });
      }
    }
    setIsDragging(false);
    setSwipingCard(null);
  };

  useEffect(() => {
    let lastScrollTime = Date.now();
    const scrollThreshold = 400;

    const handleWheel = (event: WheelEvent) => {
      if (isDragging) return;

      const currentTime = Date.now();
      if (currentTime - lastScrollTime < scrollThreshold) {
        return;
      }
      lastScrollTime = currentTime;

      if (event.deltaY > 0) {
        handleIndexChange("down");
      } else {
        handleIndexChange("up");
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleIndexChange, isDragging]);

  // Filter out selected cards from display
  const visibleCards = benefitsData.filter(
    (_, index) => !selectedCards.includes(index)
  );


  useEffect(()=>{
    if(visibleCards.length===0){
      navigate("/review")
    }
  },[selectedCards])

  const handleNext = () => {
    if (selectedCards.length) {
      navigate("/review");
    } else {
      navigate("/summary");
    }
  };
  return (
    <Stack
      justifyContent="center"
      sx={{
        height: window.innerHeight,
        bgcolor: "#000",
        overflow: "hidden",
        touchAction: "none",
        color: "#fff",
      }}
    >
      <Typography
        position={"absolute"}
        top="24px"
        left={"16px"}
        fontSize={"24px"}
        fontWeight={"600"}
      >
        How can we help?
      </Typography>
      <Box height="320px" position="relative" marginTop={"90px"}>
        {visibleCards.map((benefit) => {
          const originalIndex = benefitsData.findIndex((b) => b === benefit);
          return (
            <Stack
              key={originalIndex}
              onTouchStart={(e) => handleDragStart(e, originalIndex)}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
              onMouseDown={(e) => handleDragStart(e, originalIndex)}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              sx={{
                position: "absolute",
                marginLeft: "13px",
                right: "0",
                maxWidth: "360px",
                transition: isDragging ? "none" : "all 0.6s ease",
                cursor: originalIndex === activeIndex ? "grab" : "default",
                userSelect: "none",
                borderRadius: "20px",
                ...getCardStyle(originalIndex),
              }}
            >
              <BenefitCard
                title={benefit.title}
                description={benefit.description}
              />
            </Stack>
          );
        })}
      </Box>

      <OutlinedButton
        sx={{
          color: "#fff",
          fontSize: "20px",
          position: "absolute",
          bottom: "24px",
          left: "16px",
        }}
        onClick={handleNext}
      >
        {selectedCards.length ? "Next" : "Skip"}
      </OutlinedButton>
    </Stack>
  );
};

export default Benefits;
