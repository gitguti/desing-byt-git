import styles from './RRSS.module.scss'
import { FiGithub,FiLinkedin, FiAtSign, FiFile } from "react-icons/fi";
import {Link} from 'react-router-dom';

export default function RRSS(props) {
    const fillColor = "#373434";
      return (
        <>
        <div className={styles.wrapper}>
         <div className={styles.button}>
         <Link href="http://github.com/gitguti">
            <div className={styles.icon}>
              <FiGithub size={20} color={fillColor} fill={fillColor} />
            </div>
            </Link>
         </div>
         <div className={styles.button}>
         <Link href="mailto:gitmelbco@gmail.com ">
         <div className={styles.icon}>
            <FiAtSign size={24} color={fillColor}  />
            </div>
         </Link>
         </div>
         <div className={styles.button}>
         <Link href="https://www.linkedin.com/in/gitguti/">
         <div className={styles.icon}>
         <FiLinkedin size={20}  color={fillColor} fill={fillColor} />
            </div>
         </Link>
         </div>
         <div className={styles.button}>
         <Link href="https://www.linkedin.com/in/gitguti/">
         <div className={styles.icon}>
         <FiFile size={20}  color={fillColor} fill={fillColor} />
         </div>
         </Link>
         </div>
      </div>
        </>
      )
}