import { createAsyncThunk } from "@reduxjs/toolkit";
import { userApi } from "../../api/userApi";
import { Response, updateSelectedBenefitsLocally } from "./userSlice";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (
    { name, email, contact }: { name: string; email: string; contact: string },
    { rejectWithValue }
  ) => {
    try {
      await userApi.post("/users/create", { name, email, contact });
      return { name };
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
      const response = await userApi.get("/users/getUser");
      return response.data?.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to Fetch User"
      );
    }
  }
);

export const reset = createAsyncThunk(
  "user/reset",
  async (_, { rejectWithValue }) => {
    try {
      const response = await userApi.get("/users/reset");
      return { name: response.data.name };
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to Fetch User"
      );
    }
  }
);

export const respondToQuestions = createAsyncThunk(
  "user/respond",
  async ({ responses }: { responses: Response[] }, { rejectWithValue }) => {
    try {
      const response = await userApi.post("/users/question", { responses });
      return { name: response.data.name };
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to Respond"
      );
    }
  }
);

export const updateSelectedBenefits = createAsyncThunk(
  "user/respond",
  async (
    { benefits }: { benefits: { benefitId: string }[] },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(updateSelectedBenefitsLocally(benefits));

      await userApi.post("/users/benefits", { benefits });
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to Update Benefits"
      );
    }
  }
);
