import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type Severity = "error" | "warning" | "info" | "success";

type SnackbarState = { id: number; message: string; severity: Severity };

const initialState: SnackbarState = {
  id: -1,
  message: "",
  severity: "success",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    toast: (
      state,
      action: PayloadAction<{ message: string; severity: Severity }>
    ) => {
      state.id++;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
  },
});

export const snackbarActions = snackbarSlice.actions;

export const selectSnackbarId = (state: RootState) => state.snackbar.id;
export const selectSnackbarMessage = (state: RootState) =>
  state.snackbar.message;
export const selectSnackbarSeverity = (state: RootState) =>
  state.snackbar.severity;

export default snackbarSlice.reducer;
