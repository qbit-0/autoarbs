import { Card, CardMedia } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid2 from "@mui/material/Unstable_Grid2";
import axios from "axios";
import { Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import * as Yup from "yup";
import { adminCreateLogin, createLogin } from "../../api/account";
import { useAppDispatch } from "../../app/hooks";
import { accountActions } from "../../features/account/accountSlice";
import { snackbarActions } from "../../features/snackbar/snackbarSlice";
import CardForm from "../CardForm";
import CardTitle from "../CardTitle";
import FormikSubmitButton from "../FormikSubmitButton";
import FormikTextField from "../FormikTextField";

type Values = { email: string; password: string };
const initialValues: Values = { email: "", password: "" };
const adminLoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

type Props = {};

const AdminLoginCard = (props: Props) => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (
    { email, password }: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const response = await adminCreateLogin({ email, password });
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
        validationSchema={adminLoginSchema}
        onSubmit={handleSubmit}
      >
        <CardForm>
          <CardMedia
            image="images/Login_signup Waves.jpg"
            sx={{ height: 300 }}
          />
          <CardContent>
            <CardTitle>Log into an admin account</CardTitle>
            <Grid2 container spacing={4}>
              <Grid2 xs={12}>
                <FormikTextField id="email" name="email" label="Email" />
              </Grid2>
              <Grid2 xs={12}>
                <FormikTextField
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
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

export default AdminLoginCard;
