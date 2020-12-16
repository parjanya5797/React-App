import React from 'react'
import Person from './Person'
function NameList() {
    const persons =[
        {
            id: 1,
            name:'Bruce',
            age:20,
            skill:"React"
        },
        {
            id: 2,
            name:'Amanda',
            age:21,
            skill:"Angular"
        },
        {
            id: 3,
            name:'Ram',
            age:31,
            skill:"Frontend"
        },
        {
            id: 4,
            name:'Tony',
            age:28,
            skill:"Machine Learning"
        },
        {
            id: 5,
            name:'Jenifer',
            age:25,
            skill:"Modeling"
        }
    ] 
    const personList = persons.map(person => 
        <Person person={person}></Person>
    )
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
