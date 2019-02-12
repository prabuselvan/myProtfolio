import React from 'react';
import './image.css';
const Image = (props)=> {
    return (
        <div className='imagediv'>
            <img className='image-icon' {...props}/>
        </div>
    )
}
export default Image;