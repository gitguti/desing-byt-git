import React from 'react';
import styles from "./Menu.module.scss";
import {Link} from 'react-router-dom';

export default function Menu(props) {
      return (
        <>
        <div className={styles.side__bar}>
        <div className={styles.menu}>
            <div className={styles.menu__item}><Link to={{
    pathname: "/",
    state: false
  }} >Home</Link></div>
            <div className={styles.menu__item}><Link to="/projects/CryptoShepherd">Crypto Shepherd</Link></div>
            <div className={styles.menu__item}><Link to="/projects/cryptoBaddies">CryptoBaddies</Link></div>
            <div className={styles.menu__item}><Link to="/projects/Allios">Allios</Link></div>
            <div className={styles.menu__item}><Link to="/projects/Bloombot">Bloombot</Link></div>
            <div className={styles.menu__item}><Link to="/About">About</Link></div>
        </div>
        </div>
        </>
      )
}