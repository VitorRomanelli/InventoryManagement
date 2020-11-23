import React from 'react';
import { FiPlusCircle, FiLogIn, FiAirplay, FiList, FiEdit, FiEdit3 } from "react-icons/fi";
import img from "../images/image.jpg";
import "../styles/pages/Landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div id="page-landing">
      <img src={img} alt="Happy" />

      <div className="content-wrapper">

        <main>
          <span>Bem vindo</span>
          <h1>Entre com sua conta!</h1>
        </main>

        <div className="form">
          <div className="input-block">
            <label htmlFor="username">Usúario/E-mail:</label>
            <input id="username" />
          </div>

          <div className="input-block">
            <label htmlFor="password">Senha:</label>
            <input id="password" type="password" />
          </div>
        </div>

        <div className="buttons" >
          <Link to="/" className="register" title="Registrar">
            <FiPlusCircle size={26} color="#FFF" />
          </Link>

          <button type="button" title="LogIn">
            <FiLogIn size={26} color="#FFF" />
          </button>
        </div>

      </div>
    </div>
  );
}