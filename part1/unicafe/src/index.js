import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, value, unit}) => {
    return (
        <tr>
            <td>{text}</td><td>{value}{unit}</td>
        </tr>
    )
}

const Button = ({inc, text}) => {
    return (
        <button onClick={inc}>{text}</button>
    )
}

const Statistics = ({good, neutral, bad}) => {
    if(good===0 && neutral===0 && bad===0){
        return (
            <div>
                <h2>statistics</h2>
                <p>No feedback given</p>
            </div>
        )
    }
    return (
        <div>
            <h2>statistics</h2>
            <table>
                <tbody>
                    <Statistic text="good" value={good} />
                    <Statistic text="neutral"  value={neutral} />
                    <Statistic text="bad" value={bad} />
                    <Statistic text="all" value={good+neutral+bad} />
                    <Statistic text="average" value={good-bad} />
                    <Statistic text="postive" unit="%" value={Math.floor(good/(good+neutral+bad) * 100)} />
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button inc={()=> setGood(good + 1)} text="good"/>
        <Button inc={()=> setNeutral(neutral+1)} text="neutral" />
        <Button inc={()=> setBad(bad + 1)} text="bad" />
        <Statistics good={good} bad={bad} neutral={neutral} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)