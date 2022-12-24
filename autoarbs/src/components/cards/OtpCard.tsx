import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import Grid from "@mui/material/Unstable_Grid2";
import * as Yup from "yup";
import FormikTextField from "../FormikTextField";
import FormikSubmitButton from "../FormikSubmitButton";

type Values = { code: string };
const initialValues: Values = { code: "" };
const otpSchema = Yup.object().shape({
  code: Yup.string().required("Required"),
});

type Props = {};

const OtpCard = (props: Props) => {
  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    setSubmitting(false);
  };

  return (
    <Card>
      <Formik
        initialValues={initialValues}
        validationSchema={otpSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <CardContent>
            <Grid container spacing={4}>
              <Grid xs={12}>
                <Typography variant="h3">
                  We've sent you a verification code, check your emails.
                </Typography>
              </Grid>
              <Grid xs={12}>
                <FormikTextField
                  id="otp"
                  name="otp"
                  label="Verification Code"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <FormikSubmitButton>Confirm</FormikSubmitButton>
          </CardActions>
        </Form>
      </Formik>
    </Card>
  );
};

export default OtpCard;
