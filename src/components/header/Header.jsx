
import "./Header.css"
import { FaAlignLeft } from "react-icons/fa6";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { useEffect, useState } from "react";
import {RemoveScroll} from 'react-remove-scroll';
import Nav from "../nav/Nav";

const Header = () => {
const [isMenuOpen, setisMenuOpen] = useState(false)
const [isSticky,  setIsSticky] = useState(false);

const toggleMenu = () =>{
  setisMenuOpen(!isMenuOpen)
}

const handleMenuClick=()=>{
  setisMenuOpen(false)
}
const hendleScroll =()=>{
 setIsSticky(window.scrollY>0)

}

useEffect(() => {
  window.addEventListener("scroll",hendleScroll)
  return () => window.removeEventListener( "scroll", hendleScroll);
}, [])



  return (
    <header className={isSticky ? "header isSticky":"header"}>
        <div className="container">
            <div className="header-wrapper">
                <a href="" className="logo">Giga</a>
                <RemoveScroll enabled={isMenuOpen}>
               <Nav isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick}/>
               </RemoveScroll>
                <div className="nav-menu-btn" onClick={toggleMenu}>
                 {isMenuOpen ? <FaArrowUpWideShort/> : <FaAlignLeft/>}  

                </div>
            </div>
        </div>
    </header>
  )
}

export default Header