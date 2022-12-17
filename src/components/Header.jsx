import React, { useEffect, useRef, useState } from 'react'
import styles from '../cssModules/Header.module.sass'

import outstanding from '../outstanding'

const Header = () => {
  const desktopIsScroll = useRef(null)
  const mobileIsScroll = useRef(null)
  const [cont, setCont] = useState(0)
  const [time, setTime] = useState(5000)

  const handleImage = (change) => {
    setCont(cont + change)
    setTime(5000)
    if (cont === 0 && change === -1) {
      setCont(outstanding.length - 1)
    }
    if (cont === outstanding.length - 1 && change === 1) {
      setCont(0)
    }
  }

  useEffect(() => {
    const mockupsTimeout = setTimeout(() => {
      setCont(cont + 1)
      setTime(5000)
      if (cont === outstanding.length - 1) {
        setCont(0)
      }
    }, time)

    desktopIsScroll.current.addEventListener('scroll', () => {
      if (outstanding[cont].scroll) {
        setTime(time + 10)
      }
    })

    mobileIsScroll.current.addEventListener('scroll', () => {
      if (outstanding[cont].scroll) {
        setTime(time + 10)
      }
    })

    return () => {
      clearTimeout(mockupsTimeout)
    }
  })

  return (
    <>
      <header className={styles.header}>

        <section className={styles.header__previews}>

          <div ref={mobileIsScroll} className={outstanding[cont].scroll ? `${styles.scrollable} ${styles.header__mobileproject}` : styles.header__mobileproject}>
            <img src={outstanding[cont].mobileimage} alt='' />
          </div>

          <div ref={desktopIsScroll} className={outstanding[cont].scroll ? `${styles.scrollable} ${styles.header__desktopproject}` : styles.header__desktopproject}>
            <img src={outstanding[cont].desktopimage} alt='' />
          </div>

        </section>

        <section className={styles.header__top}>
          <i onClick={() => { handleImage(-1) }} className={`${styles.arrow} fa-solid fa-chevron-left`} />
          <h1 className={styles.header__title}>{outstanding[cont].title}</h1>
          <i onClick={() => { handleImage(1) }} className={`${styles.arrow} ${styles.arrow__right} fa-solid fa-chevron-right`} />
        </section>

        <section className={styles.header__ref}>

          <article className={styles.header__refinfo}>
            <span className={styles.tooltip}>Link Source</span>
            <a className={styles.header__icon} href={outstanding[cont].linksource} target='_blank' rel='noopener noreferrer'>
              <i className='fa-brands fa-github' />
            </a>
          </article>

          <article className={styles.header__refinfo}>
            <span className={styles.tooltip}>Live Preview</span>
            <a className={styles.header__icon} href={outstanding[cont].linkpreview} target='_blank' rel='noopener noreferrer'>
              <i className='fa-solid fa-eye' />
            </a>
          </article>
          <article className={outstanding[cont].ref ? styles.header__refinfo : styles.hide}>
            <span className={styles.tooltip}>Attribution</span>
            <a className={styles.header__icon} href={outstanding[cont].ref} target='_blank' rel='noopener noreferrer'>
              <i className='fa-brands fa-creative-commons-by' />
            </a>
          </article>

        </section>

      </header>
    </>
  )
}

export default Header
