import { useEffect, useState } from "react";
import useAutoUpdateUserData from "../../hooks/useAutoUpdateUserData";

type Props = {};

const WithdrawalHistoryCard = (props: Props) => {
  const userData = useAutoUpdateUserData();
  const [numTransactions, setNumTransactions] = useState(5);

  useEffect(() => {
    M.AutoInit();
    M.updateTextFields();
  }, []);

  if (!userData) return null;

  const withdrawals = userData.withdrawalHistory
    .slice()
    .reverse()
    .slice(-numTransactions);

  const handleShowLess = () => {
    setNumTransactions(numTransactions - 5);
  };

  const handleShowMore = () => {
    setNumTransactions(numTransactions + 5);
  };

  return (
    <div className="card hoverable">
      <div>
        <div className="card-content">
          <span className="card-title">Withdrawals</span>
          <table>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Date</th>
                <th>Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {withdrawals.map((deposit) => (
                <tr>
                  <td>${deposit.amount}</td>
                  <td>{deposit.createdAt}</td>
                  <td>{deposit.method}</td>
                  <td>{deposit.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-action">
          <div className="flex justify-end align-center">
            <p>Showing {withdrawals.length} transactions.</p>
            <button
              className="btn waves-effect waves-light"
              disabled={numTransactions <= 5}
              onClick={handleShowLess}
            >
              Show Less
            </button>
            <button
              className="btn waves-effect waves-light"
              disabled={numTransactions >= userData.withdrawalHistory.length}
              onClick={handleShowMore}
            >
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalHistoryCard;
