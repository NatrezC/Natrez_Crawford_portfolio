import React, { Component } from 'react'
import { render } from '@testing-library/react';
import { Link, animateScroll as scroll } from 'react-scroll'
import './Navbar.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

class Header extends Component {
    state = {};
    scrollToTop = () => {
        scroll.scrollToTop()
    }
    render(){
        return (
            <div className='navbar'>
                <ArrowUpwardIcon
                    className="icon"
                    onClick={this.scrollToTop}
                />
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
                
            </div>
        )
    }
}

export default Header
