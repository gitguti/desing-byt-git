import styles from '../styles/About.module.scss';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import RRSS from '../components/RRSS/RRSS';
import { Link } from "react-router-dom";



export default function About() {
    return (
        <>
          <Navbar/>
      <RRSS/>
        <div className={styles.grid}>
            <div className={styles.text}>
                <h3 className={styles.text__title}>Life has a funny way of making decisions for you.</h3>
                <p className={styles.text__content}>The product design was a sort of self-exploration to me. I began at the tech field as frontend developer but i noticed that i can create templates and step by step i started to develop and study more about how to design good interfaces, i learn about design systems, atomic design, ui patrons, the hierarchy. I focused in all the tools that can help me as frontend.</p>
                <p className={styles.text__content}>Then, another thing happens, i see the way the costumers asks for <em>that nice feature</em>, but that doesn`t necessarily solves the user needs, what lefts me designing a nice a un bonito y useless feature. That takes me to the world of the <span className={styles.line}>say why to all</span> UX</p>
                <p className={styles.text__content}>I enjoy the process of really solving the problem, the research, POV, guerrilla testing, surveys, and the interviews. All this connects with my six sense of understand not just what the users says, otherwise read between lines</p>
                <p className={styles.text__content}>However, I felt that a little more was missing... I was listening to the users, but... where did the business win? How far did each go?. I was like simba in next picture.</p>
                <div className={styles.image}>
                <img src="/simba.jpg" alt="" />
                </div>
                <p className={styles.text__content}>Fortunately in that precise moment, a new challenge appeared, they needed to develop products from the smallest idea throughout their life cycle. This was a really WOW! I learned more about methodologies, product, business, and finally took the big picture of the matter.
                </p>
                <p className={styles.text__content}>Now i have a new challenge, it`s build solutions on web3, i think that a way to democratize its usage needs to teach how to use this technology properly and make this solutions users centered.</p>
                <p className={styles.text__content}> I <bold>love</bold> to code artistic frontend, create with no code platforms (bubble, glide) and the ethereum project and all the potential its brings to solve problems.</p>
                <div className={styles.contact}>
        <h3 className={styles.commingSoon}>
          {" "}
          Do you want to tell me about you? <span><br></br> or just say Hey!</span>😁
        </h3>
        <a
          href="mailto:gitmelbco@gmail.com"
          target="_blank"
          rel="noreferrer"
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