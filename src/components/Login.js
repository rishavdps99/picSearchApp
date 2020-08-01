import React, { Component } from 'react'
import Input from './Input'

export default class Login extends Component {
    constructor(props)
    {
        super(props)

        this.state={
            username:"",
            rollnumber:"",
            email:"",
            show:0
        }
    }


    handleInput=(event)=>{
        this.setState({
   [event.target.name]:event.target.value
        })
        console.log('handleInput')
    }


handlesubmit=(event)=>{
    this.setState({
       show:!this.state.show
    })
}

    render() {
        return (
            <div>
            <form onSubmit={this.handlesubmit}>
            <label>User</label>
            <Input name="username" value={this.state.username} onChange={(e)=>this.handleInput(e)} />
            <label> Roll Number</label>
            <Input name="rollnumber" value={this.state.rollnumber} onChange={(e)=>this.handleInput(e)}/>
            <label> Email</label>
            <Input name="email" value={this.state.email} onChange={(e)=>this.handleInput(e)}/>  
            <div className="waves-effect waves-light btn-large">
            <button>onSubmit</button>
            </div>
            </form>
                {this.state.show ?
                    <Input name="userId" value={this.state.value} onChange={(e)=>this.handleInput(e)} />:
                    null
                }
            </div>
        );
    };
}
