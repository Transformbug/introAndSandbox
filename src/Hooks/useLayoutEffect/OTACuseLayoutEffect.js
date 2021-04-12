import React,{useState,useRef, useLayoutEffect} from 'react';
import SINuseLayoutEffect from "./SINuseLayoutEffect.js"


function OtacHooks() {
  
    const [show, setShow] = useState(false);
    const boxRef = useRef(null);
  
    return (
      <div>
        <div ref={boxRef} className="box" onClick={() => setShow(prev => !prev)}>Click me</div>
        {show && <SINuseLayoutEffect boxRef={boxRef}>Foo bar baz</SINuseLayoutEffect>}
      </div>
    );
  };

export default OtacHooks;


  

 
  