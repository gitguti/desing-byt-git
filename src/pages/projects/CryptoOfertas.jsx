import styles from '../../styles/emptyProject.module.scss';
import {Link} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar'
import RRSS from '../../components/RRSS/RRSS';

export default function ProjectDetails() {
      return (
        <>
        <Navbar/>
        <RRSS/>
        <div className={styles.center__inside__of__me }>
        <div>
        <div className={styles.flexing}>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
        </div>
        <div>
        <h2 className={styles.text}>|  Building</h2>
        </div>
        </div>
        <div>
        <Link href="/" target="_self" rel="noreferrer" className={styles.button__light}>Back home</Link>
        </div>
        </div>
        </div>
        <Footer/>
        </>
      )
}