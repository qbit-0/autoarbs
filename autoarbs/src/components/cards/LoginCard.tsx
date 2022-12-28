import { Card, CardMedia } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";
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
      const response = await createSendOtp({
        token: "",
        email,
        transactionId: "",
        action: "1",
      });
      dispatch(
        snackbarActions.toast({
          message: response.data.statusMessage,
          severity: "success",
        })
      );
      navigate("/verification", {
        state: { email, referenceId: response.data.referenceId, action: "1" },
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        dispatch(
          snackbarActions.toast({
            message: error.response.data.statusMessage,
            severity: "error",
          })
        );
      }
    }
  };

  const handleSubmit = async (
    { email, password }: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const response = await createLogin({ email, password });
      dispatch(
        snackbarActions.toast({
          message: response.data.statusMessage,
          severity: "success",
        })
      );
      dispatch(
        accountActions.login({
          userData: response.data.userData,
          token: response.data.token,
        })
      );
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        switch (error.response.data.statusCode) {
          case "23":
            sendAccountOtp(email);
            break;
          default:
            dispatch(
              snackbarActions.toast({
                message: error.response.data.statusMessage,
                severity: "error",
              })
            );
            break;
        }
      }
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
            image="images/Login_signup Waves.jpg"
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
