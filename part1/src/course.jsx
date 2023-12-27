
const Course = ({courses}) =>{
    console.log(courses)
    
    return <>
            <h1>Web Development Curriculum</h1>
            {courses.map(c => (
            <article key={c.id}>
                <h2>{c.name}</h2>
                {c.parts.map(p => (<p key={p.id}>{p.name}: {p.exercises}</p>))}
                <p>Total of exercises: {c.parts.map(c => c.exercises).reduce((a,b) => a+b)}</p>
                

            </article>
            
            ))}
            </>
}
export default Course