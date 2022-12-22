import DepositHistoryCard from "../cards/DepositHistoryCard";
import WithdrawalHistoryCard from "../cards/WithdrawalHistoryCard";

type Props = {};

const HistoryPage = (props: Props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1>Transaction History</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <DepositHistoryCard />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <WithdrawalHistoryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
