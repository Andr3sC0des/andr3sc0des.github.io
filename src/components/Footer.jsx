import React from 'react'
import styles from '../cssModules/Footer.module.sass'
import Social from './Social'

const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <Social />
        <span className={styles.footer__copyright}>Copyright © 2022 <a target='_blank' href='https://github.com/Andr3sC0des' rel='noreferrer'>andr3sc0des</a></span>
      </section>
    </>
  )
}

export default Footer
