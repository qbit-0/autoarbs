import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { login } from "../api/account";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  accountActions,
  selectIsLoggedIn,
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
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    M.AutoInit();
  }, [location]);

  useEffect(() => {
    const autoLogin = async () => {
      if (isLoggedIn) return;

      if (savedUserData) {
        try {
          const res = await login(savedUserData.email, savedUserData.password);
          const data = res.data;
          switch (data.statusCode) {
            case "200":
              dispatch(accountActions.login(data.userData));
              break;
          }
        } catch (err) {
          console.error(err);
        }
        dispatch(accountActions.login(savedUserData));

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
  }, [isLoggedIn, savedUserData, dispatch, location.pathname, navigate]);

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
