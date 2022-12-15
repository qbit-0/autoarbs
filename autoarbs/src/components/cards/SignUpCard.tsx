import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
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

const signUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be at most 32 characters")
    .required("Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Your passwords must match"
  ),
});

type Props = {};

const SignUpCard = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    M.updateTextFields();
  }, []);

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
        default:
          M.toast({ html: data.statusMessage });
          break;
      }
    } catch (err) {
      console.error(err);
      M.toast({ html: "Sign up failed" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="card hoverable">
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        validateOnMount={true}
        onSubmit={handleSubmit}
      >
        {({ isValid, isValidating, isSubmitting }) => (
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
                  type="submit"
                  disabled={isSubmitting || !isValid || isValidating}
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

export default SignUpCard;
