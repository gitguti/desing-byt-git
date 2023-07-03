import React from 'react';
import ProjectOverview from '../../components/ProjectOverview/ProjectOverview'
import ProjectSection from '../../components/ProjectSection/ProjectSection'
import Footer from '../../components/Footer/Footer'
import data from '../../data.json'
import Navbar from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import styles from '../../styles/Project.module.scss';
import SEO from '../../components/SEO/SEO'; 

export default function ProjectDetails() {
      const { projectId } = useParams();
  const currentProjectId = projectId;
  const project = data.data.projects[currentProjectId];
  const projects = Object.keys(data.data.projects);
  const filteredProjects = projects.filter((proj) => proj !== currentProjectId);
    return (
        <>
         <header>
        <SEO
        title='Git 🐉🪷 Bloombot Study case'
        const description = "Bloombot was a Robotic Process Automation(RPA) integrated development environment (IDE) to build automation solutions, based on python libraries."
        name='Gitmel Gutierrez'
        type='article'/>
        </header>
        <Navbar/>
        {/* <div className={styles.class}>
        <img src={project.photo} alt="dev logo"/>
        </div>      */}
        <ProjectOverview overview = {project}/>
        {project.stages.map((project, index) => (
           <ProjectSection projectDetails={project} key={index} />
        ))}
          <div>
      
        <div className={styles.projectGridContainer}>
        <h2 className={styles.projectGridContainerTitle}>Next projects</h2>
        <div className={styles.projectGrid}>
          {Object.keys(data.data.projects).map((projectId) => (
            projectId !== currentProjectId && (
              <Link to={`/projects/${projectId}`} key={projectId} className={styles.projectLink}>
                <img src={data.data.projects[projectId].photo} alt={data.data.projects[projectId].title} className={styles.projectImage} />
              </Link>
            )
          ))}
        </div>
        </div>
      </div>
        <Footer/>
        </>
    )
}