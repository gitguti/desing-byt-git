import React from 'react';
import styles from '../styles/About.module.scss';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

export default function About() {
    return (
        <>
          <Navbar/>
        <div className={styles.grid}>
            <div className={styles.text}>
                <h3 className={styles.text__title}>Life has a funny way of making decisions for you.</h3>
                <p className={styles.text__content}>The product design was a sort of self-reveal to me. I began at the tech field as frontend developer but I noticed that I could create layout and then, step by step I started to develop and study more about how to design good interfaces, i learned about design systems, atomic design, UI patrons and UI fundamentals. I focused in all the tools that could help me and the team as frontend developer.</p>
                <p className={styles.text__content}>Then, another thing happened, i saw the way the costumers was asking for <em>that nice feature</em>, but that feature didn`t  solves the user needs, what lefts me designing a nice and useless feature. That taked me to the world of the <span className={styles.line}>ask why to all</span> UX</p>
                <p className={styles.text__content}>I really enjoy the process of solving a problem, the research, POV, guerrilla testing, surveys, and the interviews. I feel that all this connects with my sixt sense🔮 of understand not just what the users says, otherwise read between lines.</p>
                <p className={styles.text__content}>However, I felt that a little more was missing... I was listening to the users, but... where do the business win? I was like simba in next picture.</p>
                <div className={styles.image}>
                <img src="/simba.jpg" alt="" />
                </div>
                <p className={styles.text__content}>Fortunately in that precise moment, a new challenge appeared, they needed to develop products from the smallest idea throughout their life cycle. This was a really WOW! I learned more about methodologies, product, business, and finally took the big picture of the matter.
                </p>
                <p className={styles.text__content}>Now I have a new challenge, it`s build solutions on web3, i think that a way to democratize its usage requires to teach how to use this technology properly and make this solutions users centered.</p>
                <p className={styles.text__content}> I<bold>love</bold> to code artistic frontend, create with no code platforms (bubble, glide) and the ethereum project and all the potential its brings to solve problems.</p>
                <div className={styles.contact}>
        <h3 className={styles.commingSoon}>
          {" "}
          Do you want to tell me about you? <span><br></br> or just say Hey!</span>😁
        </h3>
        <a
          href="mailto:gitmelbco@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button__cta}
        >
          Keep in touch
        </a>
      </div>
            </div>
        </div>
        <Footer/>

        </>
    )
}