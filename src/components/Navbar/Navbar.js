import { StepButton } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'
import './Navbar.css'


function Navbar() {
    // set the state of the clicked button and change it when clicked
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    //handle the click to toggle the icons back and forth
    const handleClick = () => setClick(!click);
    //handle closing of the menu icon when clicked
    const closeMobileMenu = () => setClick(false);

    //shows button when screen is less than 960
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <Link
                            activeClass="active"
                            to="intro"
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={1000}
                        ><span><strong>Natrez Crawford</strong></span></Link>
                    </div>
                    <div className="menu-icon" onClick={handleClick}>
                        {/* if clicked then toggle between icons */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <div className="nav-links" onClick={closeMobileMenu}>
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={1000}
                                ><span><strong>About</strong></span></Link>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <div className="nav-links" onClick={closeMobileMenu}>
                                <Link
                                    activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={1000}
                                ><span><strong>Project</strong></span></Link>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <div className="nav-links" onClick={closeMobileMenu}>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={1000}
                                ><span><strong>Contact</strong></span></Link>
                            </div>
                        </li>
                    </ul>
                        
                </div>
            </nav>
        </>
    )
}

export default Navbar








// import React, { Component } from 'react'
// import { render } from '@testing-library/react';
// import { Link, animateScroll as scroll } from 'react-scroll'
// import './Navbar.css'
// import Button from '@material-ui/core/Button'

// class Navbar extends Component {
    
//     scrollToTop = () => {
//         scroll.scrollToTop()
//     }
//     render(){
//         return (
//             <div className='navbar' >
//                 <div className="title" id="myID">
//                     <h3 onClick={this.scrollToTop}>
//                         <strong>Natrez Crawford</strong>
//                     </h3>
//                     {/* <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={this.scrollToTop}
//                         disableElevation
//                     >SCROLL TO TOP
//                 </Button> */}
//                 </div>
//                 <div className="links">
//                     <div className="list">
//                         <Link
//                             activeClass="active"
//                             to="about"
//                             spy={true}
//                             smooth={true}
//                             offset={-30}
//                             duration={1000}
//                         ><span><strong>About</strong></span></Link>
//                     </div>
//                     <div className="list">
//                         <Link
//                             activeClass="active"
//                             to="projects"
//                             spy={true}
//                             smooth={true}
//                             offset={-30}
//                             duration={1000}
//                         ><span><strong>Projects</strong></span></Link>
//                     </div>
//                     <div className="list">
//                         <Link
//                             activeClass="active"
//                             to="contact"
//                             spy={true}
//                             smooth={true}
//                             offset={-30}
//                             duration={1000}
//                         ><span><strong>Contact</strong></span></Link>
//                     </div>
                    
//                 </div>
//             </div>
//         )
//     }
// }

// export default Navbar

