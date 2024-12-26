import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import UniversityList from "../pages/UniversityList";
import Profile from "../pages/Profile";
import Support from "../pages/Support";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import UniversityDetails from "../pages/UniversityDetails";
import PrivateRoutes from "./PrivateRoutes";


export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/university-list",
        element: (
          <PrivateRoutes>
            <UniversityList />,
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />,
          </PrivateRoutes>
        ),
      },
      {
        path: "/support",
        element: (
          <PrivateRoutes>
            <Support />,
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/universities/:id",
        element: <UniversityDetails />,
      },
    ],
  },
]);