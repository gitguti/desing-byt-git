import React from 'react';
import styles from './RRSS.module.scss'
import { FiGithub,FiLinkedin, FiAtSign, FiFile, FiDribbble, FiTwitter } from "react-icons/fi";

export default function RRSS(props) {
    const fillColor = "#373434";
      return (
        <>
      <div className={styles.wrapper}>
  <div className={styles.button}>
    <a href="http://github.com/gitguti" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <div className={styles.icon}>
        <FiGithub size={20} color={fillColor} fill={fillColor} />
      </div>
    </a>
  </div>
  <div className={styles.button}>
    <a href="mailto:gitmelbco@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
      <div className={styles.icon}>
        <FiAtSign size={24} color={fillColor} />
      </div>
    </a>
  </div>
  <div className={styles.button}>
    <a href="https://www.linkedin.com/in/gitguti/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <div className={styles.icon}>
        <FiLinkedin size={20} color={fillColor} fill={fillColor} />
      </div>
    </a>
  </div>
  <div className={styles.button}>
    <a href="https://drive.google.com/file/d/1SMpnuA2vpQr_QO36k0DH-X_Q8qbhhTWP/view?usp=share_link" target="_blank" rel="noopener noreferrer" aria-label="Resume">
      <div className={styles.icon}>
        <FiFile size={20} color={fillColor} fill={fillColor} />
      </div>
    </a>
  </div>
  <div className={styles.button}>
    <a href="https://dribbble.com/gitguti" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
      <div className={styles.icon}>
        <FiDribbble size={20} color={fillColor} />
      </div>
    </a>
  </div>
  <div className={styles.button}>
    <a href="https://twitter.com/whynotgit" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
      <div className={styles.icon}>
        <FiTwitter size={20} color={fillColor} fill={fillColor} />
      </div>
    </a>
  </div>
</div>
        </>
      )
}