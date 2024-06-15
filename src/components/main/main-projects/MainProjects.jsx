import MainPojectsList from "./main-projects-list/MainPojectsList";

import "./MainProjects.css";

const MainProjects = () => {
  return (
    <section className="main-projects p-section" id="projects">
      <h1 className="section-title">Projects</h1>
      <hr />
      <MainPojectsList />
    </section>
  );
};

export default MainProjects;
