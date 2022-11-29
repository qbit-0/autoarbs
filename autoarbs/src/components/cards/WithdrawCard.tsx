import { ChangeEvent, useState } from "react";

type Props = {};

const balance = 1000;

const WithdrawCard = (props: Props) => {
  const [amount, setAmount] = useState(0);

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const parsedNum = Number.parseFloat(e.currentTarget.value);
    const newAmount = Math.min(Math.max(parsedNum, 0), balance);
    setAmount(newAmount);
  };

  return (
    <div className="card hoverable">
      <form>
        <div className="card-content">
          <div className="row">
            <div className="col s12">
              <span className="card-title">Withdraw</span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
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
        </div>
        <div className="card-action">
          <div className="flex justify-end">
            <button
              className="btn waves-effect waves-light green"
              type="submit"
            >
              Withdraw
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WithdrawCard;
