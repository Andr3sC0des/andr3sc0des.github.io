import React from 'react'
import styles from '../cssModules/Navbar.module.sass'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <section className={styles.navbar}>
        <img className={styles.navbar__logo} src='https://res.cloudinary.com/dbihhif3d/image/upload/v1671114407/portfolio/logo_adfszy.svg' alt='andr3sc0des logo' />
        <ul className={styles.menu}>
          <li className={styles.menu__item}>
            <Link to='/' className={styles.menu__anchor}>
              <i className='fa-solid fa-house' />
              Inicio
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link to='/about' className={styles.menu__anchor}>
              <i className='fa-solid fa-address-card' />
              About
            </Link>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Navbar
