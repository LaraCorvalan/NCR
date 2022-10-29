import React, { useEffect, useState } from "react";
import s from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import { getData } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [filtrados, setFiltrados] = useState(data);
  console.log(filtrados)

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    let filter = data.filter(
      (e) =>
        (e.tipo_letras.toUpperCase() === "CA" ||
        e.tipo_letras.toUpperCase() === "CC") &&
        (e.moneda === "$" ||
        e.moneda === "u$s")
    )
    setFiltrados( filter );
  }, [data])

  // console.log("soy filterrr 2", filtrados);

  // let filter = filtrados.filter(e => e.tipo_letras.toUpperCase() === 'CA' && e.tipo_letras.toUpperCase() === 'CC' && e.moneda === '$' && e.moneda === 'u$s')
  // setFiltrados(filtrados.filter(e => e.tipo_letras.toUpperCase() === 'CA' && e.tipo_letras.toUpperCase() === 'CC' && e.moneda === '$' && e.moneda === 'u$s'))
  // console.log('soy filterrr 2', filtrados);

  return (
    <div>
      <Navbar />
      <div className={s.titles}>
        <p className={s.consulta}>Consulta de Saldo</p>
        <p className={s.selecciona}>Selecciona la Cuenta a Consultar</p>
      </div>

      <div>
        <div className={s.cardContainer}>
          {filtrados
            ? filtrados.map((elem, index) => {
                return (
                  <Link
                    to={`/detail/${elem.n}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div key={index} className={s.card}>
                      <p>
                        {" "}
                        {elem.tipo_letras.toUpperCase() == "CC"
                          ? "Cuenta Corriente"
                          : elem.tipo_letras.toUpperCase() == "CA"
                          ? "Caja de Ahorro"
                          : elem.tipo_letras}{" "}
                      </p>
                      <p>Nro: {elem.n}</p>
                    </div>
                  </Link>
                );
              })
            : 
            // AGREGAR LOADER
            null}
        </div>
      </div>

      <div className={s.btnContainer}>
        <button className={s.exitBtn}>Salir</button>
      </div>
    </div>
  );
}
