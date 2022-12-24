import {
  Card,
  CardActions,
  CardContent,
  MenuItem,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { createWithdrawal, readUserByToken } from "../../api/account";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  accountActions,
  selectToken,
  selectUserData,
} from "../../features/account/accountSlice";
import { snackbarActions } from "../../features/snackbar/snackbarSlice";
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
  const token = useAppSelector(selectToken);
  const userData = useAppSelector(selectUserData);

  const dispatch = useAppDispatch();

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
          dispatch(
            snackbarActions.toast({
              message: data.statusMessage,
              severity: "success",
            })
          );
          dispatch(accountActions.withdraw(values.amount));

          try {
            const res = await readUserByToken(userData.email, token);
            const data = res.data;
            switch (data.statusCode) {
              case "200":
                dispatch(
                  accountActions.login({
                    userData: data.userData,
                    token: token,
                  })
                );
                break;
              default:
                break;
            }
          } catch (err) {
            console.error(err);
          }
          break;
        default:
          dispatch(
            snackbarActions.toast({
              message: data.statusMessage,
              severity: "error",
            })
          );
          break;
      }
    } catch (err) {
      console.error(err);
      dispatch(
        snackbarActions.toast({ message: "Withdraw failed", severity: "error" })
      );
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
        <Form>
          <CardContent>
            <Grid container spacing={4}>
              <Grid xs={12}>
                <Typography variant="h3">Withdraw</Typography>
              </Grid>
              <Grid xs={12}>
                <FormikTextField
                  type="number"
                  id="amount"
                  name="amount"
                  label="Amount"
                />
              </Grid>
              <Grid xs={12}>
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
              </Grid>
              <Grid xs={12}>
                <FormikTextField
                  id="accountWithdrawnTo"
                  name="accountWithdrawnTo"
                  label="Acount Withdrawn To"
                  select
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <FormikSubmitButton>Next</FormikSubmitButton>
          </CardActions>
        </Form>
      </Formik>
    </Card>
  );
};

export default WithdrawCard;
