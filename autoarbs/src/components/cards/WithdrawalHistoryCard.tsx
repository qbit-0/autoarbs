import React, { useEffect, useState } from "react";
import useAutoUpdateUserData from "../../hooks/useAutoUpdateUserData";

type Props = {};

const WithdrawalHistoryCard = (props: Props) => {
  const userData = useAutoUpdateUserData();
  const [transactionCount, setTransactionCount] = useState(5);

  useEffect(() => {
    M.AutoInit();
    M.updateTextFields();
  }, []);

  if (!userData) return null;

  const withdrawals = userData.withdrawalHistory
    .slice()
    .reverse()
    .slice(-transactionCount);

  const handleShowLess = () => {
    setTransactionCount(transactionCount - 5);
  };

  const handleShowMore = () => {
    setTransactionCount(transactionCount + 5);
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
          <div className="flex justify-end">
            <button
              className="btn waves-effect waves-light"
              disabled={transactionCount <= 5}
              onClick={handleShowLess}
            >
              Show Less
            </button>
            <button
              className="btn waves-effect waves-light"
              disabled={transactionCount > userData.withdrawalHistory.length}
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
