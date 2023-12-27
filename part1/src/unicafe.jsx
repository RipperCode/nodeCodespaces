import { useState } from "react";



const Button = (props)=>{
    return <button onClick={props.handleClick}>{props.text}</button>
            
}
const Title = ({title}) =>{
    return <h1>{title}</h1>
}


const StatisticLine = (props) =>{
    return <tr>
                <td>{props.text}</td>
                <td>{props.value}</td>
            </tr> 
    
}

const Unicafe = ()=>{
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
    let suma = good + neutral + bad
   
    const handleClickGood = ()=>{
        setGood(good + 1 )
    }
    const handleClickNeutral = ()=>{
        setNeutral(neutral + 1 )
    }
    const handleClickBad = ()=>{
        setBad(bad + 1 )
    }

    if (suma == 0){
        return <>
                <Title title='Unicafe'/>
                <Button handleClick= {handleClickGood} text='good' /> 
                <Button handleClick= {handleClickNeutral} text='neutral' /> 
                <Button handleClick= {handleClickBad} text='Bad' />
                <h2>Statistics</h2>
                <p>No feedback given</p>
                </>
    }
    return <>
            <Title title='Unicafe'/>
            <Button handleClick= {handleClickGood} text='good' /> 
            <Button handleClick= {handleClickNeutral} text='neutral' /> 
            <Button handleClick= {handleClickBad} text='Bad' />
            <h2>Statistics</h2>
            <table>
                <StatisticLine text='Good' value={good}/>
                <StatisticLine text='Neutral' value={neutral}/>
                <StatisticLine text='Bad' value={bad}/>
                <StatisticLine text='All' value={suma}/>
                <StatisticLine text='Average' value={(suma/3).toFixed(2)}/>
                <StatisticLine text='Positive' value={(good / suma * 100).toFixed(2) + '%'}/>
            </table>
            </>
}

export default Unicafe