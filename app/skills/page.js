import React from 'react'
import Image from 'next/image'
import h from '../../public/h.png'
import c from '../../public/c.png'
import s from '../../public/s.png'
import j from '../../public/j.png'
import no from '../../public/no.png'
import r from '../../public/r.png'
import n from '../../public/n.png'
import m from '../../public/m.png'

export const metadata = {
  title: "Skills | Portfolio", 
};

const page = () => {
  return (
    <div className='skills-background'>
      <h1 className='skills-title'>My Skills</h1>
      <div className='skills-section'>   
        <div className='skills-container'>    
          <p className='skills-subheading'>I have a diverse skill set that includes:</p>
          <ul className='skills-list'>
            <li>Web Development (HTML, CSS, JavaScript)</li>
            <li>React.js and Next.js</li>
            <li>Node.js and Express.js</li>
            <li>Database Management (MongoDB, SQL)</li>
            <li>Responsive Design and UI/UX Principles</li>
            <li>Version Control with Git</li>
          </ul>
          <p className='skills-description'>I am always eager to learn new technologies and improve my skills.</p>
        </div>
        <div className='skills-overlay'>
        <div className='skills-image1'>
          <Image src={h} alt='html' className='logo'/>
          <Image src={c} alt='css' className='logo'/>
         <Image src={s} alt='sass' className='logo'/>
          <Image src={j} alt='javascript' className='logo'/>
        </div>
          
        <div className='skills-image2'>
          <Image src={no} alt='node' className='logo'/>
          <Image src={r} alt='react' className='logo'/>
          <Image src={n} alt='next' className='logo'/>
          <Image src={m} alt='mongodb' className='logo'/>
        </div>

        
          <p className='skills-caption'>Skills in Action</p>
          <p>Building modern web applications with a focus on performance and user experience.</p>
          <p>I am passionate about creating efficient and scalable solutions.</p>
          <p>Let's connect and collaborate on exciting projects!</p>
        </div>  
      </div>
    </div>
  )
}

export default page
