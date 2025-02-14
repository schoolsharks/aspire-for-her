import { createSlice } from "@reduxjs/toolkit";
// import { cardsData } from "../../data/cardsData";
import { fetchCardsData } from "./cardsActions";



export enum questionTypes {
  TEXT_INPUT = "TEXT_INPUT",
  CHOICES = "CHOICES",
}


interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  min?: number;
  max?: number;
  type?: "number" | "text";
}

interface Condition {
  if: string[];
  removeCards?: string[];
  removeQuestions?: string[];
}

interface BaseQuestion {
  id: string;
  question?: string;
  validation?: ValidationRules;
  defaultHidden?: boolean;
  condition?: Condition[];
}

interface TextQuestion extends BaseQuestion {
  type: questionTypes.TEXT_INPUT;
  label?: string;
  placeholder?: string;
  unit?: string;
  multiline?: boolean;
}

interface ChoicesQuestion extends BaseQuestion {
  type: questionTypes.CHOICES;
  textInput?: { placeholder: string };
  options: { text: string; subtext?: string; other?: boolean }[];
}

export type Question = TextQuestion | ChoicesQuestion;

export interface Card {
  id: string;
  title: string;
  questions: Question[];
}

interface CardsData {
  cardsData: Card[];
  hiddenCards: string[];
  hiddenQuestions: string[];
  loading:boolean;
}

const initialState: CardsData = {
  cardsData: [],
  hiddenCards: [],
  hiddenQuestions: [],
  loading:false
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setHiddenData: (state, action) => {
      state.hiddenCards = action.payload.hiddenCards ?? state.hiddenCards;
      state.hiddenQuestions =
        action.payload.hiddenQuestions ?? state.hiddenQuestions;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardsData.pending, (state) => {
        state.loading=true
      })
      .addCase(fetchCardsData.fulfilled, (state, action) => {
        state.cardsData = action.payload;
        state.loading=false
      })
      .addCase(fetchCardsData.rejected, (state, action) => {
        state.loading=false
        console.error("Failed to fetch cards data:", action.payload);
      });
  },
});

export const { setHiddenData } = cardsSlice.actions;

export default cardsSlice.reducer;