
import './App.css'

const Hello = (props) => {
  console.log(props)
 
  return (
    <>
      <p>
       
        Hello {props.name}, you are {props.age} years old
      </p>
    </>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='luis' age = '25'/>
      <Hello name='Pedro' age = '40'/>
    </div>
  )
}
export default App
