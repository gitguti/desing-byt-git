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
import SEO from '../components/SEO/SEO';
// load the data from JSON
import data from "../data.json";

export default function Home() {

  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

document.addEventListener("DOMContentLoaded", function() {
  var elements = document.getElementsByClassName('typewrite');
  var delay = 2000; // Delay of 2 seconds (adjust as needed)
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      setTimeout(function(element, rotate, period) {
        new TxtType(element, JSON.parse(rotate), period);
      }, delay * i, elements[i], toRotate, period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff; animation-delay: 4s}";
  document.body.appendChild(css);
});


  const information = { data };
  // console.log(information.data.data);
  const projects = information.data.data.projects;
  const keys = Object.keys(information.data.data.projects);
  // console.log(keys);

  return (
    <div className={styles.container}>
      <header>
        <SEO
        title='Git 🐉🪷 Product Designer'
        description = "I'm Gitmel Gutiérrez a passionate about building through design and code. My goal is to create products that solve user needs with a delightful experience."
        name='Gitmel Gutierrez'
        type='website'/>
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
      <Sticky enabled={true} top={150}>
      <RRSS />
      </Sticky>
      <main className={styles.main__container}>
        <div className={styles.main__container__left}>
        <h2 className={styles.main__container__left__greeting}>
            {information.data.data.greetings}
          </h2>
          <h1 className={styles.main__container__left__title}>
          <a href="" className="typewrite" data-period="2000" data-type='[ "Gitmel Gutiérrez", "Just call me Git😉", "@gitguti everywhere", "@whynotgit on twitter"]'>
    <span className="wrap"></span>
  </a>
  </h1>

          <h2 className={styles.main__container__left__subtext}>
            {information.data.data.objetive}
          </h2>
          <Link
            to="/About"
            target="_self"
            rel="noreferrer noopener"
            className={styles.button__light}
          >
            <span>
            Know more about me
            </span>
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
