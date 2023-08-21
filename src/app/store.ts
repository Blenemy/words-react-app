import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import burgerSlice from '../features/burgerSlice';
import userSlice from '../features/userSlice';
import submenuSlice from '../features/submenuSlice';
import cardsSlice from '../features/cardsSlice';

export const store = configureStore({
  reducer: {
    burger: burgerSlice,
    user: userSlice,
    isCollapsed: submenuSlice,
    cards: cardsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */
