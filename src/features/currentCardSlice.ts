import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardFromServer } from '../types/CardFromServer';

type CurrentCardState = {
  currentCard: CardFromServer | null,
};

const InitialState: CurrentCardState = {
  currentCard: null,
};

const currentCardSlice = createSlice({
  name: 'currentCard',
  initialState: InitialState,
  reducers: {
    setCurrentCard: (state, action: PayloadAction<CardFromServer | null>) => {
      state.currentCard = action.payload;
    },
  },
});

export default currentCardSlice.reducer;
export const { setCurrentCard } = currentCardSlice.actions;
