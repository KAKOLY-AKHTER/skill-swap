
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../context/PrivateRoute";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgetPassword";
import SkillDetails from "../pages/SkillDetails";
import Profile from "../pages/Profile";
import Loading from "../components/Loading";


const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayout></HomeLayout>,
    children: [
      { index: true, element: <Home></Home> ,
        loader : ()=>fetch("/skills.json"),
       hydrateFallbackElement:<Loading></Loading>
       }
    
      ,

      { path: "login", element: <Login></Login>},
      { path: "signup", element: <SignUp></SignUp> },
      { path: "forgot-password", element: <ForgotPassword></ForgotPassword>},
      {
        path: "/skills/:id",
        element: (
          <PrivateRoute>
          <SkillDetails></SkillDetails>
          </PrivateRoute> ),
         loader : ()=>fetch("/skills.json"),
         
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
        <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
