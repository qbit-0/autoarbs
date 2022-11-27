import M from "materialize-css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

type Props = {};

const Header = (props: Props) => {
  const sidenavRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (sidenavRef.current !== null) M.Sidenav.init(sidenavRef.current);
  }, []);

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
            <Link to="/">
              <p className="brand-logo">AutoArbs</p>
            </Link>
            <a href="#" data-target="mobile-nav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">{navLinks}</ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-nav" ref={sidenavRef}>
        {navLinks}
      </ul>
    </header>
  );
};

export default Header;
