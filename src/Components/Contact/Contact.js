import React from 'react'
import '../Contact/Contact.css'
import { Button, IconButton } from '@mui/material'
import { Email } from '@mui/icons-material';

function Contact() {

    const openGmail = () => {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=vivekkujur.jnv@gmail.com", "_blank");
      };
      const callNumber = () => {
        window.location.href = "tel:+917354016686";
      };

  return (
    <div id= 'contact'>
        <h1 className='title_styles'>Contact</h1>
        <div >
                <Button  color = {"black"} variant='outlined' startIcon ={<Email/>}onClick={openGmail} size='large' style={{marginBottom:30 }}>
                    Email
                </Button>
                {/* <button className='email_btn' onClick={callNumber}>
                    Call : +91-7354016686
                </button> */}
               
            </div>
    </div>
  )
}

export default Contact