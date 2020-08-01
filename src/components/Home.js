import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Home extends Component {
   
/*state={
    users:[
        {id:123,name:"rishav"},
            {id:125,name:"lesner"},
            {id:234,name:"maverick"},
        ]
}*/
    
    render()
    {
        const stocks=this.state.users.map(item=>{
             return <Link to={"/"+item.id}><h2>{item.name}</h2></Link>
        })
        return ( 
            <div>
                {stocks}
            </div>
        )
    }
}

export default Home
