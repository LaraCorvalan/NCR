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
  // PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = filtrados.slice(indexOfFirstPost, indexOfLastPost);
  // const currentPostsOrdenados = filtrados?.slice(
  //   indexOfFirstPost,
  //   indexOfLastPost
  //   );
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginate = () => {
    const totalPosts = filtrados?.length;
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      pageNumber.push(i);
    }
    console.log(pageNumber);
    if (pageNumber.includes(currentPage + 1)) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    let filter = data.filter(
      (e) =>
        (e.tipo_letras.toUpperCase() === "CA" ||
          e.tipo_letras.toUpperCase() === "CC") &&
        (e.moneda === "$" || e.moneda === "u$s")
    );
    setFiltrados(filter);
  }, [data]);

  // console.log("soy filterrr 2", filtrados);

  // let filter = filtrados.filter(e => e.tipo_letras.toUpperCase() === 'CA' && e.tipo_letras.toUpperCase() === 'CC' && e.moneda === '$' && e.moneda === 'u$s')
  // setFiltrados(filtrados.filter(e => e.tipo_letras.toUpperCase() === 'CA' && e.tipo_letras.toUpperCase() === 'CC' && e.moneda === '$' && e.moneda === 'u$s'))
  // console.log('soy filterrr 2', filtrados);

  const handleClick = (e) => {
    e.preventDefault();
    setPostPerPage(4);
    paginate();
  };
  console.log(postPerPage, "soy postperpage");

  const handleClickBack = (e) => {
    e.preventDefault();
    if (currentPage === 2) {
      setPostPerPage(5);
    }
    setCurrentPage(currentPage - 1);
  };
  console.log("soy currentPage", currentPage);
  console.log("soy postPerPage", postPerPage);
  console.log("soy currentPosts", currentPosts);
  
  return (
    <div>
      <Navbar />
      <div className={s.titles}>
        <p className={s.consulta}>Consulta de Saldo</p>
        <p className={s.selecciona}>Selecciona la Cuenta a Consultar</p>
      </div>

      <div>
        <div className={s.cardContainer}>
          {
          postPerPage < 5 ?  (
            <div>
              <button
                className={s.cardBtn}
                onClick={(e) => {
                  handleClickBack(e);
                }}
              >
                {"<< Opciones anteriores"}{" "}
              </button>
            </div>
          ) : null}
          {filtrados && currentPosts
            ? currentPosts.map((elem, index) => {
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
            : null}
          <div>
            {
              currentPosts?.length < 4 ? 
              <button
              disabled
              className={s.cardBtnDis}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              {"Más opciones >>"}{" "}
            </button> : 
            <button
              className={s.cardBtn}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              {"Más opciones >>"}{" "}
            </button>
            }
          </div>
        </div>
      </div>

      <div className={s.btnContainer}>
        <button className={s.exitBtn}>Salir</button>
      </div>
    </div>
  );
}
