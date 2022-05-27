import {useState} from "react";
import {data} from "./Birth";
function App(){
  const[people,setPeople]=useState(data)
  const removePerson=(id)=>{
    let newPerson=people.filter((person) => person.id!==id)
    setPeople(newPerson)
  }
  return(
    <>
    <h3 style={{backgroundColor:"yellow",color:"purple",textAlign:"center",fontSize:"45px"}}>
      {people.length} Birthday's Today</h3>
      {people.map((person)=> {const{id,name,image}=person
      return(
        <div className="container" key={id}>
          <div className="pic">
            <img src={image} alt={name} />
            <h3>{name}</h3>

          </div>
          <div className="button">
            <button className="btn" onClick={() => removePerson(id)}>DISMISS</button>
          </div>

        </div>
      )
   
   
   })}
      
      </>
  )
}
export default App;