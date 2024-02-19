import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const Navbar = () => {
  const [navHeight, setnavhieght] = useState(false)
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const gotohome = () => {
    navigate('/');
  }
  return (
    <nav className={navHeight ? 'show nav' : 'nav'}>
       <div className='logo' onClick={()=>{gotohome()}}> LUXUXRY RENTAL</div>
       <ul>
        <li>
          <Link to='/aboutus'>ABOUT US</Link>
        </li>
        <li>
          <Link to='/villas'>VILLAS</Link>
        </li>
        <li>
          <Link to='/contact'>CONTACT US</Link>
        </li>
       </ul>
       <RxHamburgerMenu className='hamburger' onClick={()=>{setnavhieght(!navHeight)}}/>
    </nav>
  )
}

export default Navbar