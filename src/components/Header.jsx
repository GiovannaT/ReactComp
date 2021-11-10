import React from "react";
import './style.css';

export default function Header(){
  return <div>
    <header className="header">
      <div className="toolbarMenu">
        <details>
          <summary>Egressos</summary>
          <a href="#">2000 a 2004</a><br />
          <a href="#">2005 a 2009</a><br />
          <a href="#">2010 a 2014</a><br />
        </details>
        <details>
          <summary>Professores</summary>
          <a href="#">Administração</a><br />
          <a href="#">Computação</a><br />
          <a href="#">Direito</a><br />
        </details>
        <a href="#">Secretaria</a>
        <a href="#">Biblioteca</a>
        <a href="#">Newsletter</a>
      </div>
    </header>
  </div>
}
