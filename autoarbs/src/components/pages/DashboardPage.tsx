import { useAppSelector } from "../../app/hooks";
import { selectUserData } from "../../features/account/accountSlice";
import BalanceCard from "../cards/BalanceCard";
import DepositCard from "../cards/DepositCard";
import WithdrawCard from "../cards/WithdrawCard";

type Props = {};

const DashboardPage = (props: Props) => {
  const userData = useAppSelector(selectUserData);

  if (!userData) return null;

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
