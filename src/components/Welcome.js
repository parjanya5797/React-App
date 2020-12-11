import React,{ Component } from 'react'
//Class Component
class Welcome extends Component
{
    render(){
    return (
       <div>
            <h1>This is from Welcome Class {this.props.name}</h1>
            {this.props.children}
       </div>
    );
    }
}

export default Welcome;