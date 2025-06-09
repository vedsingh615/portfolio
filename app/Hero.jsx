
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profile from '../public/profile.jpg'

export const metadata = {
  title: "Portfolio", 
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <Image
          src={profile}
          alt="Ved Singh"
          width={250}
          height={250}
          className="hero-image"
        />
        <h1 className="hero-title">Hi, I’m Ved Singh</h1>
        <p className="hero-subtitle">
          A passionate Web Developer building modern <br></br>websites & applications
        </p>
        <div className="hero-buttons">
          <Link href="/projects" className="btn primary">View Projects</Link>
          <Link href="/contact" className="btn secondary">Contact Me</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero