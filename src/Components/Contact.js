import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } 
    from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    const breadcrumbsPaths =
    [
        {title:'Home', to:'/'},
        {title:'Contact', to:'/contact'}
    ]
  return (
    <section id='contact'
    className='container'>
        <Breadcrumbs paths={breadcrumbsPaths}/>
        <h2 className='section-title'>Contact</h2>
        <p className='section-description'>
        Feel free to reach out for
        collaboration or inquiries.
        </p>
        <ul className='contact-list list-unstyled'>
            <li>
                <FontAwesomeIcon icon={faEnvelope} 
                className='contact-icon'/>
                koechabel161@gmail.com
            </li>
            <li>
                <FontAwesomeIcon icon={faLinkedin}
                className='contact-icon'/>
                <a href='#'> Linkedin</a>
               
            </li>
            <li>
                <FontAwesomeIcon icon={faGithub}
                className='contact-icon'/>
                <a href='#'> Github</a>
               
            </li>
            <li>
                <FontAwesomeIcon icon={faPhone}
                className='contact-icon'/>
                +254123456789
            </li>
        </ul>
    </section>
  )
}

export default Contact
