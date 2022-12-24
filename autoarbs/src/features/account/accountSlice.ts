import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type Transaction = {
  transactionId: string;
  depositEmail: string;
  amount: number;
  method: string;
  status: string;
  isSuccess: boolean;
  createdAt: string;
  updateAt: string;
};

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
  depositHistory: Transaction[];
  withdrawalHistory: Transaction[];
};

export type AccountState = {
  userData: UserData | null;
  token: string | null;
  autoUpdateIntervalId: NodeJS.Timer | null;
};

const initialState: AccountState = {
  userData: null,
  token: null,
  autoUpdateIntervalId: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ userData: UserData; token: string }>
    ) => {
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
    setAutoUpdateIntervalId: (
      state,
      action: PayloadAction<NodeJS.Timer | null>
    ) => {
      state.autoUpdateIntervalId = action.payload;
    },
  },
});

export const accountActions = accountSlice.actions;

export const selectUserData = (state: RootState) => state.account.userData;
export const selectToken = (state: RootState) => state.account.token;
export const selectAutoUpdateIntervalId = (state: RootState) =>
  state.account.autoUpdateIntervalId;

export default accountSlice.reducer;
