import React,{useEffect} from 'react';

function SINuseEffect(props) {
    console.log("na vrhu-SINuseEffect.js")
 
    useEffect(()=>{
      console.log("useEffect obični callback fn. unutar SIN useEffect.js komp.")
      console.log("vrijedost props.shouldLIsten unutar običnog useEffect callback unutar SIN",props.shouldListen)

      return()=>{
          console.log("clean up funckija koju useEffect callback returan u SIN komp.")
          console.log("props.shouldListn unutar clean up useEffect funckije:", props.shouldListen)

      }

    },[props.shouldListen])

    return (
        <div>
            ovo je SIN useEffect
        </div>
    );
}

export default SINuseEffect;