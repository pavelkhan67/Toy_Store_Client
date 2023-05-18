import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/UserLog/Login";
import Register from "../components/UserLog/Register";
import SingleToy from "../components/SingleToy/SingleToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          path: "/toy/:id",
          element:<SingleToy></SingleToy>,
          loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
        },
    
      ]
    },
  ]);

  export default router;