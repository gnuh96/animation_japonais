import { createBrowserRouter } from "react-router-dom";
import Root from "../routes/root";
import Login from "../components/login/Login";
import Register from "../components/register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [],
  },

  {
    path: "/login",
    element: <Login />,
    children: [],
  },

  {
    path: "/register",
    element: <Register />,
    children: [],
  },

]);


