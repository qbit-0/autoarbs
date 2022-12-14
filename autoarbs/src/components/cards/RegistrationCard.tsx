import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { FormikErrors } from "formik/dist/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/account";
import { useAppDispatch } from "../../app/hooks";
import { accountActions } from "../../features/account/accountSlice";

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

type Props = {};

const RegistrationCard = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    M.updateTextFields();
  }, []);

  const validate = (values: Values) => {
    const errors: FormikErrors<Values> = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.firstName) {
      errors.firstName = "Required";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8 || values.password.length > 32) {
      errors.password = "Password length must be between 8 and 32 characters";
    }

    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const res = await register(
        values.email,
        values.firstName,
        values.lastName,
        values.password
      );
      console.log(res);
      const data = res.data;

      switch (data.statusCode) {
        case "201":
          dispatch(accountActions.login(data.userData));
          navigate("/dashboard");
          break;
        case "400":
          switch (data.statusMessage) {
            case "Email is not available":
              break;
          }
          break;
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="card hoverable">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="card-content">
              <span className="card-title center">Create an Account</span>
              <div className="row">
                <div className="input-field col s12">
                  <Field type="email" id="email" name="email" />
                  <label htmlFor="email">Email</label>
                  <ErrorMessage
                    className="helper-text"
                    name="email"
                    component="span"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m6">
                  <Field type="text" id="firstName" name="firstName" />
                  <label htmlFor="firstName">First Name</label>
                  <ErrorMessage
                    className="helper-text"
                    name="firstName"
                    component="span"
                  />
                </div>
                <div className="input-field col s12 m6">
                  <Field type="text" id="lastName" name="lastName" />
                  <label htmlFor="lastName">Last Name</label>
                  <ErrorMessage
                    className="helper-text"
                    name="lastName"
                    component="span"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <Field type="password" id="password" name="password" />
                  <label htmlFor="password">Password</label>
                  <ErrorMessage
                    className="helper-text"
                    name="password"
                    component="span"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                  />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <ErrorMessage
                    className="helper-text"
                    name="confirmPassword"
                    component="span"
                  />
                </div>
              </div>
            </div>
            <div className="card-action">
              <div className="flex justify-end">
                <button
                  className="btn waves-effect waves-light"
                  disabled={isSubmitting}
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

export default RegistrationCard;
