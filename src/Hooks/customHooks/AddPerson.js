import React,{useState} from 'react';
import useMojaHook from "./useMojaHook.js"
import useGlobalCustomHook from './useGlobalCustomHook';

function AddPerson() {
    console.log("ovo je addPerson u komponenta:")
 //PAZI: dogodilo mi se da sam umjesto array destruring stavio ovdje doli lijevo objekt destrukcturing pa mi je vraćalo undefined za state.
 let intialLocalStateObj={
    inputs:[{placeholder: "name",value: ""},{placeholder: "age", value: 0},{placeholder: "enterRandomId", value: ""}]
}
    const [addPersonState,setAddPersonState]=useState(intialLocalStateObj)
    //Normalni customHook verzija:
    const {addPersonDispatch}=useMojaHook()
    
    //Globalna customHook verzija:
    // const universalDispatch=useGlobalCustomHook()[1]
    
 
    let onChangeHandler=(event)=>{
        //console.dir(event.target.placeholder)
        //VAŽNO: podsjenitk da postoji ovaj placeholder nam dom objekut koji event.target returna. Upoše console.dir da vidiš cijeli objekt
        const placeholder=event.target.placeholder
        const inputValue=event.target.value
  
        const newInputsArray=addPersonState.inputs.map((curInput=>{
         return curInput.placeholder===placeholder? {...curInput,value: inputValue}: curInput
        }))
       //Nemam ostalih property osim inputs, ali radi dobre prakse stavljam ovaj spread operator. 
        setAddPersonState({...addPersonState,inputs: newInputsArray})
        
    }
        
      
     

    let   onClickHandler= ()=>{

      let personObj=addPersonState.inputs.reduce((acc,curValue)=>{
                acc[curValue.placeholder]=curValue.value
                return acc 
            },{name: "", age:0, enterRandomId: ""})
              // console.log("personOjb", personObj)
             
            //Normalna verzija:
             addPersonDispatch(personObj)
             //Ovo mi služi da restartiran input polja nakon što se klikne na Add
              setAddPersonState({...addPersonState, inputs: intialLocalStateObj.inputs})
             
             //Globalna customHook verzija
            //   universalDispatch("ADD_PERSON",personObj)
              //Ovo mi služi da restartiran input polja nakon što se klikne na Add
            //   setAddPersonState({...addPersonState, inputs: intialLocalStateObj.inputs})
  
           }
  
    return (
        <div style={{border: "2px solid blue",width:"45%", margin: "20px auto"}}>
            <h4>Add New Person here</h4>
            <input type="text" placeholder="name" onChange={onChangeHandler} value={addPersonState.inputs[0].value} />
            <input type="number" placeholder="age" onChange={onChangeHandler} value={addPersonState.inputs[1].value}/>
            <input type="text" placeholder="enterRandomId" onChange={onChangeHandler} value={addPersonState.inputs[2].value}/>
            <button onClick={onClickHandler}>Add</button>
        </div>
    );
}

export default AddPerson;