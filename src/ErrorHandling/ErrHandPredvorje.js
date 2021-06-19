import React from 'react';
import ErrorBoundary from "./ErrorBoundary"
import RandomKompPrva from './RandomKompPrva';
import {NavLink} from "react-router-dom"

//VAŽNO: da bi se vidjelo djelovanje ErrorBoundary komponete treba se maknuti onaj standarni obrazac koji se pojavi u developmnet modu
//kada se dogodi error, odnosni treba ga zatovorit i klinuti na križić. Bez obzira na ErrorBoundary u developmnet modu ćemo to uvijek vidjeti
//i treba se ručno maknuti.
//Error Boundary možemo nazvati bilo kako, obično se zove Error Boundary. Postoji samo class verzija Error Boundary i neka class komponenta postaje
//Error Boundary ako ima componentDidCatch metodu ili static getDerivedStateFromError ili obe dvije.
//Sposobnost ErrorBoundary je u tome što je u stanju uhvatiti bilo koji error unutar bilo koje komponete i nasljednika komponeta koja je omotana
//sa Error Boundary.
//Error boundaries do not catch errors for:
//Event handlers (Ovo znači da u recimo onClickHandler fn. treba korisititi obični try catch block)
//Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
//Server side rendering
//Errors thrown in the error boundary itself (znači u samoj ErrorBoundary komponeti, ne u komponetama koje omatamo sa ErrorBoundary kao inače)
//https://reactjs.org/docs/error-boundaries.html
//note za vid:
//zašto je pametno više puta korisit errroBoundary umjesto da jedan erro bouzndary omata više "grana"



function ErrHandPredvorje(props) {
    return (
        <div>
            Ovo je ErrHandPredvorje
            <div style={{textAlign: "center", marginTop: "30px"}}><NavLink to="/" >Home link</NavLink></div>

            <ErrorBoundary>
            <RandomKompPrva ime="Ante"/>
           </ErrorBoundary>
           
            <ErrorBoundary>
            <RandomKompPrva ime="Superman"/>
           </ErrorBoundary>
           
        </div>
    );
}

export default ErrHandPredvorje;