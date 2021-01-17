import React, { Component } from 'react'
import { render } from '@testing-library/react';
import { Link } from 'react-scroll'
import './Navbar.css'

class Header extends Component {
    state = {};
    render(){
        return (
            <div className='navbar'>
                <div className="links">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >About</Link>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >Projects</Link>
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
        )
    }
}

export default Header