import React from 'react';
import SinContext from './SinContext';


function OtacContext(props) {
    console.log("OtacContext")
    return (
        <div>
            Ovo je OtacContext
            <SinContext/>
        </div>
    );
}

export default React.memo(OtacContext);