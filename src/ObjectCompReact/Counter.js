import React,{useState} from "react"
import Sin from "./SinOdCounter"

let countVankaObj={count:15}

function Counter() {
    const [count, setCount] = useState({count: 0});
    console.log('Ovo je Counter.js, re-reder sa istim vrijednostima primjer')

//VAŽNO: ovdje se uspoređuju stara i nova totalna vrijednost koja je unutar nekog useState poziva. Ako je riječ o objektima gleda se jesu li
// iste by reference ili ne.
// Bailing out of a state update
//If you update a State Hook to the same value as the current state, React will bail out without rendering the children or 
//firing effects. (React uses the Object.is comparison algorithm.)
//VAŽNO:Note that React may still need to render that specific component again before bailing out.(zato je ovaj treci c.log ovdje aktivan) 
//That shouldn’t be a concern because React won’t unnecessarily go “deeper” into the tree. (zato neće re-rendati nakon treceg puta ovo komponentu SinOdCounter)
//If you’re doing expensive calculations while rendering, you can optimize them with useMemo.


  
    return (
        <div style={{border: "1px solid red", marginBottom: "30px"}}>
        Counter komponeta(crvena granica) testira što se misli pod "istim" objektom u slučaju useState kada neće biti re-render jer je "isti" objekt:
           note:pazi ovdje je pokazana i iznimka
           <br/>
          <button onClick={(()=>setCount(freshState=>{
                //   return {count:15}    
                   return countVankaObj
          }))}>Botun</button>

          <h1>{count.count}</h1>
          <Sin/>
        </div>
          
        

  
    )
  }

  export default Counter