import { followLinks, infoLinks } from "../../data/FooterData"
import "./Footer.css"
import FooterLinkGroup from "./FooterLinkGroup"
 

const Footer = () => {

   const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
        <div className="container footer-wrapper">
            <div className="about-group">
                <h2>Giga</h2>
                <p>Front-end & Back-end Developer</p>
                <a href="#about">About me</a>
            </div>
            <div className="hr"></div>
                <FooterLinkGroup title="More" links={infoLinks} isSocial={false}/>
            <div className="hr"></div>
                <FooterLinkGroup title="Follow" links={followLinks} isSocial={true}/>
        </div>
        <p className="footer-copyright">
     © <span className="year">{currentYear}</span> by Coding Snow. All rights reserved.
    
    </p>
    </footer>
  )
}

export default Footer