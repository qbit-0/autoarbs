import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../../api/account";
import { useAppDispatch } from "../../app/hooks";
import { accountActions } from "../../features/account/accountSlice";

type Values = { email: string; password: string };
const initialValues: Values = { email: "", password: "" };
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

type Props = {};

const LoginCard = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    M.updateTextFields();
  }, []);

  const handleSubmit = async (
    values: Values,
    { setSubmitting, setStatus }: FormikHelpers<Values>
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
            default:
              setStatus("Login failed, try again later");
              M.toast({ html: "Login failed, try again later" });
              break;
          }
          break;
      }
    } catch (err) {
      console.error(err);
      setStatus("Login failed, try again later");
      M.toast({ html: "Login failed, try again later" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="card hoverable">
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
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
