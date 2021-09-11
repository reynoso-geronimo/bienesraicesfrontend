const urlSlug = require ('url-slug')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allStrapiPaginas{
        nodes{
          nombre
          id
        }
      }
      allStrapiPropiedades {
        nodes {
          nombre
          id
        }
      }
    }
  `);



 // console.log(JSON.stringify(resultado.data.allStrapiPropiedades))
 if(resultado.errors){
   reporter.panic('No Hubo Resultados', resultado.errors)
 }
 //generar los archivos estaticos
 const paginas =  resultado.data.allStrapiPaginas.nodes
 const propiedades = resultado.data.allStrapiPropiedades.nodes;

 //crear los templaes de paginas

 paginas.forEach(pagina => {
  actions.createPage({
      path: urlSlug(pagina.nombre),
      component: require.resolve('./src/components/paginas.js'),
      context:{
        id:pagina.id
      }
    })
  
 });

 //crear los templaes de propieades

 propiedades.forEach(propiedad => {
  actions.createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve('./src/components/propiedades.js'),
      context:{
        id:propiedad.id
      }
    })
  
 });

}
