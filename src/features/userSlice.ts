import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserFromServer } from '../types/UserFromServer';

type UserState = {
  user: UserFromServer | null,
};

const InitialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: InitialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserFromServer | null>) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
