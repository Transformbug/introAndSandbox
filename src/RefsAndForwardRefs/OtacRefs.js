import React, { Component } from 'react';
import PrviSinRefs from "./PrviSinRefs.js"
import DrugiSinRefs from "./DrugiSinRefs.js"
import CounterRefs from "./CounterRefs.js"
import TreciSinRefs from './TreciSinRefs.js';
import {NavLink} from 'react-router-dom';  

//VAŽNO: postoje dva temeljna tipa ref-a:
//1: objekt koji ima property tj. key "current" koji kreiramo pozivom na React.createRef() kada je riječ o class based komponetama i objekt(također ima key "current") koji kreiramo na sa 
//pozivom useRef() hook kada je riječ o funkconalnim komponentama. I onda taj objekt postavimo na neki DOM element ili neku class komponentu koju returnamo unutar
//neke druge komponente(ne možemo ga staviti na funkcionalnu komponentu zato jer nemaju instance je obješnjenje).
//PAZI: naravno da to ne znači da ne možemo postaviti taj objekt koji useRef() returna kao vrijednost nekog ref propa unutar neke fukcionale komponeta na neki
//jsx element tip <div>. Nego znači da se ne može postaviti ref={objektKojiUseRefReturna} returna na <NekaFukonalnaKomponetaUnutarJsx/>
//Ne vidim neki smisao stvljanja refa na class based komponentu samo po sebi ako ne korisimo forward ref jer kada pogledamo što je ref vidjeti ćemo
//samo onaj obični objekt koji predstavlja class based komponentu.
//Foward Ref nam omogućuje da unutar neke parent komponete možemo mainpuliranti sa DOM elementima unutar descandant komponente. Koristi se na način da
//se omota export descentat kopomente ili cijela descendat komponeta i pomoću FowardRef dobijemo pristup refObj ili callback fn. refu koji je parent kreirao
//i onda taj ref iskoristimo u descendant komponenti da ga postavimo na neki od DOM elementa.
//Napomena: kada je riječ o forward refu onda descdant može biti i obična funcionalna komponeta i to je najuobičajniji način upotrebe.
//Ovdje sam gori pod napomenom mislio da se može stavitit <NekaFunkonclnaKomponetaUnutarJsxAkoKoristiUSebiFowardRef ref={objektKojiUseRefReftuna}/>
//VAŽNO: kada koristimo objektni tip refa ne moramo se referiranti na neki element unutar DOM ili komponetu nego možemo taj objekt koristiti kao
// "skladište za najnovije informacije". To nam može poslužiti unutar funkconalnih komponenti jer kada se pokrene neka async funkcija i dogodi se
//u međuvremnu re-render sa novim vrijenostima neke varijable onda će vrijednosti tih varijablie unutar funckonaih kompoenti biti one vrijednosti koje su
//bile kada se kreirana ta funckija. Sa postvljanem svaki put na .current ref objekta kada se dogodit re-redner možemo imati svježe vrijednosti varijabli
//za svaki re-render neke funcknalne komponte.Vidi ovdje primjer CounterRefs.js, to je ujedno primjer useRef-a unutar fn. komponenti.

//2: drugi temeljni tip refa je callback ref gdje postavimo neku funkciju na neki DOM element ili class komponetu ili funckonalu komponetuau(u slučaju forward ref jedino)
//i onda u toj funkciju u prvom argumentu dobijmo sami taj element na kojeg smo postavili callbck fn. i onda taj element u prvog parametru kojeg dobijemo postavimo
// unutar neke instance sa this.elementWhereCallbackRefFn=prviParameterCallbackRefFn i onda negdje koristmo taj element kojg samo dobili
//i pa recimo imamo this.elementWhereCallbackRefFn.focus()
//VAŽNO: ja sam krivo u orignalnom video ovdje stavio da se callback refovi ne koristi sa useRef() i unutar fukconalnih komponeti što nije točno.
//Vidi TreciSinRefs za detlja u vezi callback refova i funkconalnijh komponeti i useRefa
//VAŽNO: posebno callback ref funckija je u tome što za razliku od običnih funckija koje se postvljane na nekim komponetama(misli se na nekiProp={nekaFunckijaVrijdnostPropa}) onda
// će se automatski biti pozvane od strane React prilikom mountinga gdje će vrijednost toga prvoga parmetra biti taj sami element gdje je ref kao što smo rekli i prilom unmouting
//tj. micanje komponete gdje će vrijednost toga prvog parmetra biti null. To vrijedi neovisno o tome jel riječ o inline callback refu ili funckijama
//definirane unutar same class komponente. 



//Ima puno syntax varijacija callback ref-a, možemo recimo inacijalno odrediti this.elementWhereCallbackRefFn i staviti ga na null i ne moramo, možemo koristiti
//field arrow fn, možemo napisati callback fn unutar konstruktora,možemo imati inline callback fn uglavnom niz je opcija.
//Međutim, najvažnije je spomenuti dva slučaja kada će biti mala razlika u samome izvršavnju koda i efektima.
//U slučaju kada imamo inline callback ref znači ref={(elementGdjeJeRef)=> this.elementWhereCallbackRefFn=elementGdjeJeRef} i slučaj kada
//imamo bind unutar samoga returna unutar render metoda znači: ref={nekaFnČijiSadržajJeIstiKaoOvajGoriRefPrimjer.bind(this)}.
//U tim slučajevima kada se događa upadate tj. re-render nekog elementa kada pogledamo što predstvlja vrijednost parametra toga prvog parmenetar u ref callback fn.
//vdijeti ćemo null pa tek nakon toga će se opet pozvati ta funckija gdje ćemo vidjeti taj element na kojeg smo postavili ref kao inače.
//Ništa se ne mijenja u smislu da se re-redna naka komponeta dva puta ili da se gubi vrijednost this bindinga kada je riječ o 
// slučaju nekaFnČijiSadržajJeIstiKaoOvajGoriRefPrimjer.bind(this) nego se u upadate fazi taj callback ref fn. pozove dva puta i prvi put vrijednost bude null kada
//imamo klasični inline callback i taj poziv prema bind unutar ref={} dok drugi poziv bude sami element gdje je ref kao inače.
//VAŽNO: za ostale callback ref koje nisu inline syntax se uopće neće biti pozvane automske od strane recta u upadate fazi(nego stanardno oni slučajevi gdje se zovu sa null
//prilikom unmouting i sa samim elemnetom gdje je ref prilkom mountinga)
//Mala razlika,ali eto da se zna.

