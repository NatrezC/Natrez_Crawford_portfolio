import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Wobble from 'react-reveal/Wobble';
import './About.css'

class About extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <div className="about-section" id="about">
                    <h1>About</h1>
                    <img 
                        src="/images/Me.jpg"
                        alt="avatar"
                        style={{ height: '250px', border: '3px solid black', background: 'grey', borderRadius: '30px' }}
                        />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                    pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                    Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
                    in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
                    vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
                    Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat
    faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. </p>
                </div>
            
                
            </div>
        );
    }
}

export default About;
