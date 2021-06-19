import React from 'react';
import {NavLink} from "react-router-dom"

function NavRazno(props) {
    return (
        <div style={{display: "flex", justifyContent: "space-between", padding: "0px 6px"}}>
             
        <NavLink to="/RaznoPredvorje/Portals">Portals</NavLink>
        <NavLink to="/RaznoPredvorje/RenderProps">RenderProps</NavLink>
        <NavLink to="/RaznoPredvorje/KeywordThisInReact">KeywordThisInReact</NavLink>
        <NavLink to="/RaznoPredvorje/ReactStyling">ReactStyling</NavLink>
        <NavLink to="/RaznoPredvorje/EventSyntheticReact">EventSynthetic React</NavLink>
        <NavLink to="/RaznoPredvorje/IntroReact">IntroReact</NavLink>
    </div>
    );
}

export default NavRazno;