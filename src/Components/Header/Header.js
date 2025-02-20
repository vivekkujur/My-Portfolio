
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'
import "../Header/Header.css"

const Header = () => {

    const [showNavList  , setShowNav ] = useState(false)
    const toggleNavList =()=> setShowNav(!showNavList)

    return (
        <BrowserRouter>
            <div>
                <nav className='top_nav_container'>
                    <ul className='nav_container'>
                        <li className='nav_items'><Link to="/skills" className='link_style' onClick={toggleNavList}>Skills</Link></li>
                        <li className='nav_items'><Link to="/experience" className='link_style'>Experience</Link></li>
                        <li className='nav_items'><Link to="/contact" className='link_style'>Contact</Link></li>
                    </ul>
                   
                </nav>
               { <Routes>
                    <Route path="/skills" > </Route>
                    <Route path="/experience" > </Route>
                    <Route path="/contact" > </Route>

                    {/* <Route path="education" element={<Skills/>}> </Route> */}
                </Routes>}
            </div>
        </BrowserRouter>


    )
}

export default Header
