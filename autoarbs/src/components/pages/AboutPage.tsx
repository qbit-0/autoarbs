import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectUserData } from "../../features/account/accountSlice";

type Props = {};

const AboutPage = (props: Props) => {
  const userData = useAppSelector(selectUserData);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1>AutoArbs</h1>
            <h2>Put Money In, Get Money Out. It's That Simple.</h2>
            <p>This is where we explain the app.</p>
          </div>
          {userData ? (
            <div className="row">
              <div className="col s12">
                <div className="card hoverable">
                  <div>
                    <div className="card-content">
                      <span className="card-title">
                        You're already logged in
                      </span>
                    </div>
                    <div className="card-action">
                      <div className="flex justify-center">
                        <Link to="/dashboard">
                          <button className="btn waves-effect waves-light">
                            View Your Dashboard
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col s12 m6">
                <div className="card hoverable">
                  <div>
                    <div className="card-content">
                      <span className="card-title">First time investor?</span>
                      <p>We make it easy.</p>
                    </div>
                    <div className="card-action">
                      <div className="flex justify-center">
                        <Link to="/signup">
                          <button className="btn waves-effect waves-light">
                            Sign Up
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m6">
                <div className="card hoverable">
                  <div>
                    <div className="card-content">
                      <span className="card-title">
                        Already have an account?
                      </span>
                      <p>Let's see your profits.</p>
                    </div>
                    <div className="card-action">
                      <div className="flex justify-center">
                        <Link to="/login">
                          <button className="btn waves-effect waves-light">
                            Login
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
