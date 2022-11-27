import { ChangeEvent, useEffect, useState } from "react";

type Props = {};

const Deposit = (props: Props) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    M.updateTextFields();
  }, []);

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const parsedNum = Number.parseFloat(e.currentTarget.value);
    const newAmount = Math.max(parsedNum, 0);
    setAmount(newAmount);
  };

  return (
    <div className="col s12 m6">
      <form>
        <div className="card">
          <div className="card-content">
            <span className="card-title">Deposit</span>
            <div className="input-field">
              <input
                className="validate"
                id="amount"
                type="number"
                value={amount}
                onChange={handleChangeAmount}
              />
              <label htmlFor="amount">Amount</label>
            </div>
          </div>
          <div className="card-action">
            <button className="btn waves-effect waves-light" type="submit">
              Deposit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Deposit;
