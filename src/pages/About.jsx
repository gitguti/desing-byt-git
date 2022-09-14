import styles from '../styles/About.module.scss';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import RRSS from '../components/RRSS/RRSS';


export default function About() {
    return (
        <>
          <Navbar/>
      <RRSS/>
        <div className={styles.grid}>
            <div className={styles.image}>
                <img src="/git.jpg" alt="" />
            </div>
            <div className={styles.text}>
                <h3 className={styles.text__title}>La vida tiene caminos y formas torcidas misteriosa</h3>
                <p className={styles.text__content}>The product design was a sort of self-exploration to me. I began at the tech field as frontend developer but i noticed that i can create templates and poco a poco i started to develop y study more how to design good interfaces, i learn about design systems, atomic design, ui patrons, the hierarchical. I foccused in all the tools that can help me as frontend.</p>
                <p className={styles.text__content}>Then, another thing happens, i see the way the costumers asks for that nice feature, but it doesn`t necessarily solves the user needs, lo que me dejaba disenado un bonito y useless feature. That takes me to the world of the <span>why? for everything</span> UX</p>
                <p className={styles.text__content}>I enjoy the process of really solving the problem, the research, POV, hipothese, guerrilla testing, surveys, and the interviews. All this connects with my six sense of knowing not just what the users says, sino las entrelineas.</p>
                <p className={styles.text__content}>Sin embargo, sentia que faltaba un poco mas... estaba escuchando a los usuarios, pero... donde ganaba el negocio? hasta que punto llegaba cada uno? I was like simba asking about what was that far dark zone.</p>
                <p className={styles.text__content}>Un nuevo reto aparecio, neceseitaban que desarrollara productos desde la minima idea por todo su ciclo de vida. This was a really WOW! I learned more about methodologies, product, business, and finally takes the big picture of the issue.
                </p>
                <p className={styles.text__content}>I think that my evolution on my career se debe a my truly passion to understand y solve problems, if i dont have tell  you, i`m electronic engineer y used to see all the things as process, with inputs and outputs. Another things is that the fact that i have occupied diverses roles, allowe me to communicate with diferents teams in `it`s natural language`</p>
                <p className={styles.text__content}>Now i have a new challenge, it`s build solutions on web3, i think that th way to democratize its ussages needs to teach and make this solutions as human and near to the users as possible</p>
                <p className={styles.text__content}> I like to code artistic frontend, create with no code plataforms (bubble, glide), blockchain, css and architecture</p>
            </div>
        </div>
        <Footer/>

        </>
    )
}