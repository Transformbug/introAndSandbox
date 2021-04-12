import React,{useMemo,useCallback} from 'react';

function SINuseCallbackANDuseMemo(props) {
    console.log("SIN useCallbackANDuseMemo na samom vrhu")

    let nekaFn=useCallback(()=>{
        console.log("ovo je callback fn. koju smo ubacili u useCallback")
        return "bezeveze"
    },[])
    

    let returnUseMemo=useMemo(()=>{
        console.log("useMemo callbackFn aktirana unutar SIN useCallbackANDuseMemo")
        return `Return unutar useMemo callback fn: ${props.prvoStanje}` 
    },[props.prvoStanje])  

    return (
        <div>
            ovo je SIN useCallbackANDuseMemo
            <br/>
            {returnUseMemo}
            <br/>
        </div>
    );
}

export default SINuseCallbackANDuseMemo;