import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  accountActions,
  selectBalance,
} from "../../features/account/accountSlice";

type Props = {};

const WithdrawCard = (props: Props) => {
  const balance = useAppSelector(selectBalance);

  const [amount, setAmount] = useState<number>();
  const amountInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const handleCardClick = () => {
    amountInputRef.current?.focus();
  };

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const parsedNum = Number.parseFloat(e.currentTarget.value);
    const newAmount = Math.min(Math.max(parsedNum, 0), balance);
    setAmount(newAmount);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(accountActions.withdraw(amount));
  };

  return (
    <div className="card hoverable pointer" onClick={handleCardClick}>
      <form onSubmit={handleSubmit}>
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
                ref={amountInputRef}
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
