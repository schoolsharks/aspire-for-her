import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUser, fetchUser, reset, respondToQuestions } from "./userActions";
import { AppDispatch, RootState } from "../store";
import {throttle} from "lodash";

export interface Response {
  questionId: string;
  answer: string[];
}
export interface User {
  name: string;
  loading: boolean;
  responses: Response[];
  status: "LOGGED_IN" | "IDLE";
  error: string | null;
  selectedBenefits:{benefitId:string}[]
}

const initialState: User = {
  name: "",
  loading: true,
  responses:[],
  error: null,
  status: "IDLE",
  selectedBenefits:[]
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name ?? state.name;
      state.loading = action.payload.loading ?? state.loading;
      state.responses = action.payload.responses ?? state.responses;
      state.status = action.payload.status ?? state.status;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    updateResponse: (
      state,
      action: PayloadAction<{ questionId: string; answer: string[] }>
    ) => {
      const index = state.responses.findIndex(
        (res) => res.questionId === action.payload.questionId
      );
      if (index !== -1) {
        state.responses[index].answer = action.payload.answer;
      } else {
        state.responses.push(action.payload);
      }
    },
    updateSelectedBenefitsLocally: (
      state,
      action: PayloadAction<{ benefitId: string }[]>
    ) => {
      state.selectedBenefits=action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        createUser.fulfilled,
        (
          state,
          action: PayloadAction<{
            name: string;
          }>
        ) => {
          (state.loading = false),
            (state.error = null),
            (state.name = action.payload.name ?? state.name);
          state.status = "LOGGED_IN";
        }
      )
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
        state.status = "IDLE";
      })
      .addCase(reset.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        reset.fulfilled,
        (
          state,
          action: PayloadAction<{
            name: string;
          }>
        ) => {
          (state.loading = false),
            (state.error = null),
            (state.name = action.payload.name ?? state.name);
          state.status = "IDLE";
        }
      )
      .addCase(reset.rejected, (state, action) => {
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
            responses: Response[];
            selectedBenefits:{benefitId:string}[]
          }>
        ) => {
          (state.loading = false),
            (state.error = null),
            (state.name = action.payload.name ?? state.name);
          state.responses = action.payload.responses ?? state.responses;
          state.selectedBenefits = action.payload.selectedBenefits ?? state.selectedBenefits;
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


const throttledRespondToQuestions = throttle(
  (dispatch: AppDispatch, responses) => {
    dispatch(respondToQuestions({ responses }));
  },
  2000, // 2 seconds
  { leading: false, trailing: true }
);

export const syncResponses = (response:Response) => (dispatch:AppDispatch, getState:()=>RootState) => {
  dispatch(updateResponse(response));
  const { responses } = getState().user;
  throttledRespondToQuestions(dispatch, responses);
};

export const syncFinalResponses = () => (dispatch:AppDispatch, getState:()=>RootState) => {
  const { responses } = getState().user;
  if (responses.length > 0) {
    dispatch(respondToQuestions({ responses }))
      .unwrap()
      .then(() => {
        // dispatch(clearResponses());
      })
      .catch((error) => console.error("Final sync failed:", error));
  }
};



export const { setUser, setError,updateResponse,updateSelectedBenefitsLocally } = userSlice.actions;

export default userSlice.reducer;
