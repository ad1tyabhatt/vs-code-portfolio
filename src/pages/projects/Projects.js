import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../../components/project-card/ProjectCard";
import cinemateApp from "../../assets/project-images/cinemate.png";
import vsCodePortfolioImage from "../../assets/project-images/realestate.png";
import dashboardApp from "../../assets/project-images/dashboard.png";

const projectsData = [
  {
    id: 1,
    name: "Dashboard",
    image: dashboardApp,
    description:
      "A Single Page dashboard built with React.js to track certain data and activities",
    tags: ["javascript", "react", "react-redux","chart.js", "MUI"],
    source_code: "https://github.com/ad1tyabhatt/dashboard-react",
    demo: "https://dashboard-aditya.netlify.app/",
  },
  {
    id: 2,
    name: "Real-Estate",
    image: vsCodePortfolioImage,
    description:
      "An Application where property owner and buyers can sell and buy real-estate respectively",
    tags: ["javascript", "react", "css-modules","react-redux","tailwind","MUI","JWT"],
    source_code: "https://github.com/ad1tyabhatt/Real-Estate",
    demo: "https://propsale.netlify.app/",
  },
  {
    id: 3,
    name: "Cinemate",
    image: cinemateApp,
    description:
      "A user-friendly movie website that fetch data from OMDB",
    tags: ["javascript", "react", "chart.js", "axios"],
    source_code: "https://github.com/ad1tyabhatt/Real-Estate",
    demo: "https://propsale.netlify.app/",
  },
];

const Projects = () => {
  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  );
};

export default Projects;
