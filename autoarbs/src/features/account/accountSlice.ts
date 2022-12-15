import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type UserData = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  isActive: boolean;
  balance: number;
  bonus: number;
  totalBonus: number;
  totalDeposit: number;
  totalWithdrawal: number;
  depositHistory: [];
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
      window.localStorage.setItem("userData", JSON.stringify(state.userData));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
      window.localStorage.removeItem("userData");
    },
    deposit: (state, action) => {},
    withdraw: (state, action) => {},
  },
});

export const accountActions = accountSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.account.isLoggedIn;
export const selectUserData = (state: RootState) => state.account.userData;

export default accountSlice.reducer;
