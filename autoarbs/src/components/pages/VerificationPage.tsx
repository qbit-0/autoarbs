import OtpCard from "../cards/OtpCard";

type Props = {};

const VerificationPage = (props: Props) => {
  return (
    <div className="valign-wrapper height-full">
      <div className="container">
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <OtpCard />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="btn-flat waves-effect waves-light">
            Didn't get the email? Click here to send another.
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
