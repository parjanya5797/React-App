import React, { Component } from 'react'
 
class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {
        //Using If-Else Conditon
        // if(this.state.isLoggedIn)
        // {
        //     return (
        //         <div>
        //             <h1>Welcome Parjanya</h1>
        //         </div>
        //     )
        // }
        // else
        // {
        //     return (
        //         <div>
        //             <h1>Welcome Guest</h1>
        //         </div>
        //     )
        // }
       
        //Element Variable Approach
        // let message
        // if(this.state.isLoggedIn)
        // {
        //     message = <div>Welcome Admin</div>
        // }
        // else{
        //     message = <div>Welcome User</div>
        // }
        // return (
        //     <div>
        //         {message}
        //     </div>
        // )


        // Ternary Operator Approach
        // return(
        //     this.state.isLoggedIn ?
        //     (<div>Welcome Admin</div>):
        //     (<div>Welcome Guest</div>)
        // )

        //Short Circuit Operator
        return  this.state.isLoggedIn && <div>Welcome Admin</div>

    }
}

export default UserGreeting
