import { createBrowserRouter } from "react-router-dom";
import Root from "../routes/root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [],
  },
]);
