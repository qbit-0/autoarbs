import { Card, CardActions, CardContent, MenuItem } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import axios from "axios";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { createWithdrawal, readUserByToken } from "../../api/account";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  accountActions,
  selectToken,
} from "../../features/account/accountSlice";
import { snackbarActions } from "../../features/snackbar/snackbarSlice";
import useAutoUpdateUserData from "../../hooks/useAutoUpdateUserData";
import CardForm from "../CardForm";
import CardTitle from "../CardTitle";
import FormikSubmitButton from "../FormikSubmitButton";
import FormikTextField from "../FormikTextField";

type Values = { amount: number; method: string; accountWithdrawnTo: string };
const methodOptions = ["method0", "method1", "method2"];

const initialValues = {
  amount: 0,
  method: methodOptions[0],
  accountWithdrawnTo: "",
};

type Props = {};

const WithdrawCard = (props: Props) => {
  const userData = useAutoUpdateUserData();
  const token = useAppSelector(selectToken);

  const dispatch = useAppDispatch();

  if (!userData || !token) return null;
  const email = userData.email;

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

  const updateUserData = async () => {
    try {
      const response = await readUserByToken({ email, token });
      dispatch(
        accountActions.login({
          userData: response.data.userData,
          token: token,
        })
      );
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        switch (error.response.data.statusCode) {
          default:
            dispatch(
              snackbarActions.toast({
                message: error.response.data.statusMessage,
                severity: "error",
              })
            );
            break;
        }
      }
    }
  };

  const handleSubmit = async (
    { amount, method, accountWithdrawnTo }: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const response = await createWithdrawal({
        token,
        email,
        amount,
        method,
        accountWithdrawnTo,
      });

      dispatch(
        snackbarActions.toast({
          message: response.data.statusMessage,
          severity: "success",
        })
      );
      dispatch(accountActions.withdraw(amount));
      updateUserData();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        switch (error.response.data.statusCode) {
          default:
            dispatch(
              snackbarActions.toast({
                message: error.response.data.statusMessage,
                severity: "error",
              })
            );
            break;
        }
      }
    }

    setSubmitting(false);
  };

  return (
    <Card>
      <Formik
        initialValues={initialValues}
        validationSchema={withdrawSchema}
        onSubmit={handleSubmit}
      >
        <CardForm>
          <CardContent>
            <CardTitle>Withdraw</CardTitle>
            <Grid2 container spacing={4}>
              <Grid2 xs={12}>
                <FormikTextField
                  type="number"
                  id="amount"
                  name="amount"
                  label="Amount"
                />
              </Grid2>
              <Grid2 xs={12}>
                <FormikTextField
                  id="method"
                  name="method"
                  label="Method"
                  select
                >
                  <MenuItem value="method0">Method 0</MenuItem>
                  <MenuItem value="method1">Method 1</MenuItem>
                  <MenuItem value="method2">Method 2</MenuItem>
                </FormikTextField>
              </Grid2>
              <Grid2 xs={12}>
                <FormikTextField
                  id="accountWithdrawnTo"
                  name="accountWithdrawnTo"
                  label="Acount Withdrawn To"
                  select
                />
              </Grid2>
            </Grid2>
          </CardContent>
          <CardActions>
            <FormikSubmitButton>Next</FormikSubmitButton>
          </CardActions>
        </CardForm>
      </Formik>
    </Card>
  );
};

export default WithdrawCard;
