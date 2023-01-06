import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import axios from "axios";
import { Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  createLogin,
  createSendOtp,
  createUser,
  readUserByEmail,
} from "../../api/account";
import { useAppDispatch } from "../../app/hooks";
import { accountActions } from "../../features/account/accountSlice";
import { snackbarActions } from "../../features/snackbar/snackbarSlice";
import CardForm from "../CardForm";
import CardTitle from "../CardTitle";
import FormikSubmitButton from "../FormikSubmitButton";
import FormikTextField from "../FormikTextField";

type Values = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

const initialValues: Values = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
};

const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .test(
      "is-email-available",
      () => "Email is already in use",
      async (email) => {
        if (!email) return true;

        try {
          await readUserByEmail({ email });
          return false;
        } catch (error) {
          if (axios.isAxiosError(error) && error.response) {
            switch (error.response.data.statusCode) {
              case "44":
                return true;
              default:
                return false;
            }
          }
          return false;
        }
      }
    )
    .required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be at most 32 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Your passwords must match")
    .required("Required"),
});

type Props = {};

const SignUpCard = (props: Props) => {
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

  const login = async (email: string, password: string) => {
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
  };

  const handleSubmit = async (
    { email, firstName, lastName, password }: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const response = await createUser({
        email,
        firstName,
        lastName,
        password,
      });
      dispatch(
        snackbarActions.toast({
          message: response.data.statusMessage,
          severity: "success",
        })
      );
      login(email, password);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        switch (error.response.data.statusCode) {
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
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}
      >
        <CardForm>
          <CardMedia
            image="images/Login_signup Stripes.jpg"
            sx={{ height: 300 }}
          />
          <CardContent>
            <CardTitle>Create an account</CardTitle>
            <Grid2 container rowSpacing={4} columnSpacing={2}>
              <Grid2></Grid2>
              <Grid2 xs={12}>
                <FormikTextField id="email" name="email" label="Email" />
              </Grid2>
              <Grid2 xs={6}>
                <FormikTextField
                  id="firstName"
                  name="firstName"
                  label="First Name"
                />
              </Grid2>
              <Grid2 xs={6}>
                <FormikTextField
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                />
              </Grid2>
              <Grid2 xs={12}>
                <FormikTextField
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                />
              </Grid2>
              <Grid2 xs={12}>
                <FormikTextField
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                />
              </Grid2>
            </Grid2>
          </CardContent>
          <CardActions>
            <FormikSubmitButton>Next</FormikSubmitButton>
          </CardActions>
        </CardForm>
      </Formik>
    </Card>
  );
};

export default SignUpCard;
