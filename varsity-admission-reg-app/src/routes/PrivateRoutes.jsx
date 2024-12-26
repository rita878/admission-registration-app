import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";



// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  const authContext = useAuth();

  const location = useLocation();
  if (!authContext || !authContext.user) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoutes;
