import React  from 'react';
import './Footer.css';
import { ExternalLink } from 'react-external-link';

//En enkel footer
export const Footer = () => {

    return (
        <div> 
            <p className="footerText">@SolLotta med <ExternalLink href="https://superheroapi.com/ids.html"> SuperHero API</ExternalLink></p> 
          
        </div>
    )
}


export default Footer;