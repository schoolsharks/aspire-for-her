import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import { CircularProgress, Stack } from "@mui/material";
import useWindowHeight from "../../hooks/useWindowHeight";
import Dashboard from "./Dashboard/Dashboard";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/approvedUser/approvedUserActions";
import { useEffect } from "react";
import Profile from "./Profile/Profile";

const UsersMain = () => {
  const { windowHeight } = useWindowHeight();
  const { status, loading } = useSelector(
    (state: RootState) => state.approvedUser
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  if (loading) {
    return (
      <Stack
        minHeight={window.innerHeight}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <CircularProgress sx={{ color: "#000" }} />
      </Stack>
    );
  }

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
        <Route
          path="/login"
          element={
            status === "IDLE" ? <Login /> : <Navigate to="/users/dashboard" />
          }
        />
        <Route
          path="/dashboard"
          element={
            status === "LOGGED_IN" ? (
              <Dashboard />
            ) : (
              <Navigate to="/users/login" />
            )
          }
        />
        <Route
          path="/profile"
          element={
            status === "LOGGED_IN" ? (
              <Profile />
            ) : (
              <Navigate to="/users/login" />
            )
          }
        />
        <Route path="/*" element={<Navigate to="/users/dashboard" />} />
      </Routes>
    </Stack>
  );
};

export default UsersMain;
