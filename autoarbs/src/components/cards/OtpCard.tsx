import { Card, CardActions, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import * as Yup from "yup";
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
        <CardForm>
          <CardContent>
            <CardTitle>
              We've sent you a verification code, check your emails.
            </CardTitle>
            <Grid container spacing={4}>
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
        </CardForm>
      </Formik>
    </Card>
  );
};

export default OtpCard;
