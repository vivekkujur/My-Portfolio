import React from 'react'
import "../About/About.css"
import { IconButton } from '@mui/material'
import { GitHub ,LinkedIn} from '@mui/icons-material'
import {about} from '../../portfolio'

function AboutPage() {

    const openResume  = ()=>{
        window.open("https://drive.google.com/file/d/1NgHuE8lt8LksP2UUuGQJbQi2EM3Rh_-z/view?usp=sharing","_blank")
    }

    const openGithub  = ()=>{
        window.open("https://github.com/vivekkujur","_blank")
    }
    const openLinkdin  = ()=>{
        window.open("https://www.linkedin.com/in/vivek-kujur","_blank")
        
    }
    return (
        <div id= 'about' className='about_container'>
            <h1 className='title_style' >Hi , I am {about.name}</h1>
            <h1>{about.role}</h1>
            <h4 className='description_style'>{about.summary}</h4>
            <div className='btn_div'>
                <button className='resume_btn' onClick={openResume}>
                    resume
                </button>
                <IconButton onClick={openGithub}> <GitHub style={{fontSize:40}}/></IconButton>
                <IconButton onClick={openLinkdin}> <LinkedIn style={{fontSize:40}}/></IconButton>
            </div>
        </div>)
}

export default AboutPage

