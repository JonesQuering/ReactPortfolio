import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    
                    <Cell col={4}>
                    <div style={{ textAlign: 'center'}}>
                        <img
                        src="https://www.shareicon.net/data/512x512/2016/05/24/770104_man_512x512.png"
                        alt="avatar"
                        style={{height: '200px'}}
                        />
                    </div>
                        <h2 style={{paddingTop: '2em'}}>Michael Jones-Quering</h2>
                        <h4 style={{color: 'grey'}}>Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p> Hello I am a junior developer looking for a exciting start. Follow along my journey by connecting with me on the contact page. There are many great things on the horizon. Let's say you just so happen to be in need of a developer, I am a sponge very adaptive and flexible to learn and enhance my skillset. Currently seeking a role on a solid development team willing to push me to continually strive for excellance. Utilizing my broad experience in customer service, effective comunication is a solid skill I bring to the table. A can do attitude and willing to listen no matter the intensity or stress the day may bring. Teamwork and the ability to fill in when and where it is needed.</p>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                    <h2>Education / Certification</h2>


                    <Education
                    startYear={2020}
                    endYear={2020}
                    schoolName="Claim Academy"
                    schoolDescription="C#/.Net full stack development bootcamp, Where I learned all the necessary aspects of the software development lifecycle. " />

                    <Education
                    startYear={2019}
                    endYear={2019}
                    schoolName="Coursera"
                    schoolDescription="Google Technical Support Fundementals" />

                    <Education
                    startYear={2015}
                    endYear={2021}
                    schoolName="Army National Guard"
                    schoolDescription="Basic Training and Advance individual training for field artillery automated tactical data systems specialist." />
                    <hr style={{borderTop: '3px solid #e22947'}}/>

                    <h2>Experience</h2>
                    <Experience 
                    startYear={2019}
                    endYear={2020}
                    jobName="Server / Banquet Server"
                    jobDescription="Maggiano's Little Italy"/>

                    <Experience 
                    startYear={2017}
                    endYear={2019}
                    jobName=" Senior Sales Consultant"
                    jobDescription="Office Depot inc."/>

                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <h2>Skills</h2>

                    <Skills 
                    skill="C#"
                    progress={50}
                    />
                     <Skills 
                    skill="HTML/CSS"
                    progress={50}
                    />
                    <Skills 
                    skill="Javascript"
                    progress={40}
                    />
                   
                    <Skills 
                    skill="SQL"
                    progress={40}
                    />
                     <Skills 
                    skill="React"
                    progress={25}
                    />

                    
                    



                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;