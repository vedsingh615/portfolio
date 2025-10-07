import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import podfolio from '../../public/podfolio.png';
import Ecomm from '../../public/Ecomm.png';

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
                    <h2 className='project-name'>Project 2: E-Commerce Website</h2>
                    <p>Built a modern online shop using React with a responsive UI, dynamic product display, and cart
                            interactions. Deployed the project on GitHub Pages for easy access and seamless performance.</p>
                    <Image src={Ecomm} alt="E-commerce website"  className='project-image' />
                    <br />
                    <Link href="https://vedsingh615.github.io/shop/" target="_blank" rel="noopener noreferrer" className='project-link'>View Project</Link>
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
