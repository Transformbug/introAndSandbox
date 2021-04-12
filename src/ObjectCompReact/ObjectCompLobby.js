import React from 'react';
import Counter from './Counter';
import ObjCompOtac from './ObjCompOtac';
import ObjCompNav from './ObjCompNav';
import {Route,Switch,NavLink} from 'react-router-dom';

function ObjectCompLobby(props) {
    return (
        <div>
            <ObjCompNav/>
            <div style={{textAlign: "center", marginTop: "30px"}}><NavLink to="/" >Home link</NavLink></div>
           
            <Switch>
            <Route path="/ObjectCompLobby/Counter" component={Counter}/>
            <Route path="/ObjectCompLobby/ObjCompOtac" component={ObjCompOtac}/>
            </Switch>
        </div>
    );
}

export default ObjectCompLobby;