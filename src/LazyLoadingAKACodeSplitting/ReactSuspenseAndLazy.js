import React,{Suspense} from 'react';
import {Route,NavLink} from "react-router-dom"
const ImportanSaReactLazy=React.lazy(()=>import("./GlumimOgromniFile"))


function ReactSuspenseAndLazy(props) {
    //React.lazy prima callback funkciju kao argumnet i taj callback treba returanti import() i onda će ukupni return React.lazy biti komponeta koja nam treba.
    //Nakon toga koristimo tu kompontu jedino na način da je omotamo između Suspense jer inače neće raditi.
    //React.ozay ne funkocinira sa server side renderingom navodno. 
    //Krivo sam bio rekao da se treba koristti render prop na Route kada se koristi Suspense, može i obični component-
    //Između Suspense omotača mogu biti i obične komponte koje nisu lazy loadane, ali treba znati da će se pojaviti na ekranu tek kada
    //se pojavi komponeta ili komponte koje su lazy loadane sa React.lazy.

    
    return (
        <div>
            Ovo je React.lazy and suspense
            <NavLink to="/LazyLoadingPredvorje/React.Lazy/importanSaReactLazy">Klikni na ovaj Navlink da aktivira novi path</NavLink>
            
            <Suspense fallback={<div>Loading...</div>}>
            <Route path="/LazyLoadingPredvorje/React.Lazy/importanSaReactLazy" component={ImportanSaReactLazy} /> 
           </Suspense>
            
        </div>
    );
}

export default ReactSuspenseAndLazy;