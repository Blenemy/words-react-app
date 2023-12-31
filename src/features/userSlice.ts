import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserFromServer } from "../types/UserFromServer";

type UserState = {
  user: UserFromServer | null;
  isLoading: boolean;
};

const InitialState: UserState = {
  user: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: InitialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserFromServer | null>) => {
      state.user = action.payload;
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
