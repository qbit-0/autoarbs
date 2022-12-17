import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  accountActions,
  selectUserData,
} from "../../features/account/accountSlice";
import MaterializeErrorMessage from "../MaterializeErrorMessage";
import MaterializeField from "../MaterializeField";

type Values = { amount: number };
const initialValues = { amount: 0 };

type Props = {};

const WithdrawCard = (props: Props) => {
  const userData = useAppSelector(selectUserData);

  const dispatch = useAppDispatch();

  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    dispatch(accountActions.deposit(values.amount));
    setSubmitting(false);
  };

  if (!userData) return null;

  const withdrawSchema = Yup.object().shape({
    balance: Yup.number(),
    amount: Yup.number()
      .positive("Withdraw amount must be positive")
      .max(userData.balance, "Withdraw amount is at most your balance")
      .required("Required"),
  });

  return (
    <div className="card hoverable">
      <Formik
        initialValues={initialValues}
        validationSchema={withdrawSchema}
        validateOnMount={true}
        onSubmit={handleSubmit}
      >
        {({ isValid, isValidating, isSubmitting }) => (
          <Form>
            <div className="card-content">
              <div className="row">
                <div className="col s12">
                  <span className="card-title">Withdraw</span>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <MaterializeField type="number" id="amount" name="amount" />
                  <label htmlFor="amount">Amount</label>
                  <MaterializeErrorMessage name="amount" />
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
                  Withdraw
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default WithdrawCard;
