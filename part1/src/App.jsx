const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Header = ({course}) => {

    return(
      <h1>{course}</h1>
    )
  }

  const Part = ({part}) => {
    return(
    <p>
      {part.name} {part.exercises}
    </p>
    )
  }

  const Content = () => {
    return(
      <>
        <Part part={part1}/>
        <Part part={part2}/>
        <Part part={part3}/>
      </>
    )
  }

  const Total = () => {
    return(
       <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p> 
    )
  }

  return (
    <div>
      {/* <h1>{course}</h1>s
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}

      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App