import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import podfolio from '../../public/podfolio.png';
import hotel from '../../public/hotel.png';

export const metadata = {
  title: "Projects | Portfolio", 
};

const page = () => {
  return (
    <div className='projects-section'>
        <div className='projects-header'>
        <div className='projects-container'>
            <h1 className='projects-title'>My Projects</h1> </div>
            <p className='projects-description'>
                Here are some of the projects I have worked on. Each project showcases my skills in web development, design, and problem-solving.
            </p>
            <ul className='projects-list'>
                <li className='project-item'>
                    <h2 className='project-name'>Project 1: Portfolio Website</h2>
                    <p>A personal portfolio website to showcase my skills and projects.</p>
                    <Image src={podfolio} alt="podfolio website"  className='project-image' />
                    <br />
                    <Link href="url-to-project-1" target="_blank" rel="noopener noreferrer" className='project-link'>View Project</Link>
                </li>
                <li className='project-item'>   
                    <h2 className='project-name'>Project 2: Hotel Website</h2>
                    <p> This is my first project and this hotel website help me to learn how to make website</p>
                    <Image src={hotel} alt="Hotel Website"  className='project-image' />
                    <br />
                    <Link href="https://vedsingh615.github.io/hotel/" target="_blank" rel="noopener noreferrer" className='project-link'>View Project</Link>
                </li>
                </ul></div>
            <p className='projects-contact'>
                Note: Each project is a testament to my dedication to quality and user experience. I am always looking for new challenges and opportunities to grow as a developer.
            </p>
            <p className='projects-contact'>
                If you have any questions or would like to collaborate on a project, feel free to <Link href="/contact" className='contact-link'>contact me</Link>.
            </p>
            
        <div className='projects-caption' >
            <p >Projects in Action</p>
            <p>Building modern web applications with a focus on performance and user experience.</p>        
            <p>I am passionate about creating efficient and scalable solutions.</p>
            <p className='projects-lastcaption'>Let's connect and collaborate on exciting projects!</p>
                </div>
                </div>
  
  )
}

export default page
