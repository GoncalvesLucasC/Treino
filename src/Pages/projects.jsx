import React from "react";
import GlobalStyles from "../css/globalStyles";
import { UlProjects, ProjectsLink, Title, } from "../css/Pages/projectsPageStyles"
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