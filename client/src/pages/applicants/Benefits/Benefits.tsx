import { Box, Stack, Typography } from "@mui/material";
import { benefitsData } from "../../../data/benefitsData";
import { useState, useEffect, useCallback } from "react";
import OutlinedButton from "../../../components/OutlinedButton";
import { Navigate, useNavigate } from "react-router-dom";
import BenefitCard from "./BenefitCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { updateSelectedBenefits } from "../../../store/applicants/applicantsActions";

const Benefits = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const { selectedBenefits } = useSelector((state: RootState) => state.user);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [swipingCard, setSwipingCard] = useState<number | null>(null);
  const [swipePosition, setSwipePosition] = useState({ x: 0, y: 0 });
  const [exitingCard, setExitingCard] = useState<{
    id: number;
    direction: "left" | "right";
  } | null>(null);

  const availableBenefits = benefitsData.filter(
    (benefit) =>
      !selectedBenefits.some((b) => b.benefitId === benefit.id.toString())
  );

  const [activeIndex, setActiveIndex] = useState(
    Math.min(Math.floor(availableBenefits.length / 2), 3)
  );

  const handleIndexChange = useCallback(
    (direction: "up" | "down") => {
      if (exitingCard) return; // Prevent index changes during exit animation
      setActiveIndex((prev) => {
        if (direction === "up") {
          return Math.max(prev - 1, 0);
        } else {
          return Math.min(prev + 1, availableBenefits.length - 1);
        }
      });
    },
    [availableBenefits.length, exitingCard]
  );

  const handleCardSelect = (id: number, swipeDirection: number) => {
    if (!selectedCards.includes(id)) {
      // Set the exiting card with direction based on swipe
      setExitingCard({
        id,
        direction: swipeDirection > 0 ? "right" : "left",
      });

      // After animation completes, update Redux and remove card
      setTimeout(() => {
        setSelectedCards([...selectedCards, id]);
        dispatch(
          updateSelectedBenefits({
            benefits: [...selectedBenefits, { benefitId: id.toString() }],
          })
        );
        setExitingCard(null);

        // Adjust active index if needed
        setActiveIndex((prev) => Math.min(prev, availableBenefits.length - 2));
      }, 500); // Match this with animation duration
    }
  };

  const handleDragStart = (
    e: React.TouchEvent | React.MouseEvent,
    index: number,
    id: number
  ) => {
    if (index === activeIndex && !exitingCard) {
      const position = {
        x: "touches" in e ? e.touches[0].clientX : e.clientX,
        y: "touches" in e ? e.touches[0].clientY : e.clientY,
      };
      setStartPosition(position);
      setIsDragging(true);
      setSwipingCard(id);
      setSwipePosition({ x: 0, y: 0 });
    }
  };

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging || exitingCard) return;

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

  const handleDragEnd = () => {
    if (isDragging && swipingCard !== null) {
      if (Math.abs(swipePosition.x) > 50) {
        handleCardSelect(swipingCard, swipePosition.x);
      } else {
        setSwipePosition({ x: 0, y: 0 });
      }
    }
    setIsDragging(false);
    setSwipingCard(null);
  };

  const getCardStyle = (index: number, benefit: any) => {
    // Handle exiting card animation
    if (exitingCard && benefit.id === exitingCard.id) {
      const exitX = exitingCard.direction === "right" ? 1000 : -1000;
      return {
        transform: `translate(${exitX}px, 0) rotate(${
          exitingCard.direction === "right" ? 30 : -30
        }deg)`,
        opacity: 0,
        transition: "all 0.5s ease-out",
        zIndex: 5,
      };
    }

    // Handle dragging card
    if (swipingCard === benefit.id) {
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

  const handleNext = () => {
    if (selectedBenefits.length) {
      navigate("/review");
    } else {
      navigate("/summary");
    }
  };

  if (selectedBenefits.length === benefitsData.length) {
    return <Navigate to={"/review"} />;
  }

  return (
    <Stack
      justifyContent="center"
      sx={{
        height: window.innerHeight,
        bgcolor: "#000",
        overflow: "hidden",
        touchAction: "none",
        color: "#fff",
        position: "relative",
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
        {availableBenefits.map((benefit, index) => {
          const originalIndex = benefitsData.findIndex((b) => b === benefit);
          return (
            <Stack
              key={originalIndex}
              onTouchStart={(e) => handleDragStart(e, index, benefit.id)}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
              onMouseDown={(e) => handleDragStart(e, index, benefit.id)}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              sx={{
                position: "absolute",
                marginLeft: "13px",
                right: "0",
                maxWidth: "360px",
                width: "100%",
                transition: isDragging ? "none" : "all 0.6s ease",
                cursor: index === activeIndex ? "grab" : "default",
                userSelect: "none",
                borderRadius: "20px",
                ...getCardStyle(index, benefit),
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
        {selectedBenefits.length ? "Next" : "Skip"}
      </OutlinedButton>
    </Stack>
  );
};

export default Benefits;
