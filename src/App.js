import React from 'react';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom';
import GlavniNav from './GlavniNav';
import HooksPredvorje from "./Hooks/HooksOpćenito/HooksPredvorje"
import OtacRefs from './RefsAndForwardRefs/OtacRefs';
import ObjectCompLobby from './ObjectCompReact/ObjectCompLobby';
import LobbyLifecycle from './LifecycleClassMethods/LobbyLifecycle';

function App() {
  return (
  
      <BrowserRouter>
          <Switch>
            
         <Route path="/" exact component={GlavniNav}/>
        <Route path="/HooksPredvorje" component={HooksPredvorje}/>
        <Route path="/refs" component={OtacRefs}/>
        <Route path="/ObjectCompLobby" component={ObjectCompLobby}/>
        <Route path="/LobbyLifecycle" component={LobbyLifecycle}/>
     
          </Switch>
      </BrowserRouter>
      
   
  );
}

export default App;