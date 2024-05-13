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
import UserCadLogPage from './routes/UserCadLogPage.jsx';
import FuncCadLogPage from './routes/FuncCadLogPage.jsx';
import ConfirmCpfPage from './routes/ConfirmCpfPage.jsx';
import CoderPage from './routes/CoderPage.jsx';
import ChangePasswordPage from './routes/ChangePasswordPage.jsx';
import CadProductPage from './routes/CadProductPage.jsx';
import DelProductPage from './routes/DelProductPage.jsx';
import SearchPage from './routes/SearchPage.jsx';

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
      {
        path: "/usuario",
        element: <UserCadLogPage />,
      },
      {
        path: "/funcionario",
        element: <FuncCadLogPage />,
      },
      {
        path: "/confirmar-cpf",
        element: <ConfirmCpfPage />,
      },
      {
        path: "/codigo",
        element: <CoderPage />,
      },
      {
        path: "/alterar-senha",
        element: <ChangePasswordPage />,
      },
      {
        path: "/cadastrar-produto",
        element: <CadProductPage />,
      },
      {
        path: "/deletar-produto",
        element: <DelProductPage />,
      },
      {
        path: "/pesquisar",
        element: <SearchPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
