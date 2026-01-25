import { useState } from 'react'

// a proper place to define a component
const Statistics = ({good, neutral, bad}) => {

   const countAll = () => {
      return good + neutral + bad
  }

   const countAverage = () => {
    const goodScore = 1
    const neutralScore = 0
    const badScore = -1

    const totalScore = good + neutral + bad

    if (totalScore === 0) {
      return 0
    }

  return (
    good * goodScore +
    neutral * neutralScore +
    bad * badScore
  ) / totalScore
  }


  const positivePercentage = () => {

    const totalScore = good + neutral + bad

    if (totalScore === 0) return 0

    return (good / totalScore) * 100
  }


  return(
    <div id="statistics">
          <h2>statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {countAll()}</div>
      <div>average {countAverage()}</div>
      <div>positive {positivePercentage()}</div>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (setFeedback) => {
    setFeedback(prev => prev + 1)
  }


  return (
    <>
    <div id="feedback">
        <h2>give feedback</h2>

      <button onClick={() => handleClick(setGood)}>good</button>
      <button onClick={() => handleClick(setNeutral)}>neutral</button>
      <button onClick={() => handleClick(setBad)}>bad</button>
    </div>

    <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        </>
  )
}

export default App