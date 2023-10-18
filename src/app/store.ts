import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import cardsSlice from "../features/cardsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    cards: cardsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
