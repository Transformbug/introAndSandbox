import React from 'react';

function RandomKompPrva(props) {
 if(props.ime==="Ante"){
     throw new Error("Ovo je error jer netko ubacio ante, KLIKNI OVDJE SA STRANE NA KRIŽIĆ, OVO SE UVIJEK POJAVI U DEVELOPMENT MODU")
 }

    return (
        <div>
            Ovo je {props.ime}
        </div>
    );
}

export default RandomKompPrva;