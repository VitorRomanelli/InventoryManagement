import React from 'react';
import { FiArrowLeft, FiLogOut, FiAirplay, FiList, FiEdit, FiEdit3 } from "react-icons/fi";
import "../styles/components/SideBar.css";

export default function SideBar() {
  return (
    <aside className="app-sidebar">

      <footer>
        <button type="button" title="Sair">
          <FiLogOut size={24} color="#FFF" />
        </button>
        <button type="button" title="Cadastrar Produto">
          <FiEdit3 size={24} color="#FFF" />
        </button>
        <button type="button" title="Listar Produtos">
          <FiList size={24} color="#FFF" />
        </button>
        <button type="button" title="Cadastrar Movimentações do Estoque">
          <FiEdit size={24} color="#FFF" />
        </button>
        <button type="button" title="Listar Movimentações do Estoque">
          <FiAirplay size={24} color="#FFF" />
        </button>
        <div id="back">
          <button type="button" >
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </div>
      </footer>
    </aside>
  );
}