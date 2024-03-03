import React from 'react'

import styles from '../styles/Navbar.module.css';
import { NavLink, Outlet } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <div className={styles.Nav}>
      <div className={styles.left}>
        <NavLink to={"/"} className={styles.navLink}>
          <span>photoAlbum</span>
        </NavLink>
        
      </div>  
      <div className={styles.right}>
        <NavLink to={"add-album"} className="navLink">
          <span className={styles.navItem}>Add Album</span>
        </NavLink>
        
      </div>
    </div>
    <Outlet/>
    </>
    
  )
}

export default Navbar
