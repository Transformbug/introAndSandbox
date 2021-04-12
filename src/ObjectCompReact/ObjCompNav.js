import React from 'react';
import {Route,Switch,NavLink} from 'react-router-dom';

function ObjCompNav(props) {
    return (
        <div  style={{display: "flex", justifyContent: "space-evenly", padding: "0px 6px"}}>
            <NavLink to="/ObjectCompLobby/Counter">Counter primjer</NavLink>
            <NavLink to="/ObjectCompLobby/ObjCompOtac">ObjCompOtac primjer</NavLink>
        </div>
    );
}

export default ObjCompNav;