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
  id: string;
  question?: string;
  type: questionTypes.TEXT_INPUT;
  label?: string;
  placeholder?: string;
  validation?: ValidationRules;
  unit?:string;
  defaultHidden?:boolean;
  multiline?:boolean;
  condition?:{
    if:string[],
    removeCards?:string[],
    removeQuestions?:string[]
  }[]
}
interface ChoicesQuestion {
  id: string;
  type: questionTypes.CHOICES;
  textInput?: { placeholder: string };
  question?: string;
  options: { text: string; subtext?: string; other?: boolean }[];
  validation?: ValidationRules;
  defaultHidden?:boolean;
  condition?:{
    if:string[],
    removeCards?:string[],
    removeQuestions?:string[]
  }[]
}

export type Question = TextQuestion | ChoicesQuestion;

export interface Card {
  id:string;
  title: string;
  questions: Question[];
}

interface CardsData {
  cardsData: Card[];
  hiddenCards: string[];
  hiddenQuestions: string[];
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
