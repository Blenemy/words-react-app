import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type menuState = {
  isCollapsed: boolean;
};

const InitialState: menuState = {
  isCollapsed: false,
};

const userSlice = createSlice({
  name: "submenu",
  initialState: InitialState,
  reducers: {
    setCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isCollapsed = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setCollapsed } = userSlice.actions;
