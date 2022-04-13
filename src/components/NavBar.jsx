import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './pages/footer'
import './navbar.css'
const NavBar= ()=>{
    return(
      <>
       <ul className="navbar">
       <h1>Portfolio</h1>
         <li><Link to = "/">Home</Link></li>
         <li><Link to = "/about">About</Link></li>
         <li><Link to = "/contact">Contact</Link></li>
         <li><Link to = "/skills">Skills</Link></li>
       </ul>
      
      </>
    )
}
export default NavBar;
