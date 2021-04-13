import React from 'react';
import FooterColumn from '../FooterColumn/FooterColumn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'
 
 

const Footer = () => {
    const noNamed = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    const services = [
        {name: "Emergency Dental Care" , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterColumn key={1} menuTitle={""} menuItems={noNamed}/>
                    <FooterColumn key={2} menuTitle="Services" menuItems={services}/>
                    <FooterColumn key={3} menuTitle="Oral Health" menuItems={oralHealth}/>
                    <FooterColumn key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                             <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon   /></a></li> {/*//faInstagram, faGooglePlusG */}
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon  /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon  /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="contactNumber">+88-01615742473</button>
                        </div>
                    </FooterColumn>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;