import React, { Component } from 'react'

 class Input extends Component {
    constructor(props)
    {
        super(props)
    }
    render() {
        return (
            <div>
                <input name={this.props.name} value={this.props.value} onChange={this.props.onChange}/>
            </div>
        )
    }
}
export default Input
