import React from 'react';

const About=(props)=>
{  
  return(<div>
    <h2>this is about</h2>
    <button onClick={()=>{props.history.push('/')}}>Switch Tab</button>
    </div>
  )
}
export default About