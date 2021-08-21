import React,{useRef,useEffect,useState} from 'react';

function TreciSinRefs(props) {
 
    let [state,promjeniState]=useState()
    //Svaki puta kada pozovemo useRef() hook return će biti objekt koji ima key current. Ono što ubacimo
    //unutar useRef(intialArgument) će biti vrijednost toga current objekt key-a.
    const refArr=useRef([])
    console.log("refArr gori",refArr)

useEffect(()=>{
    console.log('refArr unutar useEffecta',refArr)
})

let refVanjskaFunckija=(el)=>{
    console.log(el);
    refArr.current[2]=el
}

    return (
        <div>
             {/* VAŽNO:Možemo korisitit ove callback refove i sa useRef unutar fukcionalnih komponete
             VAŽNO: također imaju problem da će se tijekom određenog UPDATE render ciklusa pozvati automatski dva puta od strane react gdje će prvi 
             poziv vrijednost "el" biti null dok će drugi poziv biti sami element gdje je ref.
             VAŽNO: čak se događa da ovaj "aside" elemnt koji ne koristi doslovno inline funkciju ima tu stiuacija da se prvo "el" bude null pa sami element.
             prilikom UPDATE faze 
             Tijekom mounting faze će se svi pozvati jedan puta i vrijednost će biti element*/}
            <h3 ref={(el)=> {console.log(el); refArr.current[0]=el}}>Treci sin refs</h3>
            <div ref={(el)=> {console.log(el); refArr.current[1]=el}}>Neki div unutar treci sin</div>
            <section ref={refVanjskaFunckija}>Section unutar treci sin</section>
          
             {/* Uključi ovaj aside tj. objekti ref tek kada iskomentiraš ovo gore callback refs */}
             {/* VAŽNO: kada postavimo neki objektni ref to praktični znači kao da smo stavli nekiRefObjektKojiUseRefReturna.current=tajElement gdje je objektni ref */}
             {/* Zato se cijeli gore array overwrita i nema smisla držati ove gore refove uključene. */}
            {/* <aside ref={refArr}>Ovo je aside unutar treci sin</aside> */}
            
            <button onClick={()=>promjeniState("bezveze")}>Promjeni state unutar Treci Sin</button>

        </div>
    );
}

export default TreciSinRefs;