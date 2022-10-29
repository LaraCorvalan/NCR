import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { getDetail, emptyDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import s from "./CardDetail.module.css";
import { Link } from "react-router-dom";

export default function Detail() {
  const detalle = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(emptyDetail());
    };
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className={s.titles}>
        <p className={s.consulta}>Consulta de Saldo</p>
        <p className={s.saldoAct}>Este es tu saldo actual</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {detalle ? (
          <div className={s.info}>
            <p>Saldo de la cuenta: {detalle.saldo}</p>
            <p>
              Tipo de cuenta:{" "}
              {detalle.tipo_letras?.toUpperCase() === "CA" &&
              detalle.moneda === "$"
                ? "Caja de ahorro en pesos"
                : detalle.tipo_letras?.toUpperCase() === "CA" &&
                  detalle.moneda === "u$s"
                ? "Caja de ahorro en dólares"
                : detalle.tipo_letras?.toUpperCase() === "CC" &&
                  detalle.moneda === "u$s"
                ? "Cuenta corriente en dólares"
                : detalle.tipo_letras?.toUpperCase() === "CC" &&
                  detalle.moneda === "$"
                ? "Cuenta corriente en pesos"
                : null}
            </p>
            <p>Número cuenta: {detalle.n}</p>
          </div>
        ) : null}
      </div>
      <div className={s.btnContainer}>
        <Link to='/'>
          <button className={s.exitBtn}>Salir</button>
        </Link>
      </div>
    </div>
  );
}
