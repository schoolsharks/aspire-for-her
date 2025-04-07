import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, fetchUser } from "./approvedUserActions";

export interface ApprovedUser {
  name: string;
  city: string;
  engagement:number;
  loading: boolean;
  status: "LOGGED_IN" | "IDLE";
  error: string | null;
}

const initialState: ApprovedUser = {
  name: "",
  city: "",
  engagement:0,
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
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
        state.status = "IDLE";
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUser.fulfilled,
        (
          state,
          action: PayloadAction<{
            name: string;
            city:string;
            engagement:number
          }>
        ) => {
          state.loading = false;
          state.error = null;
          state.name = action.payload.name ?? state.name;
          state.city = action.payload.city ?? state.city; 
          state.engagement = action.payload.engagement ?? state.engagement; 
          state.status = "LOGGED_IN";
        }
      )
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
        state.status = "IDLE";
      });
  },
});

export const { setApprovedUser, setError } = approvedUserSlice.actions;

export default approvedUserSlice.reducer;
