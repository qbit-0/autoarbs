import { Link } from "react-router-dom";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1>AutoArbs</h1>
            <h2>Put Money In, Get Money Out. It's That Simple.</h2>
            <p>This is where we explain the app.</p>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <div className="card hoverable">
                <div>
                  <div className="card-content">
                    <span className="card-title">First time investor?</span>
                    <p>We make it easy.</p>
                  </div>
                  <div className="card-action">
                    <div className="flex justify-end">
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
                    <span className="card-title">Already have an account?</span>
                    <p>Let's see your profits.</p>
                  </div>
                  <div className="card-action">
                    <div className="flex justify-end">
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
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
