import React from 'react';

export const PhotoFrame = (propes) => {
   return (
   <div className='photoframe'>
        <img src={propes.url}></img>
        <div className='caption'>
            {propes.title}
        </div>
    </div>
   )
   
}
