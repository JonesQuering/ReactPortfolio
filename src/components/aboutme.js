import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <Grid> 
            
            <Cell col={4}>
            <div className="title">
            
                <img alt="Headshot" src={require('./portpic.jpg')}
                className="aboutmeimage-img" />
                <h1>Michael Nesta Jones-Quering</h1>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            </div>
            </Cell>
            <Cell col={8}>
<div className="aboutmepar" style={{paddingTop: '5em'}}>
    <p>Hello again, Thanks for perusing my portfolio. You must be curious about the developer behind the keyboard.
         This is my first year learning and practicing software development. I began my journey in 2019, curious about the ins and outs of computers.
    
    
          I took a course on Coursera called Google fundementals of computer support. It challenged me and I found a passion when everything else I tried seemed bleek.
          From this point on I knew I belonged in the tech industry. My next step was to find a school or some way to learn more about this new passion of mine.
           I looked into the options available to me and heard about the Vet Tec pilot program.
    </p>
    <p>
           I put out some feelers at a few different programs and did my homework. Luckily, I had a introduction to some of the topics that most of the programs were focused on.
             I decided to try something new again and found a software bootcamp that was heavily praised online. They had a test and I was up for the challenge even though I had no previous experience.
              I had to learn some begginer concepts and the Java language.
    </p>
    <p>
             It took some time, but I got the hang of it and was challenged. I was suprised at how much fun I had in the process.
              When the time came for the next cohort I jumped in head-first. At Claim academy I studied the C#/.Net stack and was able to create my own full stack web application.
               Ever since my graduation I've been searching for the right job opportunity and excited to continue learning and growing. I'd love to hear some constructive feedback or about some cool opportunies. Have a great day!
    </p>
</div>
            </Cell>

            </Grid>
        )
    }
}
export default About;