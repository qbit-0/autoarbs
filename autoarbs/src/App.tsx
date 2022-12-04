import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./components/pages/DashboardPage";
import LandingPage from "./components/pages/LandingPage";
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
      { path: "/", element: <LandingPage /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/registration", element: <RegistrationPage /> },
      { path: "/otp", element: <OtpPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
