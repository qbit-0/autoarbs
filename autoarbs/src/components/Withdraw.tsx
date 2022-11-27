import { ChangeEvent, useEffect, useState } from "react";

type Props = {};

const balance = 1000;

const WithdrawCard = (props: Props) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    M.updateTextFields();
  }, []);

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const parsedNum = Number.parseFloat(e.currentTarget.value);
    const newAmount = Math.min(Math.max(parsedNum, 0), balance);
    setAmount(newAmount);
  };

  return (
    <div className="col s12 m6">
      <form>
        <div className="card">
          <div className="card-content">
            <span className="card-title">Withdraw</span>
            <div className="input-field">
              <input
                className="validate"
                id="amount"
                type="number"
                min={0}
                max={balance}
                value={amount}
                onChange={handleChangeAmount}
              />
              <label htmlFor="amount">Amount</label>
            </div>
          </div>
          <div className="card-action">
            <button className="btn waves-effect waves-light" type="submit">
              Withdraw
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WithdrawCard;
