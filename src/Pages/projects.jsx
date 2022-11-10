import React from "react";
import GlobalStyles from "../CSS/globalStyles";
import { UlProjects, ProjectsLink, Title, } from "../CSS/Pages/projectsPageStyles"
// import PageFunctions from "../Projects/CadastroProject";


const Projects = () => {
  return (
    <>
      <div>

        <UlProjects>
          <Title>Projetos do Lucas Caetano Goncalves (Luquinhas)</Title>
          <hr />
          <ProjectsLink to="/CadastroProject" >Cadastro Project</ProjectsLink>
          <ProjectsLink to="/AlgoProject">Algo Project</ProjectsLink>
          <ProjectsLink>Undefined</ProjectsLink>
        </UlProjects>
      </div>
      <GlobalStyles />
    </>
  );
};

export default Projects;