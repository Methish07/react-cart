import React from 'react'
import './contact.css'
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
const Contact = () => {
    return (
        <div id="contact">
            
            <img src="https://www.foodshop.pk/images/logo.png"></img>
            <h1>
We’re Always Ready to Meet Your Food Orders

Reach out to us through any of these support channels</h1>
            <h1><MailIcon fontSize="large"></MailIcon>mail-id:jbahjaj@hmail.com</h1>
            <h1><CallIcon fontSize="large"></CallIcon>mob no:-19875367890</h1>
        </div>
    )
}

export default Contact
