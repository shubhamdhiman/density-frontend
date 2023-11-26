import React from 'react'
import logo from '../../assets/icons/logo.png'
import {FaFacebook, FaLinkedin, FaInstagram, FaTwitter} from 'react-icons/fa'
import { FooterS, FooterMiddle, FooterUl, FooterLi, FooterDesc, FooterSocial } from '../../styled/FooterStyle'
function Footer() {
  return (
    <FooterS> 
        <div><img src={logo} alt="logo" /></div>
        <FooterMiddle>
                <FooterUl>
                    <FooterLi>Blog</FooterLi>
                    <FooterLi>Fees</FooterLi>
                    <FooterLi>Leaderboard</FooterLi>
                    <FooterLi>Careers</FooterLi>
                    <FooterLi>Contact Us</FooterLi>
                    <FooterLi>Privacy Policy</FooterLi>
                </FooterUl>
            <FooterDesc>
            Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. 
            </FooterDesc>
            </FooterMiddle>
        <FooterSocial>
          <FaFacebook size={30} style={{ margin: '20px', color:'white' }} />
          <FaTwitter size={30} style={{ margin: '20px', color:'white' }} />
          <FaLinkedin size={30} style={{ margin: '20px', color:'white' }} />
          <FaInstagram size={30} style={{ margin: '20px', color:'white' }} />
        </FooterSocial>
    </FooterS>
  )
}

export default Footer
