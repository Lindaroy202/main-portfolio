import React from 'react'
import './Footer.css'
import { faFacebook, faLinkedin,  faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    /* SOCIALS STATIC DATA */
    let socialDetails = [ { icon: faFacebook, link: 'https://www.facebook.com/lindy.roy.9' },
                          { icon: faLinkedin, link: 'https://www.linkedin.com/in/linda-awasiri-482536204/' },
                        //   { icon: faGithub, link: 'https://github.com/Lindaroy202' },
                          { icon: faInstagram, link: 'https://www.instagram.com/lindyroy/' } ]

    /* GET CURRENT YEAR */
    // let currentYear = new Date().getFullYear();

    /* RENDER SOCIAL ICONS */
    const getSocials = () => {
        return (socialDetails.map((social,index) => (
            <a rel="noopener noreferrer" key={index} href={social.link} target="_blank" >
                <FontAwesomeIcon className="social-icon" icon={social.icon} />
            </a>
        )));
    }

    return (
        <div className="main-footer-container">
            <div className="main-footer-content">
                <div className="main-footer-message">
                    {/* <span> All rights reserved © { currentYear } </span> */}
                </div>
                <div className="main-footer-socials">
                    { getSocials() }
                </div>
            </div>
        </div>
    )
}

export default Footer;
