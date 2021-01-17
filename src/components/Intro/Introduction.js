import React from 'react';
import Fade from 'react-reveal/Fade';
import Wobble from 'react-reveal/Wobble';

class Introduction extends React.Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className="intro">
                        <Fade left >
                            <h1>Hi! My name is <span>Natrez Crawford</span></h1>
                            <h2>and I am a <span>Full Stack Software Engineer</span></h2>
                        </Fade>
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
            </div>
        );
    }
}

export default Introduction;


