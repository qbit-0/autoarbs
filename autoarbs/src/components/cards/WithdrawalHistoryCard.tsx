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
    .sort((a, b) => {
      const aDate = new Date(a.createdAt);
      const bDate = new Date(b.createdAt);
      if (aDate < bDate) {
        return 1;
      } else if (aDate > bDate) {
        return -1;
      } else {
        return 0;
      }
    })
    .slice(0, numTransactions);

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
              {withdrawals.map((withdrawal) => (
                <tr>
                  <td>${withdrawal.amount}</td>
                  <td>{new Date(withdrawal.createdAt).toLocaleString()}</td>
                  <td>{withdrawal.createdAt}</td>
                  <td>{withdrawal.method}</td>
                  <td>{withdrawal.status}</td>
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
