import React from 'react'
import styles from '../cssModules/About.module.sass'

const Social = () => {
  return (
    <>
      <article className={styles.about__social}>
        <a href='https://github.com/Andr3sC0des/' target='_blank' rel='noreferrer'>
          <i className='fa-brands fa-github' />
        </a>

        <a href='https://www.freecodecamp.org/andr3sc0des' target='_blank' rel='noreferrer'>
          <i className='fa-brands fa-free-code-camp' />
        </a>

        <a href='https://www.fiverr.com/andr3sc0des' target='_blank' rel='noreferrer'>
          <img src='https://res.cloudinary.com/dbihhif3d/image/upload/v1671263300/portfolio/fiverr_k0fzwt.svg' alt='' />
        </a>
      </article>
    </>
  )
}

export default Social
