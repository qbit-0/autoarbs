import { Form, Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import { useEffect } from "react";
import * as Yup from "yup";
import MaterializeErrorMessage from "../MaterializeErrorMessage";
import MaterializeField from "../MaterializeField";

type Values = { code: string };
const initialValues: Values = { code: "" };
const otpSchema = Yup.object().shape({
  code: Yup.string().required("Required"),
});

type Props = {};

const OtpCard = (props: Props) => {
  useEffect(() => {
    M.AutoInit();
    M.updateTextFields();
  }, []);

  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    setSubmitting(false);
  };

  return (
    <div className="card hoverable">
      <Formik
        initialValues={initialValues}
        validationSchema={otpSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid, isValidating, isSubmitting }) => (
          <Form>
            <div className="card-content">
              <span className="card-title center">
                We've sent you a verification code, check your emails.
              </span>
              <div className="row">
                <div className="input-field col s12">
                  <MaterializeField type="text" name="code" />
                  <label htmlFor="code">Code</label>
                  <MaterializeErrorMessage name="code" />
                </div>
              </div>
            </div>
            <div className="card-action">
              <div className="flex justify-end">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  disabled={isSubmitting || !dirty || !isValid || isValidating}
                >
                  Next
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OtpCard;
