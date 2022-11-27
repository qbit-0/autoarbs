import { Link } from "react-router-dom";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <div className="container">
        <h1>Dashboard</h1>
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Balance</span>
                <h2>$1000</h2>
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
