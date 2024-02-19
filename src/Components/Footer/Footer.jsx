import React from 'react'
import { Link,  useLocation } from 'react-router-dom'
const Footer = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  return (
      <footer className={isHomePage ? 'homePage_footer otherPage_footer' : 'otherPage_footer'}>
          <div className="container">
            <h4>LUXURY RENTALS</h4>
            <p className='plorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eum magnam repellendus voluptates odit a autem architecto sint magni aliquam.</p>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/tearmsandconditions'>Home</Link>
              </li>
              <li>
                <Link to='/contact'>Home</Link>
              </li>
            </ul>
          </div>
          <div className='container'>
            <h4>Connect with us</h4>
            <p>*0000 0000 0000</p>
            <p>niteenshelar@gmail.com</p>
            <p>All rights reserved by codewithnitin</p>
          </div>
      </footer>
  )
}

export default Footer