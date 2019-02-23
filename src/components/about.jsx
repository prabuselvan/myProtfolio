import React from 'react';
import Image from './image';
import heading_icon from '../images/icon.png';
import './about.css';
const About = (props)=> {
    // console.log(props.id);
    const about = '#'+props.About;
    const experience = '#'+props.Experience;
    const education = '#'+ props.Education;
    const skills = '#'+props.Skills;
    return (

        <div className='mainContainer' id='About'>
        
                <div className='left Column'>
                    <Image src={heading_icon} alt='mainimage'/>
                    <div className='headingcontents'>
                        <ul> 
                            <li> <a href={about}>  ABOUT </a> </li>
                            <li> <a href={experience}> EXPERIENCE  </a> </li>
                            <li> <a href= {education}>  EDUCATION </a>  </li>
                            <li> <a href= {skills}>  SKILLS </a>  </li>
                            <li> <a href='£'>  INTERESTS </a>  </li>
                            <li> <a href='£'>  AWARDS </a>  </li>
                        </ul>
                    </div>
                </div>

                <div className='right Column'>
                <p className='note'> This applcation can be viewed on 1680x1050 resolution</p>
                    <div className='mainContent'>
                            <h1 className='profileName'> <span className='fname'>PRABU </span> <span  className='lname'>ELAMURGUSELVAN</span> </h1>
                            <h3 className='details'>JAYANAGAR· BANGALORE,  560069 · (973) 8121-353 · MAILS2PRABUSELVAN15@GMAIL.COM
                            </h3>

                            <p className='synopsis'>  I am a QA and i work on Automation projects like Selenium, QTP, Puppeteer with Jest. I got myself into learning web development and  I worked on building websites using HTML, CSS, JavaScript and React.js.

        </p>

                <div className='socialiconscontainer'>
                            <div className='socialicons'>

                                <a href='https://www.linkedin.com/in/prabu-selvan-69461152/' target='blank'><i className="fa fa-linkedin-square"></i> </a>     
                            </div>  
                            <div className='socialicons'>
                                <a href='https://github.com/prabuselvan' target='blank'> <i className="fa fa-github-square"></i> </a>
                            </div>
                            <div className='socialicons'>
                                <a href='https://twitter.com/prabu89_it' target='blank'> <i className="fa fa-twitter-square"></i> </a>
                            </div>
                            <div className='socialicons'>
                                <a href='£' target='blank'> <i className="fa fa-facebook-square"></i></a> 
                            </div>
                </div>

        </div>
                    
                </div>
        </div>
    )
}

export default About;