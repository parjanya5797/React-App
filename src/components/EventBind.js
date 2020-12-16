import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }
// Binding in Constructor
        this.clickHandler = this.clickHandler.bind(this); 
    }
    // Traditional Approach
    // clickHandler(){
    //     this.setState({
    //         message:'Welcome'
    //     })
    // }
// New Approach(Arrow Function)
// Class Property as Arrow Functions
    clickHandler = () => {
        this.setState({
            message:"Welcome User"
        });
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* //Binding in render Method */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* Using Arrow Function in render Method */}
                {/* <button onClick={() => this.clickHandler()}>Click Me</button> */}
                {/* Binding In The Constructor (Best Practice) */}
                <button onClick={this.clickHandler}>Click Me Again</button>
            </div>
        )
    }
}

export default EventBind
