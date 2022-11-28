import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectBalance } from "../features/account/accountSlice";

type Props = {};

const BalanceCard = (props: Props) => {
  const balance = useAppSelector(selectBalance);

  return (
    <div className="card hoverable">
      <div className="card-content">
        <span className="card-title">Balance</span>
        <h2>${balance}</h2>
      </div>
    </div>
  );
};

export default BalanceCard;
