import { useEffect } from "react";
import { readUserByToken } from "../../api/account";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  accountActions,
  selectToken,
  selectUserData,
} from "../../features/account/accountSlice";

type Props = {};

const HistoryPage = (props: Props) => {
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

  type Deposit = {
    type: "Deposit";
    amount: number;
    date: string;
    method: string;
  };
  type Withdrawal = {
    type: "Withdrawal";
    amount: number;
    date: string;
    method: string;
  };
  type Transaction = Deposit | Withdrawal;
  const transactions: Transaction[] = [
    {
      type: "Deposit",
      amount: 100,
      date: "12/22/2022",
      method: "Method 0",
    },
    {
      type: "Withdrawal",
      amount: 10,
      date: "12/23/2022",
      method: "Method 1",
    },
    {
      type: "Deposit",
      amount: 20,
      date: "12/24/2022",
      method: "Method 3",
    },
  ];

  const transactionCards = transactions.map((transaction) => (
    <div className="card">
      <div className="card-content">
        <span className="card-title">{transaction.type}</span>
        <div className="row">
          <div className="col s4">
            <p>${transaction.amount}</p>
          </div>
          <div className="col s4">
            <p>{transaction.date}</p>
          </div>
          <div className="col s4">
            <p>{transaction.method}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1>Transaction History</h1>
          </div>
        </div>
        {transactionCards.map((card) => (
          <div className="row">
            <div className="col s12">{card}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
