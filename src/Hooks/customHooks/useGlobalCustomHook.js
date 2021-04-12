import {useCallback, useEffect, useReducer} from 'react';

let globalState={
  persons: [
    {name: "Ante", age :52, id: "sd45fs4d"},
    {name:"Marin", age: 19, id: "sdf45sdf456sdf"}
  ],
  //ovaj isShow uopće ne koristim, ali neka stoji...
  isShow:false
}

const subscribersArr=[];

const actionsGlobal={
  ADD_PERSON: (person)=>{
    let smallNameChangeObj={name: person.name, age: parseInt(person.age), id: person.enterRandomId}
    let newPersonsArr=globalState.persons.concat(smallNameChangeObj)
    //Ovdje je ovako postavljeno jer trebamo pripremiti promjenu za globalState objekt i primpremitit stvari za reducer tj. kako se stvari postvljene tamo
    //i što reducer očekuje.
    return [{persons:newPersonsArr},{newPerson: smallNameChangeObj}]
  },
 DELETE_PERSON:(id)=>{
  let newPersonsArr=globalState.persons.filter(curPerson=>curPerson.id!==id)
  return [{persons: newPersonsArr},{deleteId: id}]
}

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

function useGlobalCustomHook(pretplati=true) {
  console.log("ovo je useGlobalCustomHook-onaj globalni hook koji dijeli stanje i re-rendar aktivaciju" )

  const dispatch=useReducer(reducerFn,globalState)[1]
         
   let universalDispatch=(actionIdentifier, payload)=>{
     let payloadReady=actionsGlobal[actionIdentifier](payload);
     globalState={...globalState,...payloadReady[0]}
   
       for(let curDispatch of subscribersArr){
       curDispatch({type: actionIdentifier,...payloadReady[1]})
       } 
 
   }


    useEffect(()=>{
      console.log("useEffect callback unutar useGlobalCustomHook")
     if(pretplati){
      subscribersArr.push(dispatch)
     }    
    },[pretplati,dispatch])
  
    
  return [globalState,universalDispatch]

    }

export default useGlobalCustomHook;