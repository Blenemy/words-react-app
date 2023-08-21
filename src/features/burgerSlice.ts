/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type BurgerState = {
  opened: boolean,
};

const InitialState: BurgerState = {
  opened: true,
};

const burgerSlice = createSlice({
  name: 'burger',
  initialState: InitialState,
  reducers: {
    setOpened: (state, action: PayloadAction<boolean>) => {
      state.opened = action.payload;
    },
  },
});

export default burgerSlice.reducer;
export const { setOpened} = burgerSlice.actions;
