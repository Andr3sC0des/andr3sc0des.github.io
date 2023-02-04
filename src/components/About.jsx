import React from 'react'
import styles from '../cssModules/About.module.sass'

const About = () => {
  return (
    <>
      <section className={styles.about}>

        <section className={styles.about__info}>
          <span className={styles.about__title}>I´m Andrés Quintana</span>
          <p className={styles.about__paragraph}>
            Me siento muy afortunado de haber encontrado mi pasión en el mundo de la tecnología. Desde que comencé mi carrera, he trabajado diligentemente para mejorar mis habilidades y ampliar mis conocimientos en el campo. Actualmente, estoy comenzando a trabajar como freelance y estoy ansioso por tener la oportunidad de trabajar en proyectos interesantes y desafiantes para diferentes clientes.
          </p>
          <p className={styles.about__paragraph}>
            Mi experiencia incluye la creación de sitios web utilizando tecnologías como HTML, CSS, JavaScript, React, NextJS, MongoDB, MySQL.

            Además de mi experiencia práctica, también he obtenido las certificaciones de Responsive Web Design, Front End Development Libraries y JavaScript Algorithms and Data Structures de FreeCodeCamp.
          </p>
          <p className={styles.about__paragraph}>
            En el futuro, espero seguir aprendiendo y creciendo en mi carrera como desarrollador web. Estoy ansioso por tener la oportunidad de trabajar en proyectos interesantes y desafiantes y contribuir a soluciones innovadoras y de alta calidad.
          </p>
        </section>

        <section className={styles.about__image}>
          <img src='https://res.cloudinary.com/dbihhif3d/image/upload/v1671261127/portfolio/developer_bjfqzq.webp' alt='' />
        </section>
      </section>

    </>
  )
}

export default About
