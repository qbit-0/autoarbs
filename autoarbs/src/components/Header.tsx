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

  if (!userData) return null;

  const navLinks = (
    <>
      <NavLink name="About" to="/" onClick={handleNavClick} />
      {userData.userName && (
        <>
          <NavLink name="Dashboard" to="/dashboard" onClick={handleNavClick} />
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
      )}
      {!userData.userName && (
        <>
          <NavLink name="Login" to="/login" onClick={handleNavClick} />
          <NavLink
            name="Create an Account"
            to="/registration"
            onClick={handleNavClick}
          />
        </>
      )}
    </>
  );

  return (
    <header>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <Link to="/">
              <p className="brand-logo right">AutoArbs</p>
            </Link>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" data-target="mobile-nav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="hide-on-med-and-down">{navLinks}</ul>
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
