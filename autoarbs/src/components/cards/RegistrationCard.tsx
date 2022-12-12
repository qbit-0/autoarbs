import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/account";
import { useAppDispatch } from "../../app/hooks";
import { accountActions } from "../../features/account/accountSlice";

type Props = {};

const RegistrationCard = (props: Props) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRetype, setPasswordRetype] = useState("");

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
    if (!userName || !password || password !== passwordRetype) return;

    const res = await register(firstName, lastName, userName, email, password);
    const data = res.data;

    console.log(data);

    switch (data.statusCode) {
      case "201":
        dispatch(accountActions.login(data.userData));
        navigate("/dashboard");
        break;
      case "400":
        break;
    }
  };

  return (
    <div className="card hoverable">
      <form className="" onSubmit={handleSubmit}>
        <div className="card-content">
          <span className="card-title center">Create an Account</span>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="text"
                value={email}
                onChange={handleTextChange(setEmail)}
                className="validate"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 m6">
              <input
                id="firstname"
                type="text"
                value={firstName}
                onChange={handleTextChange(setFirstName)}
                className="validate"
              />
              <label htmlFor="firstname">First Name</label>
            </div>
            <div className="input-field col s12 m6">
              <input
                id="lastname"
                type="text"
                value={lastName}
                onChange={handleTextChange(setLastName)}
                className="validate"
              />
              <label htmlFor="lastname">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="username"
                type="text"
                value={userName}
                onChange={handleTextChange(setUserName)}
                className="validate"
              />
              <label htmlFor="username">Username</label>
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
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password-retype"
                type="password"
                value={passwordRetype}
                onChange={handleTextChange(setPasswordRetype)}
                className="validate"
              />
              <label htmlFor="password-retype">Retype Password</label>
              {password !== passwordRetype && (
                <span className="helper-text">password does not match</span>
              )}
            </div>
          </div>
        </div>
        <div className="card-action">
          <div className="flex justify-end">
            <button className="btn waves-effect waves-light">Next</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationCard;
