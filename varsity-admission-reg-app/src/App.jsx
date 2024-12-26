import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./pages/NavBar";

function App() {
  const location = useLocation();
  const isLoginOrRegister =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      {!isLoginOrRegister && (
        <div className="relative z-10">
          <NavBar />
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default App;
