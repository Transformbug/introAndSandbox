import React from 'react';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom';
import GlavniNav from './GlavniNav';
import HooksPredvorje from "./Hooks/HooksOpćenito/HooksPredvorje"
import OtacRefs from './RefsAndForwardRefs/OtacRefs';
import ObjectCompLobby from './ObjectCompReact/ObjectCompLobby';
import LobbyLifecycle from './LifecycleClassMethods/LobbyLifecycle';
import ErrHandPredvorje from "./ErrorHandling/ErrHandPredvorje"
import ContextPredvorje from './Context/ContextPredvorje';
import LazyLoadingPredvorje from './LazyLoadingAKACodeSplitting/LazyLoadingPredvorje';
import RaznoPredvorje from './Razno/RaznoPredvorje';

function App() {
  return (
  
      <BrowserRouter>
          <Switch>
            
         <Route path="/" exact component={GlavniNav}/>
        <Route path="/HooksPredvorje" component={HooksPredvorje}/>
        <Route path="/refs" component={OtacRefs}/>
        <Route path="/ObjectCompLobby" component={ObjectCompLobby}/>
        <Route path="/LobbyLifecycle" component={LobbyLifecycle}/>
        <Route path="/ErrHandPredvorje" component={ErrHandPredvorje}/>
        <Route path="/ContextPredvorje" component={ContextPredvorje}/>
        <Route path="/LazyLoadingPredvorje" component={LazyLoadingPredvorje}/>
        <Route path="/RaznoPredvorje" component={RaznoPredvorje}/>
     
          </Switch>
      </BrowserRouter>
      
   
  );
}

export default App;