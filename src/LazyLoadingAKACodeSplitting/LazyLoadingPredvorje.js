import React,{useState} from 'react';
import {NavLink,Route} from "react-router-dom"
import NavZaLazy from './NavZaLazy';
import ReactSuspenseAndLazy from './ReactSuspenseAndLazy';
import RucniLazyLoad from './RucniLazyLoad';




function LazyLoadingPredvorje(props) {

    return (
        <div> 
            <NavZaLazy/>      
         <div style={{textAlign: "center", marginTop: "30px"}}><NavLink to="/" >Home link</NavLink></div>
         <Route  path="/LazyLoadingPredvorje/RucniLazyLoad" component={RucniLazyLoad}/>
         <Route path="/LazyLoadingPredvorje/React.Lazy" component={ReactSuspenseAndLazy}/>
        
        </div>
    );
}

export default LazyLoadingPredvorje;