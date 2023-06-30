import React from 'react';
import { Link } from "react-router-dom";
// import styles
import styles from "../styles/Home.module.scss";
// import components
import ProjectContainer from "../components/ProjectContainer/ProjectContainer";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import RRSS from "../components/RRSS/RRSS";
import Sticky from 'react-stickynode';

// load the data from JSON
import data from "../data.json";

export default function Home() {
  const information = { data };
  // console.log(information.data.data);
  const projects = information.data.data.projects;
  const keys = Object.keys(information.data.data.projects);
  // console.log(keys);

  return (
    <div className={styles.container}>
      <header>
        <title>Gitmel Gutierrez - Web3 Product Designer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </header>
      <Navbar />
      <Sticky enabled={true} top={500}>
      <RRSS />
      </Sticky>;
      <main className={styles.main__container}>
        <div className={styles.main__container__left}>
          <h1 className={styles.main__container__left__title}>
            {information.data.data.name}
          </h1>
          <h2 className={styles.main__container__left__subtext}>
            {information.data.data.profession}
          </h2>
          <p className={styles.main__container__left__text}>
            {information.data.data.objetive}
          </p>
          <Link
            to="/About"
            target="_self"
            rel="noreferrer"
            className={styles.button__light}
          >
            Know more about me
          </Link>
        </div>
        <div className={styles.effect}></div>
      </main>
      <section className={styles.case__container}>
        <h3 className={styles.case__container__title}>Selected projects</h3>
        <div className={styles.case__container__grid}> {keys.id}
        {keys.map((key) => (
          <Link to={"/projects/" + projects[key].id} key={projects[key].id}>
            <ProjectContainer projectDetails={projects[key]} />
          </Link>
        ))}
        </div>
      </section>
      <div className={styles.contact}>
        <h3 className={styles.commingSoon}>
          {" "}
          Let's build <span>the next project</span> together
        </h3>
        <a href="mailto:gitmelbco@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button__cta}
        >
          Keep in touch
        </a>
      </div>

      <Footer />
    </div>
  );
}
