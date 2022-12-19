import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type UserData = {
  email: string;
  firstName: string;
  lastName: string;
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
  token: string | null;
};

const initialState: AccountState = {
  isLoggedIn: false,
  userData: null,
  token: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ userData: UserData; token: string }>
    ) => {
      state.isLoggedIn = true;
      state.userData = action.payload.userData;
      state.token = action.payload.token;
      window.localStorage.setItem(
        "userData",
        JSON.stringify(action.payload.userData)
      );
      window.localStorage.setItem(
        "token",
        JSON.stringify(action.payload.token)
      );
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
      state.token = null;
      window.localStorage.removeItem("userData");
      window.localStorage.removeItem("token");
    },

    deposit: (state, action: PayloadAction<number>) => {
      if (!state.userData) return;

      state.userData.balance += action.payload;
      state.userData.totalDeposit += action.payload;
    },
    withdraw: (state, action: PayloadAction<number>) => {
      if (!state.userData) return;

      state.userData.balance -= action.payload;
      state.userData.totalWithdrawal -= action.payload;
    },
  },
});

export const accountActions = accountSlice.actions;

export const selectUserData = (state: RootState) => state.account.userData;
export const selectToken = (state: RootState) => state.account.token;

export default accountSlice.reducer;
