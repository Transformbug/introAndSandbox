import React,{useState} from 'react';
import {Route,NavLink} from "react-router-dom"

//VAŽNO: kada uključimo ovaj klasični import i isključimo poziv prema asyncComponete ne pojavi se onaj chunk u network tabu kada kliknemo na auth botun.
// import GlumimOgromniFile from "./GlumimOgromniFile"

import asyncComponent from './asyncComponent';

let GlumimOgromniFile=asyncComponent(()=>{
    return import("./GlumimOgromniFile")
})

console.log(GlumimOgromniFile)

function RucniLazyLoad(props) {
    console.log("RucniLazyLoad.js")
  let isAuth=useState(true)[0]

    return (
        <div> 
            Ovo je RucniLazyLoad
             <NavLink to="/LazyLoadingPredvorje/RucniLazyLoad/GlumimOgromniFile"> Ovo je NavLink koji će aktivirati nasted Route  pa će se dogoditi re-render ove komponete 
             jer je isto unutar Route</NavLink>
         {isAuth? <Route component={GlumimOgromniFile} path="/LazyLoadingPredvorje/RucniLazyLoad/GlumimOgromniFile"/> : null}
        </div>
    );
}

export default RucniLazyLoad;