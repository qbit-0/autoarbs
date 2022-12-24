import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import DashboardPage from "./components/pages/DashboardPage";
import HistoryPage from "./components/pages/HistoryPage";
import LoginPage from "./components/pages/LoginPage";
import LogoutPage from "./components/pages/LogoutPage";
import ProfilePage from "./components/pages/ProfilePage";
import SignUpPage from "./components/pages/SignUpPage";
import VerificationPage from "./components/pages/VerificationPage";
import Root from "./components/Root";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export type Page = {
  name: string;
  path: string;
  element: JSX.Element;
  showInNavBar: boolean;
  allowWhenLoggedIn: boolean;
  allowWhenLoggedOut: boolean;
};

export const PAGES: Page[] = [
  {
    name: "About",
    path: "/",
    element: <AboutPage />,
    showInNavBar: true,
    allowWhenLoggedIn: true,
    allowWhenLoggedOut: true,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    element: <DashboardPage />,
    showInNavBar: true,
    allowWhenLoggedIn: true,
    allowWhenLoggedOut: false,
  },
  {
    name: "History",
    path: "/history",
    element: <HistoryPage />,
    showInNavBar: true,
    allowWhenLoggedIn: true,
    allowWhenLoggedOut: false,
  },
  {
    name: "Profile",
    path: "/profile",
    element: <ProfilePage />,
    showInNavBar: true,
    allowWhenLoggedIn: true,
    allowWhenLoggedOut: false,
  },
  {
    name: "Log out",
    path: "/logout",
    element: <LogoutPage />,
    showInNavBar: true,
    allowWhenLoggedIn: true,
    allowWhenLoggedOut: false,
  },
  {
    name: "Log in",
    path: "/login",
    element: <LoginPage />,
    showInNavBar: true,
    allowWhenLoggedIn: false,
    allowWhenLoggedOut: true,
  },
  {
    name: "Sign up",
    path: "/signup",
    element: <SignUpPage />,
    showInNavBar: true,
    allowWhenLoggedIn: false,
    allowWhenLoggedOut: true,
  },
  {
    name: "Verification",
    path: "/verification",
    element: <VerificationPage />,
    showInNavBar: false,
    allowWhenLoggedIn: false,
    allowWhenLoggedOut: true,
  },
];

export const LOGGED_OUT_REDIRECT = "/";
export const LOGGED_IN_REDIRECT = "/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <AboutPage /> },
      { path: "/dashboard", element: <DashboardPage /> },
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
