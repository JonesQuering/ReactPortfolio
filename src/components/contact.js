import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className ="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Michael Jones-Quering</h2>
                        <img
                        src="https://static.thenounproject.com/png/962492-200.png"
                        alt="avatar"
                        style={{height: '250px'}} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Thanks for taking the time to check out my portfolio, Feel free to contact me via email and connect on linkedin. I'm looking forward to talking more and ready to answer any questions you may have. Have a great day thanks again. </p>



                    </Cell>
                    <Cell col={6}>
                      <h2>Contact Me</h2>
                      <hr/> 

                      <div className="contact-list">
                      <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                               <i className="fa fa-envelope-square" aria-hidden="true"/>
                            jonesquering@gmail.com
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', textAlign: '' }}>
                               <i className="fa fa-linkedin" aria-hidden="true"/>
                               https://www.linkedin.com/in/michael-jones-quering/
                            </ListItemContent>
                        </ListItem>
                        
                        </List>

                          </div> 
           



                    </Cell>
                    </Grid> 
            </div>
        )
    }
}
export default Contact;