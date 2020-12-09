import React from 'react'
//Using JSX
const Hello = () => {
return React.createElement('div',
    {id:"hello",className:"new class hello"},
    React.createElement('h1',null,"Hello WOrld from Hello Class"));
}

export default Hello;