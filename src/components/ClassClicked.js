import React, { Component } from 'react'

export class ClassClicked extends Component {

    clickHandler(){
        console.log("You Clicked a Button")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me(Class)</button>
            </div>
        )
    }
}

export default ClassClicked
