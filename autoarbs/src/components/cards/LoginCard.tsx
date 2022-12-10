import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { getDeposit, login } from "../../api/account";
import { useAppDispatch } from "../../app/hooks";
import { accountActions } from "../../features/account/accountSlice";

type Props = {};

const LoginCard = (props: Props) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!usernameOrEmail || !password) return;

    // const res = await login(usernameOrEmail, password);
    // console.log(res);

    fetch(`https://autoarbs.herokuapp.com/api/auth/login`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName: "qbit", password: "asdfasdf" }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // const data = res.data;

    // switch (data.statusCode) {
    //   case 200:
    //     dispatch(accountActions.login(usernameOrEmail));
    //     navigate("/dashboard");
    //     break;
    //   case 400:
    //     break;
    // }

    // const res = await getDeposit();
    // console.log(res);
  };

  return (
    <div className="card hoverable">
      <form onSubmit={handleSubmit}>
        <div className="card-content">
          <span className="card-title center">Log In</span>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="username_or_email"
                type="text"
                value={usernameOrEmail}
                onChange={handleTextChange(setUsernameOrEmail)}
                className="validate"
              />
              <label htmlFor="username_or_email">Username or Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
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
