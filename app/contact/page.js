import React from 'react'

export const metadata = {
  title: "Contact | Portfolio", 
};
const page = () => {
  return (<>
    <div className='contact-section'>
        <div className='contact-container'>
            <h1 className='Contact-Me'>Contact Me</h1>
            <p className='contact-p'>If you have any questions or would like to get in touch, feel free to reach out!</p>
            <form className='contact-form'>
                <input type="text" placeholder='Your Name' required />
                <input type="email" placeholder='Your Email' required/>
                <textarea placeholder='Your Message' required ></textarea>
                <button type='submit' className='btn-submit'>Send Message</button>
            </form>
           </div>
        
    </div></>
  )
}

export default page
