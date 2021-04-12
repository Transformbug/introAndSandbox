import React from 'react';
import useMojaHook from './useMojaHook';
import useGlobalCustomHook from './useGlobalCustomHook';


function Persons() {
    console.log(" ovo je Persons.js")
    //Ovo je normalni customHook verzija
    let {stateMojaH,deletePersonDispatch}=useMojaHook()
    console.log("stateMojaH, Persons.js:",stateMojaH)
    
    //Globalni customHook verzija:
    // const [globalState,universalDispatch]=useGlobalCustomHook()
   
    const onClickHandler=(id)=>{
    //Normalni customHook verzija:
    deletePersonDispatch(id) 
    
    //Globalni customHook verzija:  
    // universalDispatch("DELETE_PERSON",id)
   }

    return (
        //VAŽNO:ovdje stavi globalState.persons ako želiš globanu verziju, a stateMojaH.persons ako želiš običan customHook
          stateMojaH.persons.map(curPer=>{
              return (
                  <div style={{ width: "45%", margin: "0 auto"}} key={curPer.id}>
                    <p style={{border: "1px solid green"}} onClick={()=>onClickHandler(curPer.id)}>Hi I'm {curPer.name} and I'm {curPer.age} old!</p>
                    <p>Click on the item for it's removal</p>
                  </div>
              )
          }) );
}

export default Persons;