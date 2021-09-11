import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"
import usePropiedades from "../hooks/use-propiedades"
import PropiedadPreview from "./propiedadPreview"
import * as listadoPropiedadesCSS from "../css/listadoPropiedades.module.css"
import useFiltro from "../hooks/use-filtro"

const ListadoPropiedades = () => {
  const resultado = usePropiedades()
  const [propiedades] = useState(resultado)
  const [filtradas, setFiltradas] = useState([])
  

  //filtrado de propiedades
  const {categoria, filtroUI}= useFiltro();
  

  useEffect(() => {
    if(categoria){
      const filtro = propiedades.filter(propiedad=>propiedad.categorias.nombre===categoria)
      setFiltradas(filtro);
    }else{
      setFiltradas(propiedades)
    }
  }, [categoria,propiedades])

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras Propieades
        {filtroUI()}
      </h2>
      <ul className={listadoPropiedadesCSS.propiedades}>
        {filtradas.map(propiedad => (
          
          <PropiedadPreview key={propiedad.id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  )
}

export default ListadoPropiedades
