import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('Ram','20')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
