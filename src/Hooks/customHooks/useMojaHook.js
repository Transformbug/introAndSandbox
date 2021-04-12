import {useCallback, useEffect, useReducer} from 'react';

const intialState={
  persons: [
    {name: "Ante", age :52, id: "sd45fs4d"},
    {name:"Marin", age: 19, id: "sdf45sdf456sdf"}
  ],
  //ovaj isShow uopće ne koristim, ali neka stoji...
  isShow:false
}

function reducerFn(curState,action){
  console.log("reducerFn")
  switch(action.type){
    case "ADD_PERSON":
    return  {...curState,persons: curState.persons.concat(action.newPerson)}
    case "DELETE_PERSON":
          let newPersonsArr=curState.persons.filter((curPerson)=>action.deleteId!==curPerson.id)
    return {...curState,persons: newPersonsArr}  
  
    default: 
    return new Error("ovo je error")
  }

}

function useMojaHook() {
  const [stateMojaH,dispatchMojaH]=useReducer(reducerFn,intialState)
  console.log("ovo je useMojaHook-ta moja custom hook")
  console.log("stateMojaH, useMojaHook.js:", stateMojaH)
         
  let addPersonDispatch=useCallback((person)=>{

      let smallNameChangeObj={name: person.name, age: parseInt(person.age), id: person.enterRandomId}
      console.log("samallNameCahngeObje:",smallNameChangeObj)
       dispatchMojaH({type: "ADD_PERSON",newPerson: smallNameChangeObj})     
      
  },[])


  let deletePersonDispatch=useCallback((id)=>{
         dispatchMojaH({type: "DELETE_PERSON", deleteId: id})
    },[])


    useEffect(()=>{
      //VAŽNO: useEffect isto ovdje se pokrene dva puta. Možda je stvar u tome da će se pokrenuti svaki put kada se mounta neki element koji
      //korisit ovaj customHook. Sve upućuje na to.
      //Ako se customHook shvati kao dio code neke funkcionalne komponete koja je koristi onda se useEffect može promatirati kao jedan od useEffecata
      //te funckonalne komponte pa kada se inicijalnom mounta neka komponeta pokrenuti će se i ovaj ovdje useEffect.
      //Uglavnom ključ je u tome što je defincija moutinga kada je riječ o customHooks. 
      //Da imamo neko funckonalnu komponetu Mate.js i da je koristmo na recimo dva puta u totalnom code i da ona ima useEffect, vidjeli bi dva useEfecta mounta kao
      //što bi kad je riječ o class komponetama vidjeli dva compontetDidMounta
      //Koristmo i ovu customHook funckiju više puta.
      console.log("useEffect unutar useMojaHook čisto bezeveze dodaan da vidim što se događa, ima [] kao argument") 
    },[])
    
  return (
        { addPersonDispatch: addPersonDispatch,
          deletePersonDispatch: deletePersonDispatch,
          stateMojaH: stateMojaH
        }
    );

    }

export default useMojaHook;