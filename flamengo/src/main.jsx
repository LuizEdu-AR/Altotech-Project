import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

import ErrorPage from './routes/ErrorPage.jsx';

import Masculine from './routes/Masculine.jsx';
import Feminine from './routes/Feminine.jsx';
import Infantil from './routes/Infantil.jsx';
import Accessories from './routes/Accessories.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Masculine />,
      },
      {
        path: "/feminino",
        element: <Feminine />,
      },
      {
        path: "/infantil",
        element: <Infantil />,
      },
      {
        path: "/acessorios",
        element: <Accessories />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
