import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    incrementValue()
    {
        // this.setState({
        //     count:this.state.count + 1
        // },
        // () => {
        //     console.log("callback Value",this.state.count)
        // }
        // )
        this.setState(prevState => ({
            count:prevState.count + 1
        }))
        console.log(this.state.count)
    }

    decrementValue()
    {
        this.setState({
            count:this.state.count - 1
        });
    }

    incrementFive()
    {
        this.incrementValue()
        this.incrementValue()
        this.incrementValue()
        this.incrementValue()
        this.incrementValue()
    }

    render() {
        return (
            <div>
               <h1> Count -{this.state.count}</h1>
               <br/>
                <button onClick={()=>this.incrementValue()}>Increase Value</button>
                <button onClick={() => this.decrementValue()}>Decrease Value</button>
                <button onClick={() => this.incrementFive()}>Increase Value By 5</button>
   </div>
        )
    }
}

export default Counter
