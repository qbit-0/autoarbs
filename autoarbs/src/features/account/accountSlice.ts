import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type UserData = {
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  balance: number;
  withdrawalHistory: [];
};

export type AccountState = {
  isLoggedIn: boolean;
  userData: UserData | null;
};

const initialState: AccountState = {
  isLoggedIn: false,
  userData: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
    },
    deposit: (state, action) => {},
    withdraw: (state, action) => {},
  },
});

export const accountActions = accountSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.account.isLoggedIn;
export const selectUserData = (state: RootState) => state.account.userData;

export default accountSlice.reducer;
