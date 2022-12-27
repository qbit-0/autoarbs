import { Card, CardActions, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createVerification } from "../../api/account";
import { useAppDispatch } from "../../app/hooks";
import { snackbarActions } from "../../features/snackbar/snackbarSlice";
import CardForm from "../CardForm";
import CardTitle from "../CardTitle";
import FormikSubmitButton from "../FormikSubmitButton";
import FormikTextField from "../FormikTextField";

type Values = { code: string };
const initialValues: Values = { code: "" };
const otpSchema = Yup.object().shape({
  code: Yup.string().required("Required"),
});

type Props = {};

const OtpCard = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;
  const referenceId = location.state.referenceId;
  const action = location.state.action;

  if (!email || !referenceId || !action) return null;

  const handleSubmit = async (
    { code }: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const res = await createVerification({
        token: "",
        email,
        referenceId,
        action,
        code,
      });
      const data = res.data;

      switch (data.statusCode) {
        case "200":
          dispatch(
            snackbarActions.toast({
              message: "Email successfully verified",
              severity: "success",
            })
          );
          navigate("/login");
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
          message: "Failed to verify code.",
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
        validationSchema={otpSchema}
        onSubmit={handleSubmit}
      >
        <CardForm>
          <CardContent>
            <CardTitle>We've sent a verification code to {email}.</CardTitle>
            <Grid container spacing={4}>
              <Grid xs={12}>
                <FormikTextField
                  id="code"
                  name="code"
                  label="Verification Code"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <FormikSubmitButton>Confirm</FormikSubmitButton>
          </CardActions>
        </CardForm>
      </Formik>
    </Card>
  );
};

export default OtpCard;
