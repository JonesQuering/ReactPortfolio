import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class About extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }
    toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background:'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover'}} >React Portfolio</CardTitle>
                <CardText>
                Follow the link to see the code used to make this page.
                </CardText>
                <CardActions border>
                    <div  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
                <Button it colored><a href="https://github.com/JonesQuering/ReactPortfolio" target="_blank">Github</a></Button></div>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
            </div>
        )
    } else if(this.state.activeTab === 1) {
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background:'url(data:image/png;base64,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) center / cover'}} >GreenBaby </CardTitle>
                <CardText>
                My capstone project in Asp.Net Mvc format. An application to help simplify gardening.  
                </CardText>
                <CardActions border>
                    <div  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
                <Button><a href="https://github.com/JonesQuering/GreenBaby" target="_blank">Github</a></Button></div>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
            </div>
        )
    }
    else if(this.state.activeTab === 2) {
        return(
            <div>TBD</div>
        )
    }
}
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                 <Tab>React</Tab>
                 <Tab>C#/.Net</Tab>
                 <Tab>Java</Tab>
                    
                </Tabs>
               
                   <Grid>
                       <Cell col={12}>
                          <div className="content">{this.toggleCategories()}</div> 
                       </Cell>
                   </Grid>
                   
                
            </div>
        )
    }
}
export default About;