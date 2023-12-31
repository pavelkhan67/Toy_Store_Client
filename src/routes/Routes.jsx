import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/UserLog/Login";
import Register from "../components/UserLog/Register";
import SingleToy from "../components/SingleToy/SingleToy";
import AllToys from "../components/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import AddToy from "../components/AddToys/AddToy";
import MyToys from "../components/MyToys/MyToys";
import ErrorPage from "../ErrorPage";
import Blog from "../components/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/addtoy",
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>  // private route to show progress when load
        },
        {
          path: "/mytoys",
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>  // private route to show progress when load
        },
        {
          path: "/alltoys",
          element: <AllToys></AllToys>
        },
        {
          path: "/toy/:id",
          element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
          loader: ({params}) => fetch(`https://toy-store-server-rho.vercel.app/toy/${params.id}`)
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
    
      ]
    },
  ]);

  export default router;