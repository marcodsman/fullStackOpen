import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(Math.floor(Math.random() * 6 ))
  const [votes, setVotes] = useState( Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0) )

  const handleVote = () => {
      const newVotes = [...votes]
      newVotes[selected]++
      setVotes(newVotes)
  }

  return (
      <div>
        <div>
            <h1>Anecdote of the day</h1>
            {props.anecdotes[selected]}
            <button onClick={handleVote}>Vote</button>
            <button onClick={() => setSelected(Math.floor(Math.random() * 6 ))} >Another Anecdote?</button>
        </div>
        <div>
            <h1>Anecdote with the most votes</h1>
            <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
        </div>
      </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)