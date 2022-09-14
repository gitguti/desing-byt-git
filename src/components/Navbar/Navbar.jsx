import React, { useState } from "react";
import {Link} from 'react-router-dom';
import styles from "./Navbar.module.scss";
import Menu from '../Menu/Menu'
import { FiMenu, FiX } from "react-icons/fi";


export default function Navbar(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggler = () => setMenuOpen((p) => !p);
    return (
      <>
      <div className={styles.navbar}>
      <div className={styles.navbar__side}>
      <div>
        <Link to="/" className={styles.logo}>
          <img src='/git_logo.svg' alt="git logo's"  width="40" height="40"/>
        </Link>
        </div>
        </div>
        <div className={styles.navbar__side}>
        <button className={styles.menu__toggler} href="" onClick={menuToggler}>
            {!menuOpen ? (
            <FiMenu size={32} />
            ) : (
            <FiX size={32} color="white" />
            )}
        </button>
        {menuOpen ? (<Menu/>) : ''}
          </div>
      </div>
      </>
    )
}