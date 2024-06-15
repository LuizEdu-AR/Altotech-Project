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
import Accessories from './routes/Accessories.jsx';
import UserCadLogPage from './routes/UserCadLogPage.jsx';
import ConfirmCpfPage from './routes/ConfirmCpfPage.jsx';
import CoderPage from './routes/CoderPage.jsx';
import ChangePasswordPage from './routes/ChangePasswordPage.jsx';
import CadClothesPage from './routes/CadClothesPage.jsx';
import CadAccessoriesPage from './routes/CadAccessoriesPage.jsx';
import DelProductPage from './routes/DelProductPage.jsx';
import SearchPage from './routes/SearchPage.jsx';
import ViewProductPage from './routes/ViewProductPage.jsx';
import MantoOnePage from './routes/MantoOnePage.jsx';
import MantoTwoPage from './routes/MantoTwoPage.jsx';
import MantoThreePage from './routes/MantoThreePage.jsx';
import BagPage from './routes/BagPage.jsx';

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
        path: "/acessorios",
        element: <Accessories />,
      },
      {
        path: "/usuario",
        element: <UserCadLogPage />,
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
        path: "/cadastrar-roupas",
        element: <CadClothesPage />,
      },
      {
        path: "/cadastrar-acessorios",
        element: <CadAccessoriesPage />,
      },
      {
        path: "/deletar-produto",
        element: <DelProductPage />,
      },
      {
        path: "/pesquisar",
        element: <SearchPage />,
      },
      {
        path: "/visualizar-produto",
        element: <ViewProductPage />,
      },
      {
        path: "/manto-um",
        element: <MantoOnePage />,
      },
      {
        path: "/manto-dois",
        element: <MantoTwoPage />,
      },
      {
        path: "/manto-tres",
        element: <MantoThreePage />,
      },
      {
        path: "/sacola",
        element: <BagPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
