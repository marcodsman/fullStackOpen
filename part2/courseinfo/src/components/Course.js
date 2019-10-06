import React from 'react'
var shortid = require('shortid')

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <p>{props.part.name} {props.part.exercises}</p>
    )
}

const Content = ({parts}) => {
    const rows = () => 
        parts.map(part => <Part key={shortid.generate()} part={part} />)
    
    return (
        <div>
            {rows()}
        </div>
    )
}

const Total = ({parts}) => {
    let total = parts.reduce((sum,{exercises}) => sum + exercises, 0);

    return (
        <p>Number of exercises {total}</p>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course;