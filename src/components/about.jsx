import React from 'react';
import Image from './image';
import heading_icon from '../images/icon.png';
import './about.css';
const About = (props)=> {
    
    return (
       
        <div className='mainContainer'>
        
                <div className='left Column'>
                    <Image src={heading_icon} alt='mainimage'/>
                    <div className='headingcontents'>
                        <ul> 
                            <li> <a href={props.id} >  ABOUT </a> </li>
                            <li> <a href='£'>   EXPERIENCE  </a> </li>
                            <li> <a href='£'>  EDUCATION </a>  </li>
                            <li> <a href='£'>  SKILLS </a>  </li>
                            <li> <a href='£'>  INTERESTS </a>  </li>
                            <li> <a href='£'>  AWARDS </a>  </li>
                        </ul>
                    </div>
                </div>

                <div className='right Column'>
                    <div className='mainContent'>
                            <h1 className='profileName'> <span className='fname'>PRABU </span> <span  className='lname'>ELAMURGUSELVAN</span> </h1>
                            <h3 className='details'>JAYANAGAR· BANGALORE,  560069 · (973) 8121-353 · MAILS2PRABUSELVAN15@GMAIL.COM
                            </h3>

                            <p className='synopsis'> I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.

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