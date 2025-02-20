import React from 'react'
import '../Contact/Contact.css'
import { IconButton } from '@mui/material'

function Contact() {
  return (
    <div>
        <h1 className='title_styles'>Contact</h1>
        <div >
                <button className='email_btn'>
                    Email
                </button>
                <button className='email_btn'>
                    Mobile
                </button>
            </div>
    </div>
  )
}

export default Contact