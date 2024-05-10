import { useRouteError } from "react-router-dom";

import './ErrorPage.css';

import Logo from '../assets/img/logoflamengobrasao.png'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Temos um problema.</p>
      <p>Já estamos resolvendo, aguarde por favor...</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img src={Logo} alt="Flamengo logo" />
    </div>
  );
}