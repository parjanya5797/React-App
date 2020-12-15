import React from 'react'

// const Greet = ({name,heroName,children}) => 
// {
// return (
//     <div>
//         <h1>Hello {name} a.k.a. {heroName}</h1>
//     {children}
//     </div>
// );
// }

const Greet = (props) => 
{
    const {name,heroName,children} = props;
return (
    <div>
        <h1>Hello {name} a.k.a. {heroName}</h1>
    {children}
    </div>
);
}


// const Greet = () => 
// {
//     return (
//         <div>
//             <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </div>
//     );
// }

export default Greet;
