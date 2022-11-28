import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type AccountState = {
  balance: number;
  deposited: number;
  withdrawn: number;
};

const initialState = {
  balance: 30,
  deposited: 20,
  withdrawn: 10,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
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

export const selectBalance = (state: RootState) => state.account.balance;
export const selectDeposited = (state: RootState) => state.account.deposited;
export const selectWithdrawn = (state: RootState) => state.account.withdrawn;

export default accountSlice.reducer;
