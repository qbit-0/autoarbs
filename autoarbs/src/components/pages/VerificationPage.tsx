import { Button, Container, Stack } from "@mui/material";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { createSendOtp } from "../../api/account";
import { useAppDispatch } from "../../app/hooks";
import { snackbarActions } from "../../features/snackbar/snackbarSlice";
import OtpCard from "../cards/OtpCard";

type Props = {};

const VerificationPage = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;
  const referenceId = location.state.referenceId;
  const action = location.state.action;

  if (!email || !referenceId || !action) return null;

  const handleSendCode = async () => {
    try {
      const response = await createSendOtp({
        token: "",
        email,
        transactionId: "",
        action: "1",
      });
      dispatch(
        snackbarActions.toast({
          message: response.data.statusCode,
          severity: "success",
        })
      );
      navigate("/verification", {
        state: { email, referenceId: response.data.referenceId, action: "1" },
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch(
          snackbarActions.toast({
            message: error.response?.data.statusMessage,
            severity: "error",
          })
        );
      }
    }
  };

  return (
    <Stack
      flexGrow={1}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxWidth="sm">
        <Stack flexDirection="column" spacing={4}>
          <OtpCard />
          <Button onClick={handleSendCode}>Resend code</Button>
        </Stack>
      </Container>
    </Stack>
  );
};

export default VerificationPage;
