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


  export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (_, { rejectWithValue }) => {
      try {
        const response = await userApi.get("/approved-user/getUser");
        return response.data?.user;
      } catch (error: any) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to Fetch User"
        );
      }
    }
  );