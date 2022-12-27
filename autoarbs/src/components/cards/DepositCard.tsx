import { Card, MenuItem } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Unstable_Grid2";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { createDeposit, readUserByToken } from "../../api/account";
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

type Values = { amount: number; method: string };
const methodOptions = ["method0", "method1", "method2"];

const initialValues = { amount: 0, method: methodOptions[0] };

const depositSchema = Yup.object().shape({
  amount: Yup.number()
    .positive("Deposit amount must be positive")
    .required("Required"),
  method: Yup.string()
    .oneOf(methodOptions, "Method not recognized")
    .required("Required"),
});

type Props = {};

const DepositCard = (props: Props) => {
  const userData = useAutoUpdateUserData();
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();

  if (!userData || !token) return null;

  const email = userData.email;

  const handleSubmit = async (
    { amount, method }: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const res = await createDeposit({ token, email, amount, method });
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
          dispatch(accountActions.deposit(amount));

          try {
            const res = await readUserByToken({ email, token });
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
      console.log(err);
      dispatch(
        snackbarActions.toast({
          message: "Deposit failed",
          severity: "error",
        })
      );
    }

    setSubmitting(false);
  };

  return (
    <Card>
      <Formik
        initialValues={initialValues}
        validationSchema={depositSchema}
        onSubmit={handleSubmit}
      >
        <CardForm>
          <CardContent>
            <CardTitle>Deposit</CardTitle>
            <Grid container spacing={4}>
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
            </Grid>
          </CardContent>
          <CardActions>
            <FormikSubmitButton>Next</FormikSubmitButton>
          </CardActions>
        </CardForm>
      </Formik>
    </Card>
  );
};

export default DepositCard;
