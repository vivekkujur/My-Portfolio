import React from 'react'
import "../About/About.css"
import { IconButton } from '@mui/material'
import { GitHub ,LinkedIn} from '@mui/icons-material'

function AboutPage() {
    return (
        <div className='about_container'>
            <h1 className='title_style' >Hi , I am Vivek kujur</h1>
            <h1>Senior Software Engineer</h1>
            <h4 className='description_style'>Experienced Senior Software Engineer with 7+ years of expertise in mobile and web application development, specializing in CRM, e-commerce, healthcare, and SaaS-based solutions. Skilled in designing, developing, and optimizing scalable applications, contributing to 1M+ downloads and 40K+ daily active users.
                Expert in React Native and web development, with proficiency in Android (Kotlin, Java), iOS, Flutter, and modern JavaScript frameworks. Strong background in REST APIs, microservices, SaaS solutions, UI/UX optimization, and third-party integrations.
                A results-oriented professional with a strong background in agile development, collaborating with founders and CTOs to deliver high-performance applications. Passionate about problem-solving, automation, and driving innovation through technology.</h4>
            <div className='btn_div'>
                <button className='resume_btn'>
                    resume
                </button>
                <IconButton> <GitHub style={{fontSize:40}}/></IconButton>
                <IconButton > <LinkedIn style={{fontSize:40}}/></IconButton>
            </div>
        </div>)
}

export default AboutPage

