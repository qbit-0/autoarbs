import { useAppSelector } from "../app/hooks";
import { selectBalance } from "../features/account/accountSlice";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

type Props = {};

const Dashboard = (props: Props) => {
  const balance = useAppSelector(selectBalance);

  return (
    <div>
      <div className="container">
        <h1>Dashboard</h1>
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Balance</span>
                <h2>${balance}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Deposit />
          <Withdraw />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
