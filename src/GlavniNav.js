import React from 'react';
import {NavLink} from 'react-router-dom';


function GlavniNav(props) {
    return (
        <div style={{display: "flex", justifyContent: "space-between", padding: "0px 6px"}}>
        <NavLink to="/">Home</NavLink> 
        <NavLink to="/HooksPredvorje">Hooks</NavLink>
        <NavLink to="/refs">Refs</NavLink>
        <NavLink to="/ObjectCompLobby">ObjectComparisonReact</NavLink>
        <NavLink to="/LobbyLifecycle">LifecycleClassMethods</NavLink>
    
         </div>
    );
}

export default GlavniNav;