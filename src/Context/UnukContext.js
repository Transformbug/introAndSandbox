import React,{useContext} from 'react';
import NekiContext from './NekiContext';


function UnukContext(props) {
 console.log("UnukContext.js")
 let objNaValuePropu=useContext(NekiContext)
    return (
        <div>
            Ovo je UnukContext
            <br/>
            <div style={{color: "red"}}>{objNaValuePropu.fastFoodData.brandName}</div>
            <br/>
            <button onClick={()=>objNaValuePropu.setFastFoodData({brandName: "Burger King", numberOfLocations: 1246})}>Promjeni iz konzumneta podatke na context provideru</button>
        </div>
    );
}

export default React.memo(UnukContext);