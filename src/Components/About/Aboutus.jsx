import React from 'react'
import About from '../../Subcomponentss/About'

const Aboutus = () => {
  return (
    <>
        <section id='aboutPage' className='page'>
            <div className="container">
                <img src="/about.jpg" alt="about" />
                <div className='content'>
                    <h3>Your peace of mind, our priority</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem qui harum libero ea, quaerat vero architecto! Quae rem illum perspiciatis sint inventore tenetur. Reprehenderit molestiae suscipit iste eaque culpa tempore!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nemo provident porro, cum cupiditate qui beatae placeat quam similique animi nostrum commodi sed! Similique officia quos recusandae sed iste. Nobis?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tenetur repudiandae eos.</p>
                </div>
            </div>
            <About/>
        </section>
    </>
  )
}

export default Aboutus