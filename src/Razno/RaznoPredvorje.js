import React from 'react';
import NavRazno from './NavRazno';
import {NavLink,Route} from "react-router-dom"
import Portals from './Portals';
import RenderProps from './RenderProps';
import KeywordThisReact from './KeywordThisReact';
import ReactStyling from './ReactStyling';
import EventSyntheticReact from './EventSyntheticReact';
import IntroReact from './IntroReact';



function RaznoPredvorje(props) {
    return (
        <div>
            <NavRazno/>
            <div style={{textAlign: "center", marginTop: "30px"}}><NavLink to="/" >Home link</NavLink></div>
              <Route path="/RaznoPredvorje/Portals" component={Portals}/>
              <Route path="/RaznoPredvorje/RenderProps" component={RenderProps}/>
              <Route path="/RaznoPredvorje/KeywordThisInReact" component={KeywordThisReact}/>
              <Route path="/RaznoPredvorje/ReactStyling" component={ReactStyling}/>
              <Route path="/RaznoPredvorje/EventSyntheticReact" component={EventSyntheticReact}/>
              <Route path="/RaznoPredvorje/IntroReact" component={IntroReact}/>
              

        </div>
    );
}

export default RaznoPredvorje;