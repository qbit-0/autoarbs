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
      </div>
    </div>
  );
};

export default LoginPage;
