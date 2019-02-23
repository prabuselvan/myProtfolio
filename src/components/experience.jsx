import React from 'react';
import './experience.css';
const  Experience = (props)=> {
// const Experience=+props.Experience
    return(
          
        <div className='Experience_container' id={props.Experience} >

            <hr className='topline'/>
            <h1>EXPERIENCE</h1>
            <div className='leftExp ExpColumn'>
                <h2> SENIOR SOFTWARE ENGINEER </h2>

                <h2 className='companyName'> ACCION LABS </h2>

                <p className='description'>
                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                </p>
            </div>

            <div className='righExp ExpColumn'>
                 <h3> Sep 2017 - Present </h3>
            </div>

            <div className='leftExp ExpColumn'>
                <h2> QUALITY ENGINEER </h2>

                <h2 className='companyName'> CRIMSONLOGIC PVT LTD </h2>

                <p className='description'>
                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                </p>
            </div>

            <div className='righExp ExpColumn'>
                 <h3> Apr 2016 - June 2017 </h3>
            </div>

            <div className='leftExp ExpColumn'>
                <h2> QUALITY ANALYST </h2>

                <h2 className='companyName'>HCL TECHNOLOGIES </h2>

                <p className='description'>
                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                </p>
            </div>

            <div className='righExp ExpColumn'>
                 <h3> Sep 2014 - Feb 2016 </h3>
            </div>

            <div className='leftExp ExpColumn'>
                <h2> QUALITY ENGINEER </h2>

                <h2 className='companyName'>ACCENTURE SERVICES</h2>

                <p className='description'>
                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                </p>
            </div>

            <div className='righExp ExpColumn'>
                 <h3> Oct 2013 - Oct 2014 </h3>
            </div>

            {/* <hr/> */}
            
        </div>
    )
}

export default Experience;