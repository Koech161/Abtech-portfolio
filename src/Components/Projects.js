import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const Projects = () => {
    const breadcrumbsPaths = 
    [
        {title: 'Home', to:'/'},
        {title: 'Projects', to:'/projects'}
    ]
  return (
    <section id='projects'
    className='container text-center'>
        <Breadcrumbs paths ={breadcrumbsPaths} />
        <h2 className='section-tittle'>
            <FontAwesomeIcon icon={faCode}
            className='mr-2'/>
            Projects
        </h2>
        <div className='row'>
            {/* project 1 */}
            <div className='col-md-6'>
                <div className='card mb-4'>
                    <div className='card-body'>
                        <h4 className='card-title'>
                            E-commerce
                        </h4>
                        <p className='card-text'>
                        Built a fully functional e-commerce 
                                platform with features like product listing, 
                                cart management, and user authentication using 
                                React, Node.js, and MongoDB. 
                        </p>
                    </div>
                </div>
            </div>
            {/* project-2 */}
            <div className="col-md-6"> 
                    <div className="card mb-4"> 
                        <div className="card-body"> 
                            <h5 className="card-title"> 
                                Social Media Dashboard 
                            </h5> 
                            <p className="card-text"> 
                                Developed a social media dashboard 
                                that allows users to view and manage 
                                their social media accounts in one place, 
                                integrating with APIs from major platforms. 
                            </p> 
                        </div> 
                    </div> 
                </div> 
        </div>

    </section>
  )
}

export default Projects
