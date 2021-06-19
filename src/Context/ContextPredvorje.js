import React,{useState,useMemo} from 'react';
import {NavLink} from "react-router-dom"
import NekiContext from "./NekiContext"
import OtacContext from './OtacContext';


function ContextPredvorje(props) {
    console.log("ContextPredvorje.js")
    const [carData,setCarData]=useState({typeOfCar: "Ferrari", yearOfProduction: 1997})
    const [fastFoodData,setFastFoodData]=useState({brandName: "Wendy's", numberOfLocations: 786})
    const promjeniBezveze=useState("Ovo služi da se re-renda ova komponeta bez da promjenimo context podatke")[1]

    const objForValue=useMemo(()=>{
        return {carData: carData, fastFoodData: fastFoodData,setFastFoodData:setFastFoodData}
    },[carData,fastFoodData,setFastFoodData])
    
 const onClickHandler=()=>{
     setCarData({typeOfCar: "Aston Martin", yearOfProduction:1999})
 }

    return (
        <div>
     <div style={{textAlign: "center", marginTop: "30px"}}><NavLink to="/" >Home link</NavLink></div>
          context predvojre
          <button onClick={onClickHandler}>Promjeni context podatke</button>
          <br/>
          <button onClick={()=>promjeniBezveze("Bezveze")}>Promjeni bezveze, nemoj mijenjati context podatke</button>
          <NekiContext.Provider value={objForValue}>
            <OtacContext/>
         </NekiContext.Provider>
        </div>
    );
}

export default ContextPredvorje;