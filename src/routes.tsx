import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./containers/App";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import CreateProject from "./containers/CreateProject";
import CreateProjectState from "./containers/CreateProjectState";
import Project from "./containers/Project";
import Cadastro from "./containers/Cadastro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/entrar",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Signup />,
  },
  {
    path: "/criar/projeto",
    element: <CreateProject />,
  },
  {
    path: "/criar/projeto/estado",
    element: <CreateProjectState/>
  },
  {
    path: "/projeto/:id",
    element: <Project />,
  },
{
  path: "/cadastro",
  element: <Cadastro/>,
}
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
