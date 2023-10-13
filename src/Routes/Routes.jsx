import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/about',
          element: <h1>This is about</h1>
        }
    ]
  },
]);

export default router;
