import React, { Component } from 'react'
import { render } from '@testing-library/react';
import { Link, animateScroll as scroll } from 'react-scroll'
import './Navbar.css'
import Button from '@material-ui/core/Button'

class Header extends Component {
    
    // scrollToTop = () => {
    //     scroll.scrollToTop()
    // }
    render(){
        return (
            <div className='navbar'>
                <div className="links">
                    <div className="list">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >About</Link>
                    </div>
                    <div className="list">
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Projects</Link>
                    </div>
                    <div className="list">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Contact</Link>
                    </div>
                    
                </div>
                {/* <div className="toTheTop" id ="myID">
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={this.scrollToTop}
                    disableElevation
                >SCROLL TO TOP
                </Button>
                </div> */}
                
            </div>
        )
    }
}

export default Header
