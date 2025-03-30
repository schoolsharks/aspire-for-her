import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./applicants/applicantsSlice";
import adminReducer from "./admin/sessionInfoSlice";
import cardsReducer from "./cards/cardsSlice";


const store = configureStore({
  reducer: {
    user: userReducer,
    cards: cardsReducer,
    admin: adminReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
