import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './containers/App';
import Login from './containers/Login';
import Signup from './containers/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
