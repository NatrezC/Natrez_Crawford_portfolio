import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'


function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="list">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={1000}
                        ><span><strong>Natrez Crawford</strong></span></Link>
                    </div>
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

