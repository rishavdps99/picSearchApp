import React from 'react';

const Profile=(props)=>
{ console.log(props);
  return(<div>
    <h2>profile with id:{props.match.params.profile_id}</h2>
   

    </div>
  )
}

export default Profile