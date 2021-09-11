const urlSlug = require ('url-slug')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
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

 const propiedades = resultado.data.allStrapiPropiedades.nodes;

 //crear los templaes de propieades

 propiedades.forEach(propiedad => {
  actions.createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve('./src/components/propiedades.js')
    })
  
 });

}
