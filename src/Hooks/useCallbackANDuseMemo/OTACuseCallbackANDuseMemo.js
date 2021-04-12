import React,{useMemo, useState} from 'react';
import SINuseCallbackANDuseMemo from './SINuseCallbackANDuseMemo.js';






function OTACHuseCallbackANDuseMemo() {
    console.log("OTAC useCallbackAnduseMemo na samom vrhu")
   
   let [prviState,setStatePrvi]=useState("originalni State")
   let [drugiState,setStateDrugi]=useState("originalna vrijednost drugi state")
   let [showVar,setStateTreci]=useState(true)
   
    //useCallback nam služi za memoizaciju neke funckije.
    //Funkcionalne komponetne su funkcije i svaki novi poziv tj. re-render uzorkoje da se stvori novi funkconalni objekt u memoriji pa tako ako
    //koristmo neku funkciju kao jedinu od depencncies negdje drugdje poput recimo unutar useEffecta depencnices array onda će se svaki put 
    //pokrenut useEffect radi novog by refernce objekta. useCallback nam služi da to spriječimo. 
    //Kao i useEffect za dependencies ako je riječ o objektima gleda stari vs novi objekt sa by reference tj. obični jednostavni reference equality postupak.
    //VAŽNO:Bitno je naglastiti da React nikad neće automatski zvati tu funckiju koju ubacimo u useCallback kao callback, to je još jedna od razlika o odnosu na useMemo.
    //Jedino se aktivira kada je mi pozovemo. 
    //Znači return useCallback() je memoized funckija koju smo ubacili u njega.
    //VAŽNO: React Hook useCallback does nothing when called with only one argument. Did you forget to pass an array of dependencies?
    //Ovo se pojavi u EsLintu kada maknemo skorz array i ako ne koristmo neku vanjsku varijablu u callback fn. očito trebamo postaviti praznu array ako
    //ne želimo da se stvori nova by reference funckija u memoriji.
    //VAŽNO: ako koristmo neke varijalbe unutar callback fn. useCallback hook koje su definirane negdje drugdje da bi ta naša funckija koju
    // smo ubacili kao callback unutar useCallback() imala svježe vrijednosti varijabli treba ih navesti kao dependencies.
    //Meni je u glavi uvijek ta primarna svrha useCallback() tj. memoizacija, ali jako je bitno znati kada treba doista kreirati novi
    //fn. objekt u memoriji koji ima svježe vrijednosti varijabli pa je zato iznimno bitno imati sve dependenices navedene unutar array.
    //Memoizacija je samo korisna ako nam ne trebaju svježe vrijednosti dependency varijabli. Naveli smo primjer gdje
    //je neka funckija dependency useEffect array. Ako su se vrijedosti tj. dependieces unutar te funckija promjenili i return se promjenio
    //onda želimo da se i useEffect callback fn. aktivira gdje je ta neka funckija navedena kao dependency i ne treba nam memoizacija.
    //Uglavnom, EsLint je najbolji prijatelj kad je riječ o React hooks dependencies. 
    
    //useMemo nam služi da memoized neku vrijednost koja ne mora biti funckija tj. da memoiziramo ono što returanmo u callbacku fn. useMemo() 
    //i onda kasnije koristmo tu varijablu gdje smo returnali neku vrijednost.
    //To može biti neka komponenta, neki jsx, primtive vrijednosti, objekti itd.
    //VAŽNO: ja sam krivo interpretirao izjavu u React dokumentaciji u mojim screenshot komentarima:
    //Remember that the function passed to useMemo runs during rendering. Don’t do anything there that you wouldn’t normally do while rendering.
    //Ta callback funckija za razliku od useCallbacka će se doista pozivati automaatski od React bez da je im pozovemo, ALI SAMO kada se komponetena
    //incijalno mounta(ne poziva se automatski tijekom un-moutinga) i kada se promjeni nešto u dependeency array. Neće se zavati automaatski
    //svaki put kad se dogodi re-render kada imamo dependency array. Naravno, nema nikakvog smisla ne korisit depencies array jer cijela
    //stvar useMema je spremimo neku vrijednost pa jedini slučaj kada će se useMemo callback aktivirati prilikom svakog rendera je upravo
    //ta stuacija kada nemamo depenendy array.
    //Ukoliko je objekt jedna od vrijednosti u array depencies onda se gleda stari vs novi objekt jednostavni reference equality postupak
    //VAŽNO: ukoliko returnamo u callback fn. neku komponentu onda možemo korisititi tu memoized komponentu umjesto React.memo() i React.PureComponent
    //Ekstremno je bitno u tom slučaju navesti ispravne dependencies(eslint najbolji prijatelj) jer inače neće biti re-render komponte što je malo čudno
    //kada se razmisli. Čovjek bi očekivao da komponeta koja je memoized da se re-renda samo sa starim prop vrijednostima, ali
    //iz nekog razloga ima efekt poput React.memo() i PureComponenet.
    //To nas opet podsjeća koliko je bitno navesti ispravne dependencies i koliko su bitne svježe vrijednnosti varijabli ta da 
    //memoizacija nije sama sebi svrha, da treba znati kada treba dobiti svježi return.
    //Znači return useMemo() je ono što returanamo u callback fn. koju ubacimo u useMemo
    //VAŽNO:You may rely on useMemo as a performance optimization, not as a semantic guarantee. In the future, React may choose to “forget” some previously 
    //memoized values and recalculate them on next render, e.g. to free memory for offscreen components. 
    //Write your code so that it still works without useMemo — and then add it to optimize performance.
    //Ovo gore znači da će se nekad dogoditi ponovna aktivacija callback fn. unutar useMema i novi return čak i kada se nije promjenio dependency.
    



    // let HooksSinMemoaized=useMemo(()=>{
    //      return< SINuseCallbackANDuseMemo  prvoStanje={prviState}/>
    // },[prviState])
    
    return (
        <div>
            <button onClick={()=>setStatePrvi("NOVO,NOVO, novi prvi state")}>Promjeni state prvi OTAC useCallbackANDuseMemo</button>
            <button onClick={()=>setStateDrugi("neka nova vrijednost drugi setate")}>Neka druga state promjena OTAC useCallbackANDuseMemo koju ne postvaljamo na prop
            koji je depnedency useMema unutar SIN komponete ovdje</button>
            <button onClick={()=>setStateTreci((freshS)=>!freshS)}>Sakrij/pokaži SIN useCallbackANDuseMemo</button>
            {showVar && < SINuseCallbackANDuseMemo  prvoStanje={prviState}/>} 
            {/* {HooksSinMemoaized} */}
        </div>
    );
}

export default OTACHuseCallbackANDuseMemo;