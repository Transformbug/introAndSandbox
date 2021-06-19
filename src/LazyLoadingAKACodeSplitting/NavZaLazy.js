import React from 'react';
import {NavLink} from "react-router-dom"

function NavZaLazy(props) {
    return (
             <div style={{display: "flex", justifyContent: "space-between", padding: "0px 6px"}}>
             
            <NavLink to="/LazyLoadingPredvorje/RucniLazyLoad">"Ručni" lazy load</NavLink>
            <NavLink to="/LazyLoadingPredvorje/React.Lazy">React Lazy and Suspense</NavLink>
        </div>
    );
}

export default NavZaLazy;