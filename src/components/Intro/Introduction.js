import { LocalDining } from '@material-ui/icons';
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './Introduction.css'

class Introduction extends Component{
    render() {
        return (
            <div className="main-section">
                <div style={{width: '100%', margin: 'auto'}}>
                    <Grid className="intro-grid">
                        <Cell col={12}>
                            <img
                                src="/images/avatar.png"
                                alt="avatar"
                                className="avatar-img"
                            />
                            <div className="banner-text">
                                <h1>Full Stack Software Engineer</h1>
                                <hr />
                                <p>
                                    HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB
                                </p>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Introduction;










// import React, { Component } from 'react';
// import Fade from 'react-reveal/Fade';
// import Wobble from 'react-reveal/Wobble';
// import './Introduction.css'

// class Introduction extends React.Component {
//     state={}
//     render() {
//         return (
//             <div>
//                     <div className="main-section" id="intro">
//                         <Fade left >
//                         <h1><strong>Hi! My name is <span>Natrez Crawford</span></strong></h1>
//                         <h2><strong>and I am a <span>Full Stack Software Engineer</span></strong></h2>
                            
//                         </Fade>
                        
//                     </div>
                
//             </div>
//         );
//     }
// }

// export default Introduction;


