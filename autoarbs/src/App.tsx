import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./components/pages/DashboardPage";
import AboutPage from "./components/pages/AboutPage";
import LoginPage from "./components/pages/LoginPage";
import OtpPage from "./components/pages/OtpPage";
import ProfilePage from "./components/pages/ProfilePage";
import SignUpPage from "./components/pages/SignUpPage";
import Root from "./components/Root";
import VerificationPage from "./components/pages/VerificationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <AboutPage /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/otp", element: <OtpPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/verification", element: <VerificationPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
