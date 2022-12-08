import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type AccountState = {
  isLoggedIn: boolean;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  balance: number;
  deposited: number;
  withdrawn: number;
};

const initialState = {
  isLoggedIn: false,
  username: "",
  email: "",
  firstname: "",
  lastname: "",
  balance: 0,
  deposited: 0,
  withdrawn: 0,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = "";
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

export const selectIsLoggedIn = (state: RootState) => state.account.isLoggedIn;
export const selectUsername = (state: RootState) => state.account.username;
export const selectFirstname = (state: RootState) => state.account.firstname;
export const selectLastname = (state: RootState) => state.account.lastname;
export const selectBalance = (state: RootState) => state.account.balance;
export const selectDeposited = (state: RootState) => state.account.deposited;
export const selectWithdrawn = (state: RootState) => state.account.withdrawn;

export default accountSlice.reducer;
