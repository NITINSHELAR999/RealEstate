import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
const Contact = () => {
  return (
     <section id='contact_Mini'>
        <div className="super_container">
            <div className="container_1">
                <h1>Let's Connect</h1>
                <div>
                    <p>Phone</p>
                    <span>001 002 003</span> 
                </div>
                <div>
                    <p>Email</p>
                    <span>zk@gmail.com</span> 
                </div>
                <div>
                    <p>Address</p>
                    <span>House No.123 Sector A-Z</span> 
                </div>
                <ul>
                    <Link to={"/facebook"} target="_blank"><IoLogoFacebook/></Link>
                    <Link to={"/facebook"} target="_blank"><FaInstagram/></Link>
                    <Link to={"/facebook"} target="_blank"><IoLogoFacebook/></Link>
                </ul>
            </div>
            <div className='container_2'>
                <h3>we would loves from you</h3>
                <form>
                    <div>
                        <input type="text" name="" id="" placeholder='Your Name' />
                        <input type="email" name="" id="" placeholder='Your Email' />
                    </div>
                    <textarea placeholder='Your Message...' name="" id="" cols="30" rows="4"></textarea>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
     </section>
  )
}

export default Contact