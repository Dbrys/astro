import React from 'react';

const Characters = ({ characters }) => {
 return (
   <ul>
         {characters.map(charac => {
             return (
                 <li key={charac.id}>
                     <p>{charac.name}</p>
                     <img style={{ maxWidth: 200 }} src={charac.img_url} alt={charac.name}/>
                 </li>
             )
         })}
   </ul>
 )
}

export default Characters;