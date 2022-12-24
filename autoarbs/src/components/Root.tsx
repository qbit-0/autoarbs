import { Box, Paper } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LOGGED_IN_REDIRECT, LOGGED_OUT_REDIRECT, PAGES } from "../App";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  accountActions,
  selectUserData,
} from "../features/account/accountSlice";
import useLocalStorage from "../hooks/useLocalStorage";
import GlobalSnackbar from "./GlobalSnackbar";
import Header from "./Header";

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

      const currentPage = PAGES.find((page) => page.path === location.pathname);

      if (savedUserData && savedToken) {
        dispatch(
          accountActions.login({ userData: savedUserData, token: savedToken })
        );

        if (!currentPage?.allowWhenLoggedIn) {
          navigate(LOGGED_IN_REDIRECT);
        }
      } else {
        if (!currentPage?.allowWhenLoggedOut) {
          navigate(LOGGED_OUT_REDIRECT);
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
    <Box
      component={Paper}
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <Header />
      <Box component="main" flexGrow={1} display="flex" flexDirection="column">
        <Outlet />
        <GlobalSnackbar />
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default Root;
