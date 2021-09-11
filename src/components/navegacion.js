import {Link} from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';


const Nav= styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;
    @media(min-width:768px){
        padding: 0;
        flex-direction: row;
    }
`
const NavLink=styled(Link)`
    color:#fff;
    font-weight: 700;
    text-decoration: none;
    font-family: 'PT Sans',sans-serif;
    padding: .5rem;
   
    &.pagina-actual{
        border-bottom: 2px solid #fff;
    }
`


const Navegacion = () => {
    return ( 
        <Nav>
            <NavLink
                to={'/'}
                activeClassName="pagina-actual"
            >Inicio</NavLink>
            <NavLink
                to={'/nosotros'}
                activeClassName="pagina-actual"
            >Nosotros</NavLink>
            <NavLink
                to={'/propiedades'}
                activeClassName="pagina-actual"
            >Propiedades</NavLink>
        </Nav>
     );
}
 
export default Navegacion;