import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type AccountState = {
  balance: number;
};

const initialState = { balance: 9999.99 };

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload;
    },
  },
});

export const accountActions = accountSlice.actions;

export const selectBalance = (state: RootState) => state.account.balance;

export default accountSlice.reducer;
