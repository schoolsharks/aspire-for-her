import { createAsyncThunk } from "@reduxjs/toolkit";
import { userApi } from "../../api/userApi";


export const loginUser = createAsyncThunk(
    "approvedUser/loginUser",
    async (
      { emailPhone }: { emailPhone:string },
      { rejectWithValue }
    ) => {
      try {
        await userApi.post("/approved-user/login", {emailPhone});
      } catch (error: any) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to Create User"
        );
      }
    }
  );