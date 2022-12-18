import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  accountActions,
  selectUserData,
} from "../features/account/accountSlice";
import useLocalStorage from "../hooks/useLocalStorage";
import Footer from "./Footer";
import Header from "./Header";

const loggedInOnlyPages = ["/dashboard", "/profile"];
const loggedOutOnlyPages = ["/login", "signup"];
const loggedOutRedirect = "/";
const loggedInRedirect = "/dashboard";
type Props = {};

const Root = (props: Props) => {
  const savedUserData = useLocalStorage("userData");
  const savedToken = useLocalStorage("token");

  const userData = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const autoLogin = async () => {
      if (userData) return;

      if (savedUserData && savedToken) {
        dispatch(
          accountActions.login({ userData: savedUserData, token: savedToken })
        );

        if (loggedOutOnlyPages.includes(location.pathname)) {
          navigate(loggedInRedirect);
        }
      } else {
        if (loggedInOnlyPages.includes(location.pathname)) {
          navigate(loggedOutRedirect);
        }
      }
    };

    autoLogin();
  }, [
    userData,
    savedUserData,
    savedToken,
    dispatch,
    location.pathname,
    navigate,
  ]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
