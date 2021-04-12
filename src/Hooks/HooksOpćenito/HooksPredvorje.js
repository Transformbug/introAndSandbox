import React from 'react';
import HooksOpćenito from './HooksOpćenito';
import OTACuseLayoutEffect from "../useLayoutEffect/OTACuseLayoutEffect.js"
import OTACuseCallbackANDuseMemo from '../useCallbackANDuseMemo/OTACuseCallbackANDuseMemo.js';
import OTACuseEffect from "../useEffect/OTACuseEffect.js"
import OuseReducerAndUseState from '../useReducerANDuseState/OuseReducerAnduseState.js';
import CustomHooksOtac from '../customHooks/CustomHooksOtac';
import HooksNav from './HooksNav.js';
import {NavLink,Route,Switch, Redirect,withRouter} from 'react-router-dom';

function HooksPredvorje(props) {

  return (
  
      <React.Fragment>
     
       <HooksNav/>
   
          {/*   Brate mili urazaumi se. Ako je u App.js neki path neke komponte unutar App.js recimo "/otac" ne mogu nested elementi komponete koja se pokaže
          kad je path /otac aktivan imati unutar Route path "/sin" more biti "/otac/sin".   */}
               
      <Switch>
        <Route path="/HooksPredvorje/" exact component={HooksOpćenito} />
        <Route path="/HooksPredvorje/useLayoutEffect" component={OTACuseLayoutEffect}/>
        <Route path="/HooksPredvorje/useCallbackANDuseMemo" component={OTACuseCallbackANDuseMemo}/>
        <Route path="/HooksPredvorje/useEffect" component={OTACuseEffect}/>
        <Route path="/HooksPredvorje/OuseReducerAndUseState" component={OuseReducerAndUseState}/>
        <Route path="/HooksPredvorje/useCustomHookOtac" component={CustomHooksOtac}/>
        <Redirect to="/"/> 
      </Switch>
      
      </React.Fragment>
   
  );
}

export default HooksPredvorje;