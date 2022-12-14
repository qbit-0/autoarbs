import { Link } from "react-router-dom";
import SignUpCard from "../cards/SignUpCard";

type Props = {};

const SignUpPage = (props: Props) => {
  return (
    <div className="valign-wrapper height-full">
      <div className="container">
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <SignUpCard />
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/login">
            <button className="btn-flat waves-effect waves-light">
              Or Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
