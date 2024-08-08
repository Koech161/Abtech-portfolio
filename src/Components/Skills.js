import {  faCode, faCogs, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Skills = () => {
  return (
    <section id='skills'
    className='container'
    style={{paddingLeft: 'opx'}}>
        <h2 className='section-title'>
            <FontAwesomeIcon icon={faCogs}
            className='mr-2'/>
            Skills
        </h2>
        <ul className='skills-list'>
            <li>
                <FontAwesomeIcon icon={faCode}
                className='mr-2'/>
                HTML
            </li>
            <li>
            <FontAwesomeIcon icon={faCode}
                className='mr-2'/>
                CSS
            </li>
            <li>
            <FontAwesomeIcon icon={faCode}
                className='mr-2'/>
                JavaScript
            </li>
            <li>
            <FontAwesomeIcon icon={faLaptopCode}
                className='mr-2'/>
                React
            </li>
            <li>
            <FontAwesomeIcon icon={faLaptopCode}
                className='mr-2'/>
                Bootstrap
            </li>
        </ul>
    </section>
  )
}

export default Skills
