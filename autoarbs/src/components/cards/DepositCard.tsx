import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import { useAppDispatch } from "../../app/hooks";
import { accountActions } from "../../features/account/accountSlice";

type Values = { amount: number };
const initialValues = { amount: 100 };
const depositSchema = Yup.object().shape({
  amount: Yup.number()
    .positive("Deposit amount must be positive")
    .required("Required"),
});

type Props = {};

const DepositCard = (props: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    M.updateTextFields();
  }, []);

  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    dispatch(accountActions.deposit(values.amount));
    setSubmitting(false);
  };

  return (
    <div className="card hoverable">
      <Formik
        initialValues={initialValues}
        validationSchema={depositSchema}
        validateOnMount={true}
        onSubmit={handleSubmit}
      >
        {({ isValid, isValidating, isSubmitting }) => (
          <Form>
            <div className="card-content">
              <div className="row">
                <div className="col s12">
                  <span className="card-title">Deposit</span>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <Field type="number" id="amount" name="amount" />
                  <label htmlFor="amount">Amount</label>
                  <ErrorMessage
                    className="helper-text"
                    name="amount"
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
                  Deposit
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DepositCard;
