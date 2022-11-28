import React from "react";
import { useAppSelector } from "../app/hooks";
import {
  selectBalance,
  selectDeposited,
  selectWithdrawn,
} from "../features/account/accountSlice";

type Props = {};

const BalanceCard = (props: Props) => {
  const balance = useAppSelector(selectBalance);
  const deposited = useAppSelector(selectDeposited);
  const withdrawn = useAppSelector(selectWithdrawn);

  const profit = balance + withdrawn - deposited;
  const profitPercent = (profit / deposited) * 100;

  return (
    <div className="card hoverable">
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
            <p>Total Deposited</p>
            <h3>${deposited}</h3>
          </div>
          <div className="col s12 m4">
            <p>Total Withdrawn</p>
            <h3>${withdrawn}</h3>
          </div>
          <div className="col s12 m4">
            <p>Total Profit</p>
            <h3>
              ${profit} ({profitPercent}%)
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
