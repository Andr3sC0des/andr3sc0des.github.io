import React, { useEffect, useState } from 'react'
import Project from './Project'
import styles from '../cssModules/Projects.module.sass'
import projects from '../projects'
import searchStyle from '../cssModules/Search.module.sass'

const Projects = () => {
  const [projectsFiltered, setProjectsFiltered] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }
  const handlePrevent = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    const search = inputValue.split(' ')

    setProjectsFiltered(projects.filter((project) => {
      return search.every((keyword) => {
        return project.title.toLowerCase().includes(keyword.toLowerCase()) || project.tags.toLowerCase().includes(keyword.toLowerCase())
      })
    }))

    if (inputValue === '') {
      setProjectsFiltered(projects)
    }
  }, [inputValue])

  return (
    <>
      <section className={styles.projects}>
        <h2 className={styles.projects__title}>Some of my works</h2>

        <form onChange={handleInput} onSubmit={handlePrevent} className={searchStyle.search}>
          <input placeholder='Search...' className={searchStyle.search__input} type='search' name='' id='' />
          <button className={searchStyle.search__button}><i className='fa-solid fa-magnifying-glass' /></button>
        </form>

        <article className={styles.projects__content}>

          {projectsFiltered.map(({ id, scroll, linkpreview, desktopimage, linksource, description, title, tags }) => {
            return (
              <Project key={id} title={title} tags={tags} description={description} scroll={scroll} desktopimage={desktopimage} linksource={linksource} linkpreview={linkpreview} />
            )
          })}

        </article>
      </section>
    </>
  )
}

export default Projects
