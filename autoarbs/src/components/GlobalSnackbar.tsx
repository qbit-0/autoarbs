import { Alert, Slide, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import {
  selectSnackbarId,
  selectSnackbarMessage,
  selectSnackbarSeverity,
} from "../features/snackbar/snackbarSlice";

type Props = {};

const GlobalSnackbar = (props: Props) => {
  const id = useAppSelector(selectSnackbarId);
  const message = useAppSelector(selectSnackbarMessage);
  const severity = useAppSelector(selectSnackbarSeverity);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (message) setIsOpen(true);
  }, [id, message]);

  const handleSnackbarClose = () => {
    setIsOpen(false);
  };

  return (
    <Snackbar
      open={isOpen}
      message={message}
      autoHideDuration={5000}
      onClose={handleSnackbarClose}
      TransitionComponent={Slide}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};

export default GlobalSnackbar;
