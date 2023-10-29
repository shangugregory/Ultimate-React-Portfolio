import React from 'react'
import { Link } from 'react-router-dom'
import "./navigation.css"

export default function Navigation() {
  return (
    <div className='nav-container'>
        <h1 className='gregory'>Gregory</h1>
        <ul className='nav-ul'>
            <li className='nav-li'>
                <Link to='/'>Home</Link>
            </li>
            <li className='nav-li'>
                <Link to='/AboutMe'>About Me</Link>
            </li>
            <li className='nav-li'>
                <Link to='/Resume'>Resume</Link>
            </li>
            <li className='nav-li'>
                <Link to='/Testimonial'>Testimonial</Link>
            </li>
        </ul>
    </div>
  )
}
