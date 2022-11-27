import { useEffect } from "react";

type Props = {};

const Deposit = (props: Props) => {
  useEffect(() => {
    M.updateTextFields();
  }, []);

  return (
    <div className="col s12 m6">
      <form>
        <div className="card">
          <div className="card-content">
            <span className="card-title">Deposit</span>
            <div className="input-field">
              <input id="amount" type="number" className="validate" />
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
