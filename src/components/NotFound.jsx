import React from 'react'
import styles from '../cssModules/NotFound.module.sass'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <section className={styles.notfound}>
        <span className={styles.notfound__title}>Not Found</span>
        <div className={styles.notfound__image}>
          <img src='https://res.cloudinary.com/dbihhif3d/image/upload/v1670475775/portfolio/404_ggmxp2.gif' alt='' />
        </div>
        <span className={styles.notfound__back}><Link to='/'>Regresar</Link></span>
      </section>
    </>
  )
}

export default NotFound
