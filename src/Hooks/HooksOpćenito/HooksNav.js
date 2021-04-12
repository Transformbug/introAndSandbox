import React from 'react';
import {NavLink} from 'react-router-dom';

function HooksNav(props) {
    return (
        <div>
             <div style={{display: "flex", justifyContent: "space-between", padding: "0px 6px"}}>
      <NavLink to="/HooksPredvorje">Početna-Hooks</NavLink>
      <span> <NavLink to="/HooksPredvorje/useLayoutEffect">useLayoutEffect</NavLink></span>
      <NavLink to="/HooksPredvorje/useCallbackANDuseMemo">useCallbackANDuseMemo</NavLink>
      <NavLink to="/HooksPredvorje/useEffect">useEffect</NavLink>
      <NavLink to="/HooksPredvorje/OuseReducerAndUseState">useReducerANDuseState</NavLink>
      <NavLink to="/HooksPredvorje/useCustomHookOtac">useCustomHooks</NavLink>
      </div>
        </div>
    );
}

export default HooksNav;