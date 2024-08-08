import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './style.css'
import profile from '../Assets/my pic.jpg'

const About = () => {
    return (
        <section id='about'
            className='container text-center'>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <h2 className='section-title'>
                        <FontAwesomeIcon icon={faUser}
                            className='mr-2' />
                        About Me

                    </h2>
                    <div className='profile-image-container'>
                        <img src={profile} alt='profile'
                            className='img-fluid rounded-circle profile-img' />
                    </div>
                    <p className='section-description mt-4'>
                        As a Web developer, I enjoy crafting digital experiences on the internet.
                        I posses a blend of technical skills and creativity allowing me to design and build website and web application that are functional,
                        user freindly and visually appealing. Iam proficient in programming languages like HTML,CSS and JavaScript, adept at using React framework to enhance my development process.
                    </p>
                </div>

            </div>

        </section>
    )
}

export default About
