import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import DashboardPage from "./components/pages/DashboardPage";
import HistoryPage from "./components/pages/HistoryPage";
import LoginPage from "./components/pages/LoginPage";
import OtpPage from "./components/pages/OtpPage";
import ProfilePage from "./components/pages/ProfilePage";
import SignUpPage from "./components/pages/SignUpPage";
import VerificationPage from "./components/pages/VerificationPage";
import Root from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <AboutPage /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/history", element: <HistoryPage /> },
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
