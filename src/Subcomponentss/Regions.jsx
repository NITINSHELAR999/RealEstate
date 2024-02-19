import React from 'react'

const Regions = () => {
  return (
    <section id='regions'>
       <h1>OUR REGIONS</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora necessitatibus exercitationem minima atque, itaque dicta? Id rem nisi commodi optio, accusamus inventore repudiandae minus unde perspiciatis vel, saepe asperiores?</p>
       <div className='region_container'>
            <div className='card'>
                <img src='/region1.jpg' alt="image not found" />
                <h2>Mountains</h2>
                <p><span>90</span>Properties</p>
            </div>

            <div className='card'>
                <img src='/region2.jpg' alt="image not found" />
                <h2>Costline</h2>
                <p><span>90</span>Properties</p>
            </div>
       </div>
       
    </section>
  )
}

export default Regions