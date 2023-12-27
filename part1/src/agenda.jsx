import { useState } from 'react'

const Agenda = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleChangeInput = (e) =>{
    setNewName(e.target.value)
  }

  const handleClickButon = (e) =>{
    e.preventDefault()
    if()
    const newPerson = {
        name: newName
    }
    setPersons(persons.concat(newPerson))
    setNewName(" ")
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleChangeInput}  value={newName} />
        </div>
        <div>
          <button onClick={handleClickButon}   type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
            { persons.map( person => <li key={person.name}>{person.name}</li>)}
        </ul>
      
    </div>
  )
}

export default Agenda