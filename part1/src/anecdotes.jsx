import { useState } from "react"

const Button =({handleClick, text}) =>{
    return <button onClick={handleClick}>{text}</button>
}

    
const Anecdotes =() =>{
    const [selected, setSelected] = useState(-1)
    const [vote, setVote] = useState(new Array(10).fill(0))
    const [maxVote, setmaxVote] = useState(-1)
    console.log(vote)

    const handleClick = ()=>{
        const max = anecdotes.length -1
        let RandomNumb = Math.round(Math.random() * max)
        setSelected(RandomNumb)
    }

    const handleClickVote = () =>{
        if (selected != -1){
            let copyVote = [...vote]
            copyVote[selected] += 1
            let maxVoted = copyVote.indexOf(copyVote.reduce((a, b) => a > b ? a : b));
            setmaxVote(maxVoted)
            setVote(copyVote)
        }
        

    }
    
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
      ]
      
      return <>
            <p>{anecdotes[selected]}</p>
            <p>has {vote[selected]} votes</p>
            <Button handleClick={handleClick} text='next anecdote'/>
            <Button handleClick={handleClickVote} text='Vote'/>
            <h2>Anecdote with most votes</h2>
            <p>{anecdotes[maxVote]}</p>
            
            
            </>
}

export default Anecdotes