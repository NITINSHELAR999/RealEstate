import React from 'react'
import Herosection from '../../Subcomponentss/Herosection'
import Topvillas from '../../Subcomponentss/Topvillas'
import Regions from '../../Subcomponentss/Regions'
import OurSpecialities from '../../Subcomponentss/OurSpecialities'
import Host from '../../Subcomponentss/Host'
import About from '../../Subcomponentss/About'
import Contact from '../../Subcomponentss/Contact'


const Home = () => {
  return (
    <article className='page'>
        <Herosection/>
        <Topvillas/>
        <Regions/>
        <OurSpecialities/>
        <Host/>
        <About/>
        <Contact/>
    </article>
  )
}

export default Home