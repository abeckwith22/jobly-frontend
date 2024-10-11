import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Helper from "./helpers/Helper";

/* route components */
import App from "./routes/App";

import Home from "./routes/Home";
import Profile from "./routes/Profile";

import Companies from "./routes/Companies";
import CompanyDetails from "./routes/CompanyDetails";

import Jobs from "./routes/Jobs";
import JobDetails from "./routes/JobDetails";

import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Logout from "./routes/Logout";

/* error components */
import ErrorElement from "./components/ErrorElement";
import ProtectedRouteWrapper from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>, // wraps the navbar around our website
    children: [
      {
        path: "/logout",
        element: <Logout/>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp/>,
      },
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/",
        element: <ProtectedRouteWrapper/>,
        children: [
          {
            path: "/companies",
            element: <Companies/>,
          },
          {
            path: "/companies/:handle",
            element: <CompanyDetails/>,
          },
          {
            path: "/jobs",
            element: <Jobs/>,
          },
          {
            path: "/jobs/:id",
            element: <JobDetails/>,
          },
          {
            path: "/profile",
            element: <Profile/>,
          },
        ]
      },
    ],
    errorElement: <ErrorElement/>,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
