import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { Form, Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createLogin } from "../../api/account";
import { useAppDispatch } from "../../app/hooks";
import { accountActions } from "../../features/account/accountSlice";
import { snackbarActions } from "../../features/snackbar/snackbarSlice";
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

  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const res = await createLogin(values.email, values.password);
      const data = res.data;

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
          navigate("/wallet");
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
        <Form>
          <CardContent>
            <Grid container spacing={4}>
              <Grid xs={12}>
                <Typography variant="h3">Log In</Typography>
              </Grid>
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
        </Form>
      </Formik>
    </Card>
  );
};

export default LoginCard;
