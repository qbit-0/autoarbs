import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Otp from "./components/Otp";
import Profile from "./components/Profile";
import Registration from "./components/Registration";
import Root from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/profile", element: <Profile /> },
      { path: "/registration", element: <Registration /> },
      { path: "/otp", element: <Otp /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
