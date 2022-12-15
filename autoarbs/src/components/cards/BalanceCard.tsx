import { useAppSelector } from "../../app/hooks";
import { selectUserData } from "../../features/account/accountSlice";

type Props = {};

const BalanceCard = (props: Props) => {
  const userData = useAppSelector(selectUserData);

  if (!userData) return null;

  const balance = userData?.balance;
  const deposited = userData.totalDeposit;
  const withdrawn = userData.totalWithdrawal;

  const profit = balance + withdrawn - deposited;
  const profitPercent = deposited === 0 ? 0 : (profit / deposited) * 100;

  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Balance</span>
        <div className="row">
          <div className="col s12">
            <h3>${balance}</h3>
          </div>
        </div>
        <div className="row divider" />
        <div className="row">
          <div className="col s12 m4">
            <p className="red-text">Total Deposited</p>
            <h3 className="red-text">${deposited}</h3>
          </div>
          <div className="col s12 m4">
            <p className="green-text">Total Withdrawn</p>
            <h3 className="green-text">${withdrawn}</h3>
          </div>
          <div className="col s12 m4">
            <p className="blue-text">Total Profit</p>
            <h3 className="blue-text">
              ${profit} ({profitPercent.toFixed(2)}%)
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
