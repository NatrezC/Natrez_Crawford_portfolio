import React, { Component } from 'react'
import { render } from '@testing-library/react';
import './Navbar.css'

class Header extends Component {
    state = {};
    render(){
        return (
            <div className='navbar'>
                <ul>
                    <li>About</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}

export default Header
