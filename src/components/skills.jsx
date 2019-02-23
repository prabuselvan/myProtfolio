import React from 'react';
import './skills.css';
const Skills  = (props) => {
        return (
            <div className='Skills_container' id={props.Skills}>
                <div className='leftcolumn skill'>
                            <h1 className='skills'> SKILLS </h1>
                            <h3> PROGRAMMING LANGUAGES & TOOLS </h3>

                            <ul className='skillset'>
                                <li>  HTML  </li>
                                <li> CSS  </li>
                                <li> JS  </li>
                                <li> REACT   </li>
                                <li> ROUTER</li>
                                <li> REDUX</li>
                            </ul>
                            <h2 className='projectTitle'> Live Sample Projects</h2>

                            <table> 
                                <tr>    <th> App Name </th>  
                                        <th>  Description  </th>
                                        <th>  Git hub Url   </th> 
                                        <th>  Live Url  </th>  
                                </tr>

                                <tr>
                                    <td> Todo App </td>
                                    <td> Basic Todo App for CRUD Operations in React </td>
                                    <td> https://github.com/prabuselvan/Todo-App.git </td>
                                    <td> https://simpletaskapp.herokuapp.com/ </td>
                                </tr>
                                <tr>
                                    <td> Weather App </td>
                                    <td> Get the Weather forecasting information  in React </td>
                                    <td> https://github.com/prabuselvan/Todo-App.git </td>
                                    <td> https://simpletaskapp.herokuapp.com/ </td>
                                </tr>
                                <tr>
                                    <td> Vidly Movie App </td>
                                    <td> View the movies based on the permission  in React </td>
                                    <td> https://github.com/prabuselvan/Todo-App.git </td>
                                    <td> https://simpletaskapp.herokuapp.com/ </td>
                                </tr>
                            </table>
                </div>


                <div className='rightcolumn skill'>

                </div>
                
            </div>
        )
}

export default Skills;