import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import ListadoNoticias from "./Components/ListadoNoticias";

function App() {
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=de303c78859e44f38bf50a17faa8f2d5`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    };

    consultarAPI();
  }, [categoria]);

  return (
    <>
      <Header titulo="Buscador de Noticias" />

      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </>
  );
}

export default App;
