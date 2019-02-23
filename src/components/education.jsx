import React from 'react';
import './education.css';
const Education = (props)=> {
    return (
        
    <div>

   
        <div className='Education_container' id={props.Education}>

                <hr/>
                <h1 className='education'> EDUCATION </h1>

                <div className='leftEdu EduColumn'>
                     <h2 className='college'> PAVAI ENGINEERING COLLEGE</h2>
                      <h3 className='degree'> BTECH- IT</h3>
                      <h4 className='subject'> Information Technonlogy - 72%</h4>
                </div>

                <div className='eightEdu EduColumn'>

                    <p> Aug 2006 - May 2010 </p>
                </div>

                
        </div>
        <hr className='education_hr'/>
    </div>
       

    )
}
export default Education;