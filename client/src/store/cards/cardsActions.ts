import { createAsyncThunk } from "@reduxjs/toolkit";
import { Card } from "./cardsSlice";
import { userApi } from "../../api/userApi";

export const fetchCardsData = createAsyncThunk<Card[], void, { rejectValue: string }>(
  "cards/fetchCardsData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await userApi.get("/users/question");
      const data = await response.data;
      return data as Card[];
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Unknown error");
    }
  }
);