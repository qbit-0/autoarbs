import { Box, useTheme } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LOGGED_IN_REDIRECT, LOGGED_OUT_REDIRECT, PAGES } from "../App";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  accountActions,
  selectUserData,
} from "../features/account/accountSlice";
import useLocalStorage from "../hooks/useLocalStorage";
import Footer from "./Footer";
import GlobalSnackbar from "./GlobalSnackbar";
import Header from "./Header";

type Props = {};

const Root = (props: Props) => {
  const theme = useTheme();
  const savedUserData = useLocalStorage("userData");
  const savedToken = useLocalStorage("token");

  const userData = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const autoLogin = async () => {
      const currentPage = PAGES.find((page) => page.path === location.pathname);

      if (userData) {
        if (!currentPage?.allowWhenLoggedIn) {
          navigate(LOGGED_IN_REDIRECT);
        }
      } else if (savedUserData && savedToken) {
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
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      bgcolor={theme.palette.background.default}
    >
      <Header />
      <Box
        component="main"
        flexGrow={1}
        display="flex"
        flexDirection="column"
        py={6}
      >
        <Outlet />
        <GlobalSnackbar />
      </Box>
      <Footer />
    </Box>
  );
};

export default Root;
