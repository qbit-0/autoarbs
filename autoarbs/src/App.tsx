import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./components/pages/DashboardPage";
import LoginPage from "./components/pages/LoginPage";
import OtpPage from "./components/pages/OtpPage";
import ProfilePage from "./components/pages/ProfilePage";
import RegistrationPage from "./components/pages/RegistrationPage";
import Root from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <DashboardPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/registration", element: <RegistrationPage /> },
      { path: "/otp", element: <OtpPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
