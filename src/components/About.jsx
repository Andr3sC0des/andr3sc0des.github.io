import React from 'react'
import styles from '../cssModules/About.module.sass'

const About = () => {
  return (
    <>
      <section className={styles.about}>
        <section className={styles.about__info}>
          <span className={styles.about__title}>I´m Andrés CODES</span>
          <p className={styles.about__paragraph}>
            Como desarrollador web con dos años de experiencia, me siento muy afortunado de haber encontrado mi pasión en el mundo de la tecnología. Desde que comencé mi carrera, he trabajado diligentemente para mejorar mis habilidades y ampliar mis conocimientos en el campo. Actualmente, estoy comenzando a trabajar como freelance y estoy ansioso por tener la oportunidad de trabajar en proyectos interesantes y desafiantes para diferentes clientes.
          </p>
          <p className={styles.about__paragraph}>
            Mi experiencia incluye la creación de sitios web utilizando tecnologías como HTML, CSS, JavaScript y React.

            Además de mi experiencia práctica, también he obtenido las certificaciones de Responsive Web Design y Front End Development Libraries de FreeCodeCamp.
          </p>
          <p className={styles.about__paragraph}>
            En el futuro, espero seguir aprendiendo y creciendo en mi carrera como desarrollador web. Estoy ansioso por tener la oportunidad de trabajar en proyectos interesantes y desafiantes y contribuir a soluciones innovadoras y de alta calidad.

          </p>
          <p className={styles.about__paragraph}>
            Si está buscando a un desarrollador web confiable y dedicado, no dude en ponerse en contacto conmigo. Estoy seguro de que puedo aportar valor a su equipo y ayudar a llevar sus proyectos al siguiente nivel.
          </p>

          <article className={styles.about__social}>

            <a href=''>
              <i className='fa-brands fa-linkedin-in' />
            </a>
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
        </section>
        <section className={styles.about__image}>
          <img src='https://res.cloudinary.com/dbihhif3d/image/upload/v1671261127/portfolio/developer_bjfqzq.webp' alt='' />
        </section>
      </section>

    </>
  )
}

export default About
