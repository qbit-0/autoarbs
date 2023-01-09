import "@fontsource/roboto";
import "@fontsource/roboto-slab";

import {
  AccountBalanceWallet,
  AccountCircle,
  AdminPanelSettings,
  History,
  Login,
  Logout,
  Password,
  PersonAdd,
} from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import AdminLoginPage from "./components/pages/AdminLoginPage";
import AdminPage from "./components/pages/AdminPage";
import AdminSignUpPage from "./components/pages/AdminSignUpPage";
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
  allowWhenUserLoggedIn: boolean;
  allowWhenAdminLoggedIn: boolean;
  allowWhenLoggedOut: boolean;
};

export const PAGES: Page[] = [
  {
    name: "About",
    path: "/",
    icon: <InfoIcon />,
    element: <AboutPage />,
    showInNavBar: true,
    allowWhenUserLoggedIn: true,
    allowWhenAdminLoggedIn: true,
    allowWhenLoggedOut: true,
  },
  {
    name: "Admin",
    path: "/admin",
    icon: <AdminPanelSettings />,
    element: <AdminPage />,
    showInNavBar: true,
    allowWhenUserLoggedIn: false,
    allowWhenAdminLoggedIn: true,
    allowWhenLoggedOut: false,
  },
  {
    name: "Wallet",
    path: "/wallet",
    icon: <AccountBalanceWallet />,
    element: <WalletPage />,
    showInNavBar: true,
    allowWhenUserLoggedIn: true,
    allowWhenAdminLoggedIn: true,
    allowWhenLoggedOut: false,
  },
  {
    name: "History",
    path: "/history",
    icon: <History />,
    element: <HistoryPage />,
    showInNavBar: true,
    allowWhenUserLoggedIn: true,
    allowWhenAdminLoggedIn: true,
    allowWhenLoggedOut: false,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <AccountCircle />,
    element: <ProfilePage />,
    showInNavBar: true,
    allowWhenUserLoggedIn: true,
    allowWhenAdminLoggedIn: true,
    allowWhenLoggedOut: false,
  },
  {
    name: "Log out",
    path: "/logout",
    icon: <Logout />,
    element: <LogoutPage />,
    showInNavBar: true,
    allowWhenUserLoggedIn: true,
    allowWhenAdminLoggedIn: true,
    allowWhenLoggedOut: false,
  },
  {
    name: "Log in",
    path: "/login",
    icon: <Login />,
    element: <LoginPage />,
    showInNavBar: true,
    allowWhenUserLoggedIn: false,
    allowWhenAdminLoggedIn: false,
    allowWhenLoggedOut: true,
  },
  {
    name: "Admin login",
    path: "/admin_login",
    icon: <Login />,
    element: <AdminLoginPage />,
    showInNavBar: false,
    allowWhenUserLoggedIn: false,
    allowWhenAdminLoggedIn: false,
    allowWhenLoggedOut: true,
  },
  {
    name: "Sign up",
    path: "/signup",
    icon: <PersonAdd />,
    element: <SignUpPage />,
    showInNavBar: true,
    allowWhenUserLoggedIn: false,
    allowWhenAdminLoggedIn: false,
    allowWhenLoggedOut: true,
  },
  {
    name: "Admin sign up",
    path: "/admin_signup",
    icon: <PersonAdd />,
    element: <AdminSignUpPage />,
    showInNavBar: false,
    allowWhenUserLoggedIn: false,
    allowWhenAdminLoggedIn: false,
    allowWhenLoggedOut: true,
  },
  {
    name: "Verification",
    path: "/verification",
    icon: <Password />,
    element: <VerificationPage />,
    showInNavBar: false,
    allowWhenUserLoggedIn: false,
    allowWhenAdminLoggedIn: false,
    allowWhenLoggedOut: true,
  },
];

export const LOGGED_OUT_REDIRECT = "/";
export const LOGGED_IN_REDIRECT = "/wallet";
export const ADMIN_REDIRECT = "/admin";

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
      { path: "/admin", element: <AdminPage /> },
      { path: "/admin_login", element: <AdminLoginPage /> },
      { path: "/admin_signup", element: <AdminSignUpPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
