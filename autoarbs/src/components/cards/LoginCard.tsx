import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormikErrors, FormikHelpers } from "formik/dist/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/account";
import { useAppDispatch } from "../../app/hooks";
import { accountActions } from "../../features/account/accountSlice";

type Values = { email: string; password: string };
const initialValues: Values = { email: "", password: "" };

type Props = {};

const LoginCard = (props: Props) => {
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

    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };

  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const res = await login(values.email, values.password);
      const data = res.data;

      console.log(data);

      switch (data.statusCode) {
        case "200":
          dispatch(accountActions.login(data.userData));
          navigate("/dashboard");
          break;
        case "400":
          switch (data.statusMessage) {
            case "":
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
              <span className="card-title center">Log In</span>
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
            </div>
            <div className="card-action">
              <div className="flex justify-end">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
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

export default LoginCard;
