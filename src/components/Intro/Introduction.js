import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Wobble from 'react-reveal/Wobble';
import './Introduction.css'

class Introduction extends React.Component {
    state={}
    render() {
        return (
            <div>
                    <div className="main-section" id="intro">
                        <Fade left >
                            <h1>Hi! My name is <span> Natrez Crawford</span></h1>
                            <h2>and I am a <span>Full Stack Software Engineer</span></h2>
                            
                        </Fade>
                        
                    </div>
                
            </div>
        );
    }
}

export default Introduction;


