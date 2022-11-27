import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";

type Props = {};

const Registration = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRetype, setPasswordRetype] = useState("");

  useEffect(() => {
    M.updateTextFields();
  }, []);

  const handleTextChange = (setText: Dispatch<SetStateAction<string>>) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.currentTarget.value);
    };
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="col s12">Create an Account</h1>
      </div>
      <div className="row">
        <form className="col s6 offset-s3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="username"
                type="text"
                value={username}
                onChange={handleTextChange(setUsername)}
                className="validate"
              />
              <label htmlFor="username">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">lock</i>
              <input
                id="password"
                type="password"
                value={password}
                onChange={handleTextChange(setPassword)}
                className="validate"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">password</i>
              <input
                id="password-retype"
                type="password"
                value={passwordRetype}
                onChange={handleTextChange(setPasswordRetype)}
                className="validate"
              />
              <label htmlFor="password-retype">Retype Password</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button className="waves-effect waves-light btn">
                Create an Account
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="center">
          <Link to="/login">
            <button className="waves-effect waves-light btn">Or Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
