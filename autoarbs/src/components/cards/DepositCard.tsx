import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { accountActions } from "../../features/account/accountSlice";

type Props = {};

const DepositCard = (props: Props) => {
  const [amount, setAmount] = useState<number>();
  const amountInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    M.updateTextFields();
  }, []);

  const handleCardClick = () => {
    amountInputRef.current?.focus();
  };

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const parsedNum = Number.parseFloat(e.currentTarget.value);
    const newAmount = Math.max(parsedNum, 0);
    setAmount(newAmount);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(accountActions.deposit(amount));
  };

  return (
    <div className="card hoverable pointer" onClick={handleCardClick}>
      <form onSubmit={handleSubmit}>
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
                ref={amountInputRef}
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
