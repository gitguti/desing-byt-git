import React from 'react';
import styles from '../../styles/Project.module.scss'
import ProjectOverview from '../../components/ProjectOverview/ProjectOverview'
import ProjectSection from '../../components/ProjectSection/ProjectSection'
import Footer from '../../components/Footer/Footer'
import data from '../../data.json'
import Navbar from '../../components/Navbar/Navbar'
import RRSS from '../../components/RRSS/RRSS';
import Sticky from 'react-stickynode';

export default function ProjectDetails() {
    const project = data.data.projects.cryptoBaddies;
    console.log(project, "soy infor")
    return (
        <>
        <Navbar/>
        <Sticky enabled={true} top={500}>
      <RRSS />
      </Sticky>
        {/* <div className={styles.class}>
        <img src={project.photo} alt="dev logo"/>
        </div>     */}
        <ProjectOverview overview = {project}/>
        {project.stages.map((project, index) => (
           <ProjectSection projectDetails={project} key={index} />
        ))}
        <Footer/>
        </>
    )
}