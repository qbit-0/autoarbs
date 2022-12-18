import { Form, Formik, FormikHelpers } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { readUser, createUser, createLogin } from "../../api/account";
import { useAppDispatch } from "../../app/hooks";
import { accountActions } from "../../features/account/accountSlice";
import MaterializeErrorMessage from "../MaterializeErrorMessage";
import MaterializeField from "../MaterializeField";

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
  email: Yup.string()
    .email("Invalid email")
    .test(
      "is-email-available",
      () => "Email is already in use",
      async (value) => {
        if (!value) return true;

        try {
          const res = await readUser(value);
          const data = res.data;
          return !data;
        } catch (e) {
          console.error(e);
          return false;
        }
      }
    )
    .required("Required"),
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
    M.AutoInit();
    M.updateTextFields();
  }, []);

  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const registerRes = await createUser(
        values.email,
        values.firstName,
        values.lastName,
        values.password
      );
      const registerData = registerRes.data;

      switch (registerData.statusCode) {
        case "201":
          try {
            const loginRes = await createLogin(values.email, values.password);
            const loginData = loginRes.data;

            switch (loginData.statusCode) {
              case "200":
                dispatch(
                  accountActions.login({
                    userData: loginData.userData,
                    token: loginData.token,
                  })
                );
                navigate("/dashboard");
                break;
              default:
                switch (loginData.statusMessage) {
                  default:
                    M.toast({ html: loginData.statusMessage });
                    break;
                }
                break;
            }
          } catch (e) {
            console.error(e);
            M.toast({ html: "Login failed" });
          }
          break;
        default:
          M.toast({ html: registerData.statusMessage });
          break;
      }
    } catch (e) {
      console.error(e);
      M.toast({ html: "Sign up failed" });
    }

    setSubmitting(false);
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
                  <MaterializeField type="email" name="email" />
                  <label htmlFor="email">Email</label>
                  <MaterializeErrorMessage name="email" />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m6">
                  <MaterializeField type="text" name="firstName" />
                  <label htmlFor="firstName">First Name</label>
                  <MaterializeErrorMessage name="firstName" />
                </div>
                <div className="input-field col s12 m6">
                  <MaterializeField type="text" name="lastName" />
                  <label htmlFor="lastName">Last Name</label>
                  <MaterializeErrorMessage name="lastName" />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <MaterializeField type="password" name="password" />
                  <label htmlFor="password">Password</label>
                  <MaterializeErrorMessage name="password" />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <MaterializeField type="password" name="confirmPassword" />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <MaterializeErrorMessage name="confirmPassword" />
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
