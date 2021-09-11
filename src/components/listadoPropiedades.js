import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"
import usePropiedades from "../hooks/use-propiedades"
import PropiedadPreview from "./propiedadPreview"
import * as listadoPropiedadesCSS from "../css/listadoPropiedades.module.css"

const ListadoPropiedades = () => {
  const [propiedades, setPropiedades] = useState([])

  const resultado = usePropiedades()

  useEffect(() => {
    setPropiedades(resultado)
  }, [])

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Nuestras Propieades
      </h2>
      <ul className={listadoPropiedadesCSS.propiedades}>
        {propiedades.map(propiedad => (
          <PropiedadPreview key={propiedad.id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  )
}

export default ListadoPropiedades
