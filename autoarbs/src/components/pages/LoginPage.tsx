import { Link } from "react-router-dom";
import LoginCard from "../LoginCard";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="valign-wrapper height-full">
      <div className="container">
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <LoginCard />
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/registration">
            <button className="btn-flat waves-effect waves-light">
              Or Create an Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
