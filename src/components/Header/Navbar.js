import React, { Component } from 'react'
import { render } from '@testing-library/react';
import { Link } from 'react-scroll'
import './Navbar.css'

class Header extends Component {
    state = {};
    render(){
        return (
            <div className='navbar'>
                <ul>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >About</Link>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Projects</Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Contact</Link>
                </ul>
            </div>
        )
    }
}

export default Header
