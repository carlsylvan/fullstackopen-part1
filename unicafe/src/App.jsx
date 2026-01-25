import { useState } from 'react'

// a proper place to define a component
const Button = ({text, onClick}) => {

  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return(
        <div>{text} {value}</div>
  )
}

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

    return (good / totalScore) * 100 + " %"
    }

  return(
    <div>
      <StatisticLine text="good" value={good}></StatisticLine>
      <StatisticLine text="neutral" value={neutral}></StatisticLine>
      <StatisticLine text="bad" value={bad}></StatisticLine>
      <StatisticLine text="all" value={countAll()}></StatisticLine>
      <StatisticLine text="average" value={countAverage()}></StatisticLine>
      <StatisticLine text="positive" value={positivePercentage()}></StatisticLine>
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

      <Button text="good" onClick={() => handleClick(setGood)}></Button>
      <Button text="neutral" onClick={() => handleClick(setNeutral)}></Button>
      <Button text="bad" onClick={() => handleClick(setBad)}></Button>
    </div>

    <div id="statistics">
        <h2>statistics</h2>

    {good + neutral + bad === 0 ? <div>No feedback given</div> :
    <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    }
    </div>
    </>
  )
}

export default App