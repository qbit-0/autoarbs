import { ChangeEvent, useEffect, useState } from "react";

type Props = {};

const DepositCard = (props: Props) => {
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
    <div className="card hoverable">
      <form>
        <div className="card-content">
          <div className="row">
            <div className="col s12">
              <span className="card-title">Deposit</span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
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
        </div>
        <div className="card-action">
          <div className="flex justify-end">
            <button className="btn waves-effect waves-light" type="submit">
              Deposit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DepositCard;
