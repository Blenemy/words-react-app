/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardFromServer } from '../types/CardFromServer';

type cardsState = {
  cards: CardFromServer[] | null,
};

const InitialState: cardsState = {
  cards: null,
};

const burgerSlice = createSlice({
  name: 'cards',
  initialState: InitialState,
  reducers: {
    setCards: (state, action: PayloadAction<CardFromServer[]>) => {
      state.cards = action.payload;
    },
  },
});

export default burgerSlice.reducer;
export const { setCards } = burgerSlice.actions;
