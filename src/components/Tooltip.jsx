import React from 'react'
import styles from '../cssModules/Tooltip.module.sass'

const Tooltip = ({ scroll }) => {
  return (
    <>
      <section className={scroll ? styles.tooltip : styles.hide}>
        <h2 className={styles.tooltip__title}>Scroll down to see all the content</h2>
      </section>
    </>
  )
}

export default Tooltip
