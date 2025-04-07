import {
  AccountCircleOutlined,
  CardGiftcard,
  EditOutlined,
} from "@mui/icons-material";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import UpperTriangleBox from "../../../components/UpperTriangleBox";
import { CircularProgressWithLabel } from "../../../components/CircularProgressWithLabel";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import logos from "../../../assets/company-logos.webp"

const Profile = () => {
  const theme = useTheme();
  const { name } = useSelector((state: RootState) => state.approvedUser);

  const personalDetails = {
    Name: name,
    Designation: "Deveoper",
    "Email Address": "manishbulchandani4@gmail.com",
    Contact: "9352005086",
  };

  return (
    <Stack position={"relative"}>
      <UpperTriangleBox sx={{ flex: "1" }}>
        <Stack color={"#fff"} padding={"0 24px"}>
          <Stack direction="row" justifyContent={"space-between"}>
            <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
              <Typography fontSize={"30px"} fontWeight={"700"}>
                Profile
              </Typography>
              <AccountCircleOutlined sx={{ fontSize: "36px" }} />
            </Stack>
          </Stack>

          {/* Score */}
          <Stack
            direction="row"
            marginTop={"64px"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Box>
              <CircularProgressWithLabel
                background="#000"
                value={70}
                size={100}
                thickness={4}
                trackColor="#464646"
                labelComponent={<CardGiftcard sx={{ fontSize: "42px" }} />}
              />
            </Box>
            <Box>
              <Typography
                fontSize={"1.25rem"}
                fontWeight={"700"}
                color={theme.palette.lmsprimary.main}
              >
                120 pts
              </Typography>
              <Typography fontWeight={"400"}>
                80 points more to claim a reward.
              </Typography>
            </Box>
          </Stack>

          {/* Personal Information */}

          <Box marginTop={"44px"}>
            <Typography fontSize={"1.25rem"} fontWeight={"600"}>
              Personal Information
            </Typography>
            <Box
              padding={"24px 16px"}
              marginTop={"10px"}
              bgcolor={theme.palette.lmsprimary.greyDark}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography
                  color={theme.palette.lmsprimary.main}
                  fontWeight={"500"}
                >
                  Personal details
                </Typography>
                <IconButton>
                  <EditOutlined sx={{ color: "#fff" }} />
                </IconButton>
              </Stack>
              <Stack gap={"5px"} marginTop={"12px"}>
                {Object.entries(personalDetails).map(([key, value], index) => (
                  <Stack key={index} direction={"row"}>
                    <Typography fontWeight={"400"} fontSize={"12px"}>
                      {key}:
                    </Typography>
                    <Typography
                      fontSize={"12px"}
                      fontWeight={"600"}
                      marginLeft={"10px"}
                    >
                      {value}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>

          {/* Offers */}
          <Box marginTop={"44px"}>
            <Typography fontSize={"1.25rem"} fontWeight={"600"}>
              Offers
            </Typography>
            <Box height={"50vh"}></Box>
          </Box>
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

export default Profile;
