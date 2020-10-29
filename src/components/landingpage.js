import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style ={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                     <img 
                     src="https://static.thenounproject.com/png/962492-200.png"
                     alt="avatar"
                     className="avatar-img"
                     /> 

                      <div className="banner-text">
                          <h1>Full Stack Web Developer</h1>
                          <hr/>
                          <p>HTML/CSS | Bootstrap | JavaScript | React | C# | Microsoft SQL</p>
                          <div className="social-links">

                              {/* LinkedIn */}
                              <a href="https://www.linkedin.com/in/michael-jones-quering/" rel="noopener noreferrer" target="_blank">
                                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                              </a>

                               {/* GitHub */}
                               <a href="https://github.com/JonesQuering" rel="noopener noreferrer" target="_blank">
                                  <i className="fa fa-github-square" aria-hidden="true"/>
                              </a>

                          </div>
                          </div> 
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;