import { Card, CardActions, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Form, Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createUser, readUserByEmail } from "../../api/account";
import { useAppDispatch } from "../../app/hooks";
import { snackbarActions } from "../../features/snackbar/snackbarSlice";
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
          const res = await readUserByEmail(email);
          const data = res.data;

          if (!data.isSuccess) {
            return true;
          } else {
            return false;
          }
        } catch (err) {
          console.error(err);
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

  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const res = await createUser(
        values.email,
        values.firstName,
        values.lastName,
        values.password
      );
      const data = res.data;

      switch (data.statusCode) {
        case "201":
          dispatch(
            snackbarActions.toast({
              message: "Signup successful",
              severity: "success",
            })
          );
          navigate("/verification");
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
          message: "Signup failed",
          severity: "error",
        })
      );
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
        {({ status }) => (
          <Form>
            <CardContent>
              <Grid container spacing={4}>
                <Grid>
                  <Typography variant="h3">Create an Account</Typography>
                </Grid>
                <Grid xs={12}>
                  <FormikTextField id="email" name="email" label="Email" />
                </Grid>
                <Grid xs={6}>
                  <FormikTextField
                    id="firstName"
                    name="firstName"
                    label="First Name"
                  />
                </Grid>
                <Grid xs={6}>
                  <FormikTextField
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                  />
                </Grid>
                <Grid xs={12}>
                  <FormikTextField
                    type="password"
                    id="password"
                    name="password"
                    label="Password"
                  />
                </Grid>
                <Grid xs={12}>
                  <FormikTextField
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <FormikSubmitButton>Next</FormikSubmitButton>
            </CardActions>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default SignUpCard;
