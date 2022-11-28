import RegistrationCard from "../RegistrationCard";

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
      </div>
    </div>
  );
};

export default RegistrationPage;
