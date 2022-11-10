import styled from "styled-components";
import { Link as Link } from 'react-router-dom';

export const Container = styled.div`
   
    `;
export const UlProjects = styled.ul`
    display: flex;
    height: 50vh;
    padding: 70px;
    flex-direction: column;
    justify-content: space-between;

`;
export const Title = styled.h1`
    font-family:'Roboto', sans-serif;
    color: #c1c1c1e3;
    text-align: center;
`;
export const ProjectsLink = styled(Link)`
 list-style: none;
    font-size: 25px;
    color: #c1c1c1e3;
    font-family: "Roboto", sans-serif;
    padding: 0px 0px 0px 130px;
    `;