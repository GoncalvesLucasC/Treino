import styled from "styled-components"; 
import { NavLink as Link } from "react-router-dom";

// 7367f0

export const Nav = styled.div`
`
export const Img = styled.img`
   height: 50px;
    width: 200px;
    background: #333333;
`;

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    height: 50px;
    background: #333333;
    align-items: center;
`;
export const NavItens = styled.ul`
    display: flex;
    width: 600px;
    padding: 0 0px 0px 250px;
    height: 50px;
    align-items: center;
    justify-content: space-between;
`;
export const NavLink = styled(Link)`
    background: #333333;
    text-decoration: none;
    color: #fff;
    font-family: 'Roboto', sans-serif;
`;