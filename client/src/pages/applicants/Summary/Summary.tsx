import { Stack, Typography, useTheme } from "@mui/material";
import OutlinedButton from "../../../components/OutlinedButton";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Stack minHeight={window.innerHeight} bgcolor={"#000"} color={"#fff"} padding={"40px"}>
      <Typography fontSize={"32px"} fontWeight={"700"} marginTop={"60px"}>
        Thank You! <br/>Your response has been recorded.{" "}
      </Typography>
      <Typography marginTop={"26px"} fontWeight={"600"}>
        For any questions in the interim, please contact <br />
        <br />
        <b>Vibha</b>
        <br />
        (vibha.manohara@aspireforher.com) <br />
        or <br />
        <b>Anuj</b>
        <br /> (anuj.kanwar@aspireforher.com)
        <br />
        <br />
        <br />
        Just a reminder to check out
      </Typography>
      <Stack direction={"row"} gap={"14px"} marginTop={"30px"}>
        <OutlinedButton
          sx={{
            color: theme.palette.tertiary.main,
            fontSize: "20px",
            flex: "1",
            borderColor: theme.palette.tertiary.main,
          }}
          onClick={() => navigate("/faqs")}
        >
          FAQs
        </OutlinedButton>
        <OutlinedButton
          onClick={() => navigate("/onboarding/3")}
          sx={{
            color: theme.palette.tertiary.main,
            fontSize: "20px",
            flex: "1",
            minWidth: "max-content",
            borderColor: theme.palette.tertiary.main,
          }}
        >
          Program schedule
        </OutlinedButton>
      </Stack>
      <Typography fontWeight={"700"} marginTop={"60px"}>
        We’ll be in touch!
        <br />
        <br />
        <br />
        Team <br />
        Aspire For Her
      </Typography>
    </Stack>
  );
};

export default Summary;
