import { Form, Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createLogin } from "../../api/account";
import { useAppDispatch } from "../../app/hooks";
import { accountActions } from "../../features/account/accountSlice";
import MaterializeErrorMessage from "../MaterializeErrorMessage";
import MaterializeField from "../MaterializeField";

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

  useEffect(() => {
    M.AutoInit();
    M.updateTextFields();
  }, []);

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
          navigate("/dashboard");
          break;
        default:
          switch (data.statusMessage) {
            default:
              M.toast({ html: data.statusMessage });
              break;
          }
          break;
      }
    } catch (err) {
      console.error(err);
      M.toast({ html: "Login failed" });
    }

    setSubmitting(false);
  };

  return (
    <div className="card hoverable">
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {({ isValid, isValidating, isSubmitting }) => (
          <Form>
            <div className="card-content">
              <span className="card-title center">Log In</span>
              <div className="row">
                <div className="input-field col s12">
                  <MaterializeField type="email" name="email" />
                  <label htmlFor="email">Email</label>
                  <MaterializeErrorMessage name="email" />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <MaterializeField type="password" name="password" />
                  <label htmlFor="password">Password</label>
                  <MaterializeErrorMessage name="password" />
                </div>
              </div>
            </div>
            <div className="card-action">
              <div className="flex justify-end">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  disabled={isSubmitting || isValidating}
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
