import { faCode, faEnvelope, faFileAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'
import './style.css'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
   <Navbar bg='dark' expand='lg'
   className='custom-navbar shadow-sm'>
    <Navbar.Brand as={Link} to='/'
    className='brand-name'>
        <span className='display-4 text-white ho'>ABTECH</span>
    </Navbar.Brand>
    <button 
    className='navbar-toggler'
    type='button'
    data-toggle='collapse'
    data-target='#navbarNav'
    aria-controls='navbarNav'
    aria-expanded='false'
    aria-label='Toggle navigation'>
        <span className='navbar-toggle-icon'></span>
    </button>
    <div className='collapse navbar-collapse text-white'
          id='navbarNav'>
          <Nav className='ml-auto'>
            <Nav.Link as={Link} to='/'>
            <span>About</span>
            </Nav.Link>
            <FontAwesomeIcon icon={faInfoCircle}
            className='ml-2 text-light ho ho'/>

            <Nav.Link as={Link} to='/projects'>
            <span>Projects</span>
            <FontAwesomeIcon icon={faCode}
            className='ml-2 text-light ho'/>
            </Nav.Link>

            <Nav.Link as={Link} to='/resume'>
            <span>Resume</span>
            <FontAwesomeIcon icon={faFileAlt}
            className='ml-2 text-light ho'/>
            </Nav.Link>
            <Nav.Link as={Link} to='/contacts'>
            <span>Contacts</span>
            <FontAwesomeIcon icon={faEnvelope}
            className='ml-2 text-light ho'/>
            </Nav.Link>
            </Nav> 

            <Nav className='ml-auto'>
                <Nav.Link 
                href='https://github.com/koech161'>
                    <span className='sr-only'>Github</span>
                    <FontAwesomeIcon icon={faGithub} 
                    size='lg'
                    className='text-light ho'/>
                </Nav.Link>

            <Nav.Link
            href='https://linkedin.com/in/1234' >
                <span className='sr-only'>Linkedin</span>
                <FontAwesomeIcon  icon={faLinkedin}
                size='ld' className='text-light ho'/>
                </Nav.Link>   

            </Nav>
      </div>
   </Navbar>
  )
}

export default Header
