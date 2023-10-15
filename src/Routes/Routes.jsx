import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import TermsCondition from "../pages/Shared/TermsCondition/TermsCondition";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/news')
        },
        {
          path: '/about',
          element: <h1>This is about</h1>
        },
        {
          path: '/category/:id',
          element: <Category></Category>,
          loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        }
    ]
  },
  {
    path: '/news',
    element: <NewsLayout></NewsLayout>,
    children:[
      {
        path: '/news/:id',
        element: <PrivateRoutes><News></News></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  },
  {
    path: '/login',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/login/register',
        element: <Register></Register>
      },
      {
        path: '/login/terms',
        element: <TermsCondition></TermsCondition>
      }
    ]
  }
]);

export default router;
