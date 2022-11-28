import BalanceCard from "../BalanceCard";
import DepositCard from "../DepositCard";
import WithdrawCard from "../WithdrawCard";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <div>
      <div className="container">
        <h1>Dashboard</h1>
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