//Note: Postoje još string refs, ali to je legacy i ne treba se korisitit.




class Otac extends Component {
    constructor(){
        super();
        //Ovaj odmah doli treba biti uključeno za sve objekt ref primjere:
        // this.refObj=React.createRef()
        //Ovo odmah doli treba biti uključeno za this.callbackRefTypicallyBindedInConstructorFn primjer:
        this.callbackRefTypicallyBindedInConstructorFn=this.callbackRefTypicallyBindedInConstructorFn.bind(this)
    }

    state={
        boja: false
    }

    componentDidMount(){
        console.log("ovo je ref objekt:", this.refObj)
    }

    componentDidUpdate(){
        console.log("ovo je ref objekt:", this.refObj)
    }

    promjeniBoju=()=>{
        this.setState(freshState=> {
          return  { ...freshState, boja: !freshState.boja}
        })
       
    }

    fokusiraj=()=>{
        //Ovo je za objektne primjere treba biti uključeno
        // this.refObj.current.focus()
        console.log("fokusiraj fn")
        //Ovo treba biti uključeno za sve callback ref primjere
        this.elementWhereCallbackRefFnIs.focus()
    }
    
    callbackRefTypicalArrowFieldFn=(elementWhereWeUseCallback)=>{
        console.log("elementWhereWeUseCallback:", elementWhereWeUseCallback)
            this.elementWhereCallbackRefFnIs=elementWhereWeUseCallback
    }

    callbackRefTypicallyBindedInConstructorFn(elementWhereWeUseCallback){
        console.log("elementWhereWeUseCallback:", elementWhereWeUseCallback)
        this.elementWhereCallbackRefFnIs=elementWhereWeUseCallback
    }

    callbackRefWillBeBindedInlineFn(elementWhereWeUseCallback){
        console.log("elementWhereWeUseCallback:", elementWhereWeUseCallback)
        this.elementWhereCallbackRefFnIs=elementWhereWeUseCallback
    }

    nekiHandler(){
        console.log("nekiHandler")
    }


    render() {
       
        let ulitimateColor="";
        if(this.state.boja){
            console.log("prošlo je")
           ulitimateColor="red"
        }

        return (
            <div style={{color: ulitimateColor}}>
               
<div style={{textAlign: "center", marginBottom: "30px"}}><NavLink to="/" >Home link</NavLink></div>
                Ovo je OtacRefs
                <button onClick={this.promjeniBoju}>Botun unutar OtacRefs.js koji mijenja boju unutar OtacRefs</button>
                
                <button onClick={this.fokusiraj}>Fokusiraj unutar DrugiSinRefs</button>
                {/* Kada je ref na nekoj class komponeti bez da se koristi forwardRef */}
                {/* <PrviSinRefs ref={this.refObj}/> */}
                
                {/* ForwardRef Primjer: */}
                {/* <DrugiSinRefs ref={this.refObj}/> */}
                 
                  
                {/* /Ovo je primjer korišenje refs gdje ne postavlja niti DOM element niti komponenta na ref */}
                {/* <CounterRefs/> */}
           
                {/* Callback refs neki od primjera: */}
                {/* <div ref={this.callbackRefTypicalArrowFieldFn}>neki div u otac</div> */}
                {/* PAZI: koristimo ovdje DrugiSin koji je forward ref(osim ovog odmah doli diva) pa će "fokusiraj" raditi. Ali to je irelavatno za ono što nas zanima
                tj. za razliku između ovih callback refova kada je riječ o upadate fazi */}
                {/* <DrugiSinRefs ref= {this.callbackRefTypicallyBindedInConstructorFn}/> */}
                
                {/* Callback refs primjeri gdje će se pozvati ove funckije priliko update faze i to dva puta,sa null i sa samim elementom */}
                {/* <div ref= {this.callbackRefWillBeBindedInlineFn.bind(this)}>neki drugi div u otac</div> */}
                {/* PAZI: koristimo ovdje DrugiSin koji je forward ref(osim ovog odmah doli diva) pa će "fokusiraj" raditi. Ali to je irelavatno za ono što nas zanima
                tj. za razliku između ovih callback refova kada je riječ o upadate fazi */}
                {/* Koristim "el" umjesto standardnog "elementWhereWeUseCallback" da stane sve u jedan red doli */}
                {/* <DrugiSinRefs ref={(el)=>{console.log("elementWhereWeUseCallback:",el); this.elementWhereCallbackRefFnIs=el;}} /> */}

                {/* Ovaj treci sin služi ze testove useRefa */}
                <TreciSinRefs/>
               
            </div>
        );
    }
}

export default Otac;