import { Form, Formik, FormikHelpers } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import { createWithdrawal } from "../../api/account";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  accountActions,
  selectToken,
  selectUserData,
} from "../../features/account/accountSlice";
import MaterializeErrorMessage from "../MaterializeErrorMessage";
import MaterializeField from "../MaterializeField";

type Values = { amount: number; method: string; accountWithdrawnTo: string };
const methodOptions = ["method0", "method1", "method2"];

const initialValues = {
  amount: 0,
  method: methodOptions[0],
  accountWithdrawnTo: "",
};

type Props = {};

const WithdrawCard = (props: Props) => {
  const token = useAppSelector(selectToken);
  const userData = useAppSelector(selectUserData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    M.AutoInit();
    M.updateTextFields();
  }, []);

  if (!token || !userData) return null;

  const withdrawSchema = Yup.object().shape({
    balance: Yup.number(),
    amount: Yup.number()
      .positive("Withdraw amount must be positive")
      .max(userData.balance, "Withdraw amount is at most your balance")
      .required("Required"),
    method: Yup.string()
      .oneOf(methodOptions, "Method not recognized")
      .required("Required"),
    accountWithdrawnTo: Yup.string().required("Required"),
  });

  const handleSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const res = await createWithdrawal(
        token,
        userData.email,
        values.amount,
        values.method,
        values.accountWithdrawnTo
      );
      console.log(res);
      const data = res.data;

      switch (data.statusCode) {
        case "201":
          M.toast({ html: data.statusMessage });
          dispatch(accountActions.withdraw(values.amount));
          break;
        default:
          M.toast({ html: data.statusMessage });
          break;
      }
    } catch (e) {
      console.log(e);
    }

    setSubmitting(false);
  };

  return (
    <div className="card hoverable">
      <Formik
        initialValues={initialValues}
        validationSchema={withdrawSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid, isValidating, isSubmitting }) => (
          <Form>
            <div className="card-content">
              <div className="row">
                <div className="col s12">
                  <span className="card-title">Withdraw</span>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <MaterializeField type="number" name="amount" />
                  <label htmlFor="amount">Amount</label>
                  <MaterializeErrorMessage name="amount" />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <MaterializeField as="select" name="method">
                    <option value="method0">Method 0</option>
                    <option value="method1">Method 1</option>
                    <option value="method2">Method 2</option>
                  </MaterializeField>
                  <label htmlFor="method">Method</label>
                  <MaterializeErrorMessage name="method" />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <MaterializeField type="text" name="accountWithdrawnTo" />
                  <label htmlFor="accountWithdrawnTo">
                    Account Withdrawn To
                  </label>
                  <MaterializeErrorMessage name="accountWithdrawnTo" />
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
