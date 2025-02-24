
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'
import "../Header/Header.css"

const Header = () => {

    return (
        // <BrowserRouter>
            <div>
                <nav className='top_nav_container'>
                    <ul className='nav_container'>
                        <li className='nav_items'> <a href="#skills" className='link_style'>Skills</a></li>
                        <li className='nav_items'> <a href="#experience" className='link_style'>Experience</a></li>
                        <li className='nav_items'><a href="#contact" className='link_style'>Contact</a></li>
                    </ul>
                   
                </nav>
               
             </div>
        // {/* </BrowserRouter> */}


    )
}

export default Header


{/* <Routes>
<Route path="/skills" > </Route>
<Route path="/experience" > </Route>
<Route path="/contact" > </Route>
{/* <Route path="education" element={<Skills/>}> </Route> */}
// </Routes> df*/