import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/lato";
import { RouterProvider } from "react-router";
import { route } from "./routes/Route.jsx";
import { Toaster } from 'sonner'
import AuthProvider from "./Provider/AuthProvider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>

    <div className="max-w-7xl mx-auto">
      {" "}
      <RouterProvider router={route} />
      <Toaster position="top-center" />
    </div>{" "}
    </AuthProvider>
  </StrictMode>
);
