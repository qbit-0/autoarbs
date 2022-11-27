import { useEffect } from "react";

type Props = {};

const WithdrawCard = (props: Props) => {
  useEffect(() => {
    M.updateTextFields();
  }, []);

  return (
    <div className="col s12 m6">
      <form>
        <div className="card">
          <div className="card-content">
            <span className="card-title">Withdraw</span>
            <div className="input-field">
              <input id="amount" type="number" className="validate" />
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
