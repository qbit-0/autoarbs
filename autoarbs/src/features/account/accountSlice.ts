import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type AccountState = {
  username: string | null;
  balance: number;
  deposited: number;
  withdrawn: number;
};

const initialState = {
  username: null,
  balance: 300,
  deposited: 200,
  withdrawn: 100,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
    },
    logout: (state) => {
      state.username = null;
    },
    deposit: (state, action) => {
      state.balance += action.payload;
      state.deposited += action.payload;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload;
      state.withdrawn += action.payload;
    },
  },
});

export const accountActions = accountSlice.actions;

export const selectUsername = (state: RootState) => state.account.username;
export const selectBalance = (state: RootState) => state.account.balance;
export const selectDeposited = (state: RootState) => state.account.deposited;
export const selectWithdrawn = (state: RootState) => state.account.withdrawn;

export default accountSlice.reducer;
