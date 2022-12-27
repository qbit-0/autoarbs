import { Button, Container, Stack } from "@mui/material";
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

  const handleResendCode = async () => {
    try {
      const res = await createSendOtp({
        token: "",
        email,
        transactionId: "",
        action,
      });
      const data = res.data;
      switch (data.statusCode) {
        case "200":
          dispatch(
            snackbarActions.toast({
              message: "Verification code sent",
              severity: "success",
            })
          );
          navigate("/verification", {
            state: { email, referenceId: data.referenceId, action },
          });
          break;
        default:
          dispatch(
            snackbarActions.toast({
              message: data.statusMessage,
              severity: "error",
            })
          );
          break;
      }
    } catch (err) {
      console.error(err);
      dispatch(
        snackbarActions.toast({
          message: "Failed to send verification code",
          severity: "error",
        })
      );
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
          <Button onClick={handleResendCode}>Resend code</Button>
        </Stack>
      </Container>
    </Stack>
  );
};

export default VerificationPage;
