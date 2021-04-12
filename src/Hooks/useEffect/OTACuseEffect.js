import React,{useState} from 'react';
import SINuseEffect from './SINuseEffect';


    //useEffect nam služi za obavljanje sideeffects.
    //Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s render phase). 
    //Doing so will lead to confusing bugs and inconsistencies in the UI.
    //In computer science, an operation, function or expression is said to have a side effect if it modifies some state variable value(s) outside its local environment, that is to
    // say has an observable effect besides returning a value (the main effect) to the invoker of the operation.
    //Genralno kada želimo obaviti stvari koje krakteriziraju "impure fuctions" tj. kada mijenjamo
    //vanjske varijable, ovisimo o podacima koje ćemo dobiite pute nekog http requesta i sa svojim zahtjevima utječemo na vanjski okoliš, stavljamo nešto na localni storage.
   
    //Kada ne stavimo drugi argument onda će se useEffect aktivirati svaki put kad se ova komponeted bude rendala. Kada ubacimo [] u drugi argument onda će se useEffect() aktivirat
    //taj incijalni prvi render i kada se komponenta bude un-mountala.
    //Ako dodamo neku varijbalu ili varijable u taj [] onda će se useEffect uz ta dva puta kad se uvijek renda(mounting and unmouting) još aktivirati
    //ako se promjene vrijednosti tih varijable tj. depenedncies koje smo naveli. 
    //Ako je objekt jedna od dependenices onda će usporedba objekta biti na jednostvnoj reference comparison gdje će se usporedtiti stari sa novim objektm i ako
    //su različitit by reference on će se useEffect aktivirati.Treba pazitit kada je neka funckija taj objekt, ako nije unutar useCallbacka ubačena
    //svaki put će biti novi reference kako se matična komponetea aktivira pa će se useEffect ponovno pokretati.
   
    //VAŽNO: ako nešto returnamo iz useEffecta callback fn. onda moramo returnati funckiju.
    // Ta funckija koju returnamo se neće aktivirati nakon prvog rendera tj. kad se prvi put useEffect aktivira i returna tu funkciju. 
    //Ta funckija služi za 'clean up' i ona će se aktivirati PRIJE nego se useEffect aktivira po drugi put kada neki trigger izazove re-render. 
    //VAŽNO:Ako ne postoji neki trigger koji je aktivirati useEffect callback fn. po drugi put onda će se ta funkcija koju je useEffect callback returnao 
    //aktivirati prije useEffect callback fn. kad se dogodti un-mounting tj. ako se uopće dogodi un-mouting.
    //VAŽNO: možemo imati više useEffect() poziva u jednoj komponenti.
    //VAŽNO: aktivira se iza svih componetDidMount metoda class i compontetDidUpade based komponeti jer je async i pokreće se nakon što browser obavit paint. Ukoliko želimo
    //da se obaviti neku DOM operacijau nakon što se obavi redner u komponted gdje korisimo useEffect onda treba koristitit useLayoutEffect.
    //Međutim ovo na React garantira:
    //Although useEffect is deferred until after the browser has painted, it’s guaranteed to fire before any new renders. 
    //React will always flush a previous render’s effects before starting a new update.
   
    //EKSTREMNO-VAŽNO: ako želimo da varijable koje su definirane izvan useEffect callback fn.  koje korisimo unutar useEffect callback fn. imaju vrijednosti
    //koje vrijede za najnoviji render, a ne za incijalni render trebamo ih navesti kao dependenices u drugom argumnet useEffecta().
    //We recommend using the exhaustive-deps rule as part of our eslint-plugin-react-hooks package. It warns when dependencies are specified incorrectly and suggests a fix.
    //(mislim da ovo gori uključeno u default u EsLintu kojeg koristim, uglavnom jako koristan alat)
    
    //VAŽNO: kada je riječ o slučaju useEffecta u custom hooks onda se taj customHook code tretira kao da je dio code samo komponete, kao da je tamo zapisan
    //pa zato je cijela stvar bila u definiciji mountinga pa će se useEffect u useCustomHook aktivirati svaki puta kada se mounta neka komponeta koja koristi
    //tu useCustomHook. 

    //Kada se re-renda neka komponeta koja koristi useEffect i imamo array of dependencies ako se neki dependecy promjeni
    //onda će se aktivirati clean up funkcija ako smo je postavili i nakon toga će se aktivirati opet obični callback fn. koju smo ubacili u useEffect.
    //EKSTREMNO-VAŽNO: Međutim, ako ta clean up funkcija se u sebi referira na tu neku dependency koja se promjenila i zbog koje se aktivira
    //onda će vrijednost te dependecy varijbale biti onda vrijednost koja je bila prije promjene tj. stara vrijednost koja je bila u trenutku
    //kada se returnala ta clean up funkcija iz useEffect callback fn.. To se događa na primjeru
    //u SINuseEffet.js sa props.shouldListen gdje bude orignalno vrijednost true kada se pokrene clean up funckija.
    //Vrijednost te dependency koje se promjenila kada se pokrene običnu useEffect callback nakon clean up funckije će biti nova vrijednost koja
    //je uzrokovala promjenu. Zato props.shouldListen u običnoj useEffect callback fn. bude false nakon što se aktivira clean up funckija. 



function OTACuseEffect() {
    console.log("na vrhu-OTACuseEffect.js")
    const setStateBezveze=useState("")[1]
    const [dependencyState,setDependecyState]=useState(true)
    
    return (
        <div>
            Ovo je OTACuseEffect
            <button onClick={()=>setStateBezveze("bezveze")}>Promjeni state bez da mijenjaš vrijednosti useEffect dependencies unutar SIN useEffect</button>
            <button onClick={()=>setDependecyState(false)}>Promjeni state i vrijednost useEffect dependenci unutar SIN useEffect</button>
            <SINuseEffect shouldListen={dependencyState}/>
        </div>
    );
}

export default OTACuseEffect;