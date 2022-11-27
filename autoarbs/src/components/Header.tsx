import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

type Props = {};

const Header = (props: Props) => {
  useEffect(() => {}, []);

  const navLinks = (
    <>
      <NavLink name="Dashboard" to="/" />
      <NavLink name="Profile" to="/profile" />
      <NavLink name="Login" to="/login" />
      <NavLink name="Create an Account" to="/registration" />
      <li>
        <Link to="/">Logout</Link>
      </li>
    </>
  );

  return (
    <header>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a className="brand-logo">AutoArbs</a>
            <ul className="right hide-on-med-and-down">{navLinks}</ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
