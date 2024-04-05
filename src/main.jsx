import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./Components/Root/Root"
import Home from "./Components/Pages/Home/Home"
import About from "./Components/Pages/About/About"
import Login from "./Components/Pages/Login/Login"
import SignUp from "./Components/Pages/SignUp/SignUp"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element:<About></About>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/sign-up",
        element:<SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
