import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { accountActions } from "../../features/account/accountSlice";

type Props = {};

const LoginCard = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    if (username && password) {
      dispatch(accountActions.login(username));
      navigate("/dashboard");
    }
  };

  return (
    <div className="card hoverable">
      <form onSubmit={handleSubmit}>
        <div className="card-content">
          <span className="card-title center">Log In</span>
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
        </div>
        <div className="card-action">
          <div className="flex justify-end">
            <button className="btn waves-effect waves-light" type="submit">
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
