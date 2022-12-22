import { useEffect } from "react";
import { readUserByToken } from "../../api/account";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  accountActions,
  selectToken,
  selectUserData,
} from "../../features/account/accountSlice";
import BalanceCard from "../cards/BalanceCard";
import DepositCard from "../cards/DepositCard";
import WithdrawCard from "../cards/WithdrawCard";

type Props = {};

const DashboardPage = (props: Props) => {
  const userData = useAppSelector(selectUserData);
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!userData || !token) return;

    const intervalId = setInterval(async () => {
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
        }
      } catch (err) {
        console.error(err);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [userData, token, dispatch]);

  if (!userData || !token) return null;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1>Hello, {userData.firstName}.</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <BalanceCard />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <DepositCard />
          </div>
          <div className="col s12 m6">
            <WithdrawCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
