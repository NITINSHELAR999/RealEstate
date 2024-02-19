import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
const Contact = () => {
  return (
    <section id='contact'>
        <h1>CONTACT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, blanditiis! Modi pariatur dolor necessitatibus, vel qui rerum deleniti corrupti aperiam.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt eos impedit, recusandae ipsa unde porro dignissimos tempore aliquid quod dolor dolores nemo dolore possimus veritatis! Quis dolorem ad nobis fuga.</p>
        <div className="container">
            <img src="/about.jpg" alt="aboutpage" />
            <div className="content">
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
        </div>
    </section>
  )
}

export default Contact