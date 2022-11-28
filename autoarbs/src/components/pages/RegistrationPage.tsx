import { Link } from "react-router-dom";
import RegistrationCard from "../cards/RegistrationCard";

type Props = {};

const RegistrationPage = (props: Props) => {
  return (
    <div className="valign-wrapper height-full">
      <div className="container">
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <RegistrationCard />
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

export default RegistrationPage;
