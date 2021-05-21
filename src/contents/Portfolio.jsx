import React, {useState} from 'react'
import data from "../data";
function Portfolio() {
    const [projects, setProjects] = useState(data)
    return (
        <div className="condiv">
            <div className="projects">
                {projects.map((item)=>{
                    return(
                        <div key={item.id}>
                            <img src={item.image} alt={item.name}/>
                            <h1>{item.name}</h1>
                            <p>{item.tools}</p>
                            <a href={item.url}>Visit Live version</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio

