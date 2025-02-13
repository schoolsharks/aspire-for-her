import { createSlice } from "@reduxjs/toolkit";
import { cardsData, questionTypes } from "../../data/cardsData";


interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  min?: number;
  max?: number;
  type?: "number" | "text";
}

interface TextQuestion {
  id: number;
  question?: string;
  type: questionTypes.TEXT_INPUT;
  label?: string;
  placeholder?: string;
  validation?: ValidationRules;
  unit?:string;
  condition?:{
    if:string,
    removeCards?:number[],
    removeQuestions?:number[]
  }
}
interface ChoicesQuestion {
  id: number;
  type: questionTypes.CHOICES;
  textInput?: { placeholder: string };
  question?: string;
  options: { text: string; subtext?: string; other?: boolean }[];
  validation?: ValidationRules;
  condition?:{
    if:string,
    removeCards?:number[],
    removeQuestions?:number[]
  }
}

export type Question = TextQuestion | ChoicesQuestion;

export interface Card {
  id:number;
  title: string;
  questions: Question[];
}

interface CardsData {
  cardsData: Card[];
  hiddenCards: number[];
  hiddenQuestions: number[];
}

const initialState: CardsData = {
  cardsData: cardsData,
  hiddenCards: [],
  hiddenQuestions: [],
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
});

export const { setHiddenData } = cardsSlice.actions;

export default cardsSlice.reducer;
