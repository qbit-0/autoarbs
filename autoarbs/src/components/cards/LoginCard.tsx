import { Card, CardMedia } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import { Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createLogin, createSendOtp } from "../../api/account";
import { useAppDispatch } from "../../app/hooks";
import { accountActions } from "../../features/account/accountSlice";
import { snackbarActions } from "../../features/snackbar/snackbarSlice";
import CardForm from "../CardForm";
import CardTitle from "../CardTitle";
import FormikSubmitButton from "../FormikSubmitButton";
import FormikTextField from "../FormikTextField";

type Values = { email: string; password: string };
const initialValues: Values = { email: "", password: "" };
const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

type Props = {};

const LoginCard = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const sendAccountOtp = async (email: string) => {
    try {
      const res = await createSendOtp({
        token: "",
        email,
        transactionId: "",
        action: "1",
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
            state: { email, referenceId: data.referenceId, action: "1" },
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

  const handleSubmit = async (
    { email, password }: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const res = await createLogin({ email, password });
      const data = res.data;

      console.log(data);

      switch (data.statusCode) {
        case "200":
          dispatch(
            accountActions.login({ userData: data.userData, token: data.token })
          );
          dispatch(
            snackbarActions.toast({
              message: "Login successful",
              severity: "success",
            })
          );
          break;
        case "400":
          switch (data.statusMessage) {
            case "Kindly verify your email before proceeding to login":
              sendAccountOtp(email);
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
          break;
        default:
          switch (data.statusMessage) {
            default:
              dispatch(
                snackbarActions.toast({
                  message: data.statusMessage,
                  severity: "error",
                })
              );
              break;
          }
          break;
      }
    } catch (err) {
      console.error(err);
      dispatch(
        snackbarActions.toast({ message: "Login failed", severity: "error" })
      );
    }

    setSubmitting(false);
  };

  return (
    <Card>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <CardForm>
          <CardMedia
            image="https://picsum.photos/1000/1000"
            sx={{ height: 300 }}
          />
          <CardContent>
            <CardTitle>Log into an existing account</CardTitle>
            <Grid container spacing={4}>
              <Grid xs={12}></Grid>
              <Grid xs={12}>
                <FormikTextField id="email" name="email" label="Email" />
              </Grid>
              <Grid xs={12}>
                <FormikTextField
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <FormikSubmitButton>Next</FormikSubmitButton>
          </CardActions>
        </CardForm>
      </Formik>
    </Card>
  );
};

export default LoginCard;
