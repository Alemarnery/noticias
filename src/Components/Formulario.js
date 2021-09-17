import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";

const Formulario = ({ titulo, guardarCategoria }) => {
  const OPCIONES = [
    { value: "business", label: "business" },
    { value: "entertainment", label: "entertainment" },
    { value: "general", label: "general" },
    { value: "health", label: "health" },
    { value: "science", label: "science" },
    { value: "sports", label: "sports" },
    { value: "technology", label: "technology" },
  ];
  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

  const buscarNoticias = (e) => {
    e.preventDefault();

    guardarCategoria(categoria);
  };

  return (
    <div className={`row ${styles.buscador}`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
          <SelectNoticias />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`btn-large amber darken-2 ${styles.btn_block}`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
