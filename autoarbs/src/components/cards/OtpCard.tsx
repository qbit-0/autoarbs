import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import axios from "axios";
import { Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";
import { createVerification } from "../../api/account";
import { useAppDispatch } from "../../app/hooks";
import { accountActions } from "../../features/account/accountSlice";
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
      const response = await createVerification({
        token: "",
        email,
        referenceId,
        action,
        code,
      });
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
      if (axios.isAxiosError(error) && error.response?.data) {
        switch (error.response.data.statusCode) {
          default:
            dispatch(
              snackbarActions.toast({
                message: error.response.data.statusMessage,
                severity: "error",
              })
            );
        }
      }
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
          <CardMedia
            image="https://img.freepik.com/premium-vector/flat-design-abstract-background-with-colorful-shapes_23-2149110182.jpg?w=1380"
            sx={{ height: 300 }}
          />
          <CardContent>
            <CardTitle>We've sent a verification code to {email}.</CardTitle>
            <Grid2 container spacing={4}>
              <Grid2 xs={12}>
                <FormikTextField
                  id="code"
                  name="code"
                  label="Verification Code"
                />
              </Grid2>
            </Grid2>
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
