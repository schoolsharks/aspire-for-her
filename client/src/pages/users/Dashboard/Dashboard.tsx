import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EngagementCard from "./sections/EngagementCard";
import QuickPulse from "./sections/QuickPulse";
import WorkshopList from "./sections/WorkshopList";
import Onlineworkshop from "./sections/Onlineworkshop";
import Concern from "./sections/Concern";
import Community from "./sections/Community";
import CityBox from "./sections/CityBox";
import UpperTriangleBox from "../../../components/UpperTriangleBox";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import logos from "../../../assets/company-logos.webp"
import { useNavigate } from "react-router-dom";
// import HamburgerMenu from "../../../components/HamburgerMenu";

const Dashboard: React.FC = () => {
  const { name,city } = useSelector((state: RootState) => state.approvedUser);
  const navigate=useNavigate()
  return (
    <Stack position={"relative"}>
      <UpperTriangleBox
        sx={{
          color: "white",
        }}
      >
        <Stack padding={"20px"} marginTop={"-30px"}>
          {/* Header Section */}
          <Stack
            direction={"row"}
            color={"#fff"}
            justifyContent={"space-between"}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                Hi {name.split(" ")[0]} !  
              </Typography>
              <Typography
                sx={{
                  fontWeigth: "300",
                }}
              >
                Preferred city - {city}
              </Typography>
            </Box>

            <IconButton
            onClick={()=>navigate("/users/profile")}
              sx={{
                color: "white",
                borderRadius: "8px",
                padding: "8px",
              }}
            >
              <MenuIcon sx={{ fontSize: "24px" }} />
            </IconButton>
          </Stack>

          <Stack gap={"60px"} marginTop={"45px"}>
            <EngagementCard />
            <QuickPulse />
            <WorkshopList />
            <Onlineworkshop />
            <Concern />
            <Community />
            <CityBox />
          </Stack>
        </Stack>
      </UpperTriangleBox>
      <Box
              component="img"
              src={logos}
              alt=""
              sx={{
                position: "absolute",
                top: "10px",
                right: "16px",
                width: "218px",
              }}
            />
    </Stack>
  );
};

export default Dashboard;
