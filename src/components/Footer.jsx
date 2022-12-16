import React from 'react'
import styles from '../cssModules/Footer.module.sass'

const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <span className={styles.footer__copyright}>Copyright © 2022 <a target='_blank' href='https://github.com/Andr3sC0des' rel='noreferrer'>andr3sc0des</a></span>
      </section>
    </>
  )
}

export default Footer
