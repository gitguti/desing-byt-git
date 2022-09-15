import styles from './RRSS.module.scss'
import { FiGithub,FiLinkedin, FiAtSign, FiFile } from "react-icons/fi";
import {Link} from 'react-router-dom';

export default function RRSS(props) {
    const fillColor = "#373434";
      return (
        <>
        <div className={styles.wrapper}>
         <div className={styles.button}>
         <a href="http://github.com/gitguti"  target="_blank"
          rel="noreferrer">
            <div className={styles.icon}>
              <FiGithub size={20} color={fillColor} fill={fillColor} />
            </div>
            </a>
         </div>
         <div className={styles.button}>
         <a href="mailto:gitmelbco@gmail.com"  target="_blank"
          rel="noreferrer">
         <div className={styles.icon}>
            <FiAtSign size={24} color={fillColor}  />
            </div>
         </a>
         </div>
         <div className={styles.button}>
         <a href="https://www.linkedin.com/in/gitguti/"  target="_blank"
          rel="noreferrer">
         <div className={styles.icon}>
         <FiLinkedin size={20}  color={fillColor} fill={fillColor} />
            </div>
         </a>
         </div>
         <div className={styles.button}>
         <a href="https://www.linkedin.com/in/gitguti/"  target="_blank"
          rel="noreferrer">
         <div className={styles.icon}>
         <FiFile size={20}  color={fillColor} fill={fillColor} />
         </div>
         </a>
         </div>
      </div>
        </>
      )
}