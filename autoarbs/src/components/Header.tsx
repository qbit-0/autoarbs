import M from "materialize-css";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import {
  accountActions,
  selectUserData,
} from "../features/account/accountSlice";
import NavLink from "./NavLink";

type Props = {};

const Header = (props: Props) => {
  const sidenavRef = useRef<HTMLUListElement>(null);
  const [sidenavInstance, setSidenavInstance] = useState<M.Sidenav>();
  const userData = useAppSelector(selectUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sidenavRef.current !== null) {
      setSidenavInstance(M.Sidenav.getInstance(sidenavRef.current));
    }
  }, []);

  const handleNavClick = () => {
    sidenavInstance?.close();
  };

  const navLinks = (
    <>
      <NavLink name="About" to="/" onClick={handleNavClick} />
      {userData ? (
        <>
          <NavLink name="Dashboard" to="/dashboard" onClick={handleNavClick} />
          <NavLink name="History" to="/history" onClick={handleNavClick} />
          <NavLink name="Profile" to="/profile" onClick={handleNavClick} />
          <li>
            <Link
              to="/"
              onClick={() => {
                dispatch(accountActions.logout());
              }}
            >
              Logout
            </Link>
          </li>
        </>
      ) : (
        <>
          <NavLink name="Login" to="/login" onClick={handleNavClick} />
          <NavLink name="Sign Up" to="/signup" onClick={handleNavClick} />
        </>
      )}
    </>
  );

  return (
    <header>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              AutoArbs
            </Link>
            <a href="#!" data-target="mobile-nav" className="sidenav-trigger">
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
