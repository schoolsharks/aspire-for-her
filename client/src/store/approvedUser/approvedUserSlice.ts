import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./approvedUserActions";

export interface ApprovedUser {
  name: string;
  loading: boolean;
  status: "LOGGED_IN" | "IDLE";
  error: string | null;
}

const initialState: ApprovedUser = {
  name: "",
  loading: true,
  error: null,
  status: "IDLE",
};

const approvedUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setApprovedUser: (state, action) => {
      state.name = action.payload.name ?? state.name;
      state.loading = action.payload.loading ?? state.loading;
      state.status = action.payload.status ?? state.status;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.status = "LOGGED_IN";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
        state.status = "IDLE";
      });
  },
});

export const { setApprovedUser, setError } = approvedUserSlice.actions;

export default approvedUserSlice.reducer;
