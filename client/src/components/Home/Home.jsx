import React from "react";
import s from './Home.module.css'
import Navbar from '../Navbar/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div>
        <p>Consulta de Saldo</p>
        <p>Selecciona la Cuenta a Consultar</p>
      </div>

      <div>
        {/* CONTENEDOR DE BOTONES */}
      </div>

      <div>
        <button className={s.exitBtn}>Salir</button>
      </div>
    </div>
  );
}
