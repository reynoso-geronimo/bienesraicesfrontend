import { graphql, useStaticQuery } from "gatsby";

const usePropiedades = () => {
    const datos = useStaticQuery(graphql`
    query{
        allStrapiPropiedades {
          nodes {
            nombre
            habitaciones
            estacionamiento
            id
            wc
            descripcion
            precio
            categorias {
              nombre
            }
          
            agentes {
              nombre
              telefono
              email
            }
            imagen{
                localFile{
                    sharp:childImageSharp{
                    fluid(maxWidth: 600, maxHeight: 400){
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            }
          }
        }
      }
    `)
    
      

 
    return datos.allStrapiPropiedades.nodes.map(propiedad=>({
      nombre:propiedad.nombre,
      descripcion:propiedad.descripcion,
      categorias:propiedad.categorias,
      estacionamiento:propiedad.estacionamiento,
      habitaciones:propiedad.habitaciones,
      id:propiedad.id,
      precio:propiedad.precio,
      agentes:propiedad.agentes,
      imagen:propiedad.imagen,
      wc:propiedad.wc,
    
}))
 
}
export default usePropiedades;