import { ArrowBackIos } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import OutlinedButton from "../../../components/OutlinedButton";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const navigate=useNavigate()
  return (
    <Stack
      sx={{ minHeight: window.innerHeight, bgcolor: "#000", color: "#fff" }}
      padding={"60px 16px"}
    >
      <Stack direction={"row"} color={"#fff"} alignItems={"center"} gap="5px">
        <IconButton>
          <ArrowBackIos
            sx={{
              color: "#fff",
              borderRadius: "50%",
              border: "2px solid #fff",
              padding: "1px 1px 1px 5px",
              fontSize: "22px",
            }}
          />
        </IconButton>
        <Typography fontSize={"24px"} fontWeight={"600"}>
          Review
        </Typography>
      </Stack>
      <Stack flex={"1"} justifyContent={"center"} padding={"25px"}>
        <Typography fontSize={"32px"} fontWeight={"700"}>
          Thank you for your interest in SheExports. We’ll just take a few
          moments to understand how we can best assist you.
        </Typography>
      </Stack>
      <OutlinedButton
      onClick={()=>navigate("/benefits")}
        sx={{ fontSize: "18px", fontWeight: "400", color: "#fff",marginLeft:"25px" }}
      >
        Save & continue
      </OutlinedButton>
    </Stack>
  );
};

export default Review;
