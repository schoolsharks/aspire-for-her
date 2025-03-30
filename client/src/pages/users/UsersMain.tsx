import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import { Stack } from "@mui/material";
import useWindowHeight from "../../hooks/useWindowHeight";
import Dashboard from "./Dashboard/Dashboard";

const UsersMain = () => {
  const { windowHeight } = useWindowHeight();

  return (
    <Stack
      sx={{
        minHeight: windowHeight,
        height: "100%",
        maxWidth: "480px",
        margin: "auto",
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Stack>
  );
};

export default UsersMain;
