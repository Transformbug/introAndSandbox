import React, { useEffect } from 'react';
import MainRenderProps from './MainRenderProps';
import PrvoRenderKrilo from './PrvoRenderKrilo';
import DrugoRenderKrilo from './DrugoRenderKrilo';

//Render props je tehnika u Reactu gdje stavljamo neku funckiju koja returna neku komponteu kao vrijednost nekog propa kojeg obično nazvemo render.
//VAŽNO: u ovom video sinezi sam spomenio kako iako koristimo više puta komponetu MainRenderProps kako svaka imat stanje tj. varijablno okruženje sama
//za sebe i promjene jednog stanja nema efekta na drugog.

function RenderProps(props) {
  
    useEffect(()=>{
        console.log("useEffect RenderProps")
    })

    return (
        <div>
            Ovo je RenderProps.js
            <MainRenderProps render={(state,promjeniState)=>{
                  return <PrvoRenderKrilo count={state.count} promjeniState={promjeniState}/>  
            }}/>
            <br/>
            <MainRenderProps render={(state,promjeniState)=>{
                  return <DrugoRenderKrilo count={state.count} promjeniState={promjeniState}/>  
            }}/>

        </div>
    );
}

export default RenderProps;