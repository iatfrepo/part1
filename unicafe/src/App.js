import { useState } from 'react'

const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
    {text}
  </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
  </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  if (all > 0) {
    return (
      <div>
        <table>
        <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={all / 3} />
        <StatisticLine text="positive" value={(good / all * 100) + '%'} />
        </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
      <h3>No feedback given</h3>
    </div>
    )
  }
}

const App = () => {
  
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title1 = 'give feedback'
  const title2 = 'statistics'

  return (
    <div>
      <Header title={title1} />
      <Button onClick={() => setGood(good + 1)} text="good" />
      &nbsp;
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      &nbsp;
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      &nbsp;
      <Header title={title2} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App