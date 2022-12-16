import React, { useRef } from 'react'
import styles from '../cssModules/Project.module.sass'

const Project = ({ scroll, desktopimage, linksource, title, description, tags, linkpreview }) => {
  const previewOverlay = useRef(null)

  const handlePreview = () => {
    previewOverlay.current.style.opacity = '1'
  }
  const handlePreviewNone = () => {
    previewOverlay.current.style.opacity = '0'
  }

  return (
    <>
      <section className={styles.project} rel='noreferrer'>
        <div ref={previewOverlay} className={styles.project__preview}>Preview</div>

        <article className={styles.project__details}>
          <h2 className={styles.project__title}>{title}</h2>
          <h3 className={styles.project__description}>{description}</h3>
          <h3 className={styles.project__tags}>{tags}</h3>
          <a target='_blank' href={linksource} className={styles.project__ref} rel='noreferrer'>
            <i className='fa-solid fa-arrow-right' />
          </a>
        </article>
        <a onMouseOver={handlePreview} onMouseOut={handlePreviewNone} href={linkpreview} target='_blank' className={scroll ? `${styles.project__image} ${styles.scrollable}` : styles.project__image} rel='noreferrer'>
          <img loading='lazy' src={desktopimage} alt='' />
        </a>
      </section>
    </>
  )
}

export default Project
