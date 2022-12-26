import "@fontsource/roboto";
import "@fontsource/roboto-slab";

import {
  AccountBalanceWallet,
  AccountCircle,
  History,
  Login,
  Logout,
  Password,
  PersonAdd,
} from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import HistoryPage from "./components/pages/HistoryPage";
import LoginPage from "./components/pages/LoginPage";
import LogoutPage from "./components/pages/LogoutPage";
import ProfilePage from "./components/pages/ProfilePage";
import SignUpPage from "./components/pages/SignUpPage";
import VerificationPage from "./components/pages/VerificationPage";
import WalletPage from "./components/pages/WalletPage";
import Root from "./components/Root";

export type Page = {
  name: string;
  path: string;
  icon: JSX.Element;
  element: JSX.Element;
  showInNavBar: boolean;
  allowWhenLoggedIn: boolean;
  allowWhenLoggedOut: boolean;
};

export const PAGES: Page[] = [
  {
    name: "About",
    path: "/",
    icon: <InfoIcon />,
    element: <AboutPage />,
    showInNavBar: true,
    allowWhenLoggedIn: true,
    allowWhenLoggedOut: true,
  },
  {
    name: "Wallet",
    path: "/wallet",
    icon: <AccountBalanceWallet />,
    element: <WalletPage />,
    showInNavBar: true,
    allowWhenLoggedIn: true,
    allowWhenLoggedOut: false,
  },
  {
    name: "History",
    path: "/history",
    icon: <History />,
    element: <HistoryPage />,
    showInNavBar: true,
    allowWhenLoggedIn: true,
    allowWhenLoggedOut: false,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <AccountCircle />,
    element: <ProfilePage />,
    showInNavBar: true,
    allowWhenLoggedIn: true,
    allowWhenLoggedOut: false,
  },
  {
    name: "Log out",
    path: "/logout",
    icon: <Logout />,
    element: <LogoutPage />,
    showInNavBar: true,
    allowWhenLoggedIn: true,
    allowWhenLoggedOut: false,
  },
  {
    name: "Log in",
    path: "/login",
    icon: <Login />,
    element: <LoginPage />,
    showInNavBar: true,
    allowWhenLoggedIn: false,
    allowWhenLoggedOut: true,
  },
  {
    name: "Sign up",
    path: "/signup",
    icon: <PersonAdd />,
    element: <SignUpPage />,
    showInNavBar: true,
    allowWhenLoggedIn: false,
    allowWhenLoggedOut: true,
  },
  {
    name: "Verification",
    path: "/verification",
    icon: <Password />,
    element: <VerificationPage />,
    showInNavBar: false,
    allowWhenLoggedIn: false,
    allowWhenLoggedOut: true,
  },
];

export const LOGGED_OUT_REDIRECT = "/";
export const LOGGED_IN_REDIRECT = "/wallet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <AboutPage /> },
      { path: "/wallet", element: <WalletPage /> },
      { path: "/history", element: <HistoryPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/logout", element: <LogoutPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/verification", element: <VerificationPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
