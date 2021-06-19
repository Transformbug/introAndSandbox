import React, { Component } from 'react'
import Ante from './Ante.js'

export class Mate extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log(`Mate.js${props.oznaka}, getDerivedStateFromProps`);
        //VAŽNO: state predstavlja state unutar komponete gdje je zapisana ova metoda i kad je riječ o lifecyle upadate onda će imati vrijednost novog state
        // ovdje ako je to bio trigger za re-render i upadate ciklus.
        //VAŽNO: Također imati će nove vrijednosti props objekta ako promjena state ancestora također i uzrokuje promjenu props objekta koji ova metoda prima.  
        // console.log('getDerivetdState , ovo je props parametar', props);
        // console.log('getDerivetdState , ovo je state paramtera', state);
        return state;
      }

     state={
         key: 'Kada je cijeli ovaj state iskomeniran onda je nextState null i izbaci nam upozorenje za getDerivedState,gornju metodu',
         AnteAktivan : true,
         ubačeniDiv: false
     } 

    shouldComponentUpdate(nextProps, nextState) {
      console.log(`Mate.js${this.props.oznaka}, shouldComponentUpadate`);
     
      
    //   console.log('nextProps unutar  shouldCompenentUpdate:', nextProps)
    //   console.log("this.props unutar shouldComponentUpdate:",this.props)
    //   console.log("----------------------------------------------------")
    //   console.log('nextState unutar shouldCompenentUpdate:', nextState)
    //  console.log("this.state unutar shouldComponentUpdate:", this.state)
      //Druga se aktivira u lifecyle update fazi, ne aktivira se u lifecycle creation fazi.
      //Služi nam da odredimo hoće se se nastaviti update cycle ove komponente i svih komponeti(VAŽNO: i njihovih nasljednika) koje render ovdje returna.
      //nextProps predstvlja stanje props objekta u nakon što se aktivirao update lifcyle App.js odakle ova komponta uzima te props values.
      //Uobičajno je da se provjerava jesu ili nextPros i this.props(koji predstvlja stanje props objekta prije update lifecyle) različiti kada želimo korisiti ovu metodu.
      //JAKO-VAŽNO: this.state i this.props ovdje predstvljaju staro stanje koje je bilo prije promjene koja je započela update fazu, dok u ostalim update lifcycle komponenta
      //koje dođu iza ove this.state i this.props predstvljaju najnovije stanje. U getDerivedStateFromProps ne možemo koristi this.state ili this.props, ali tamo putem
      //props i state parmetra imamo pristup najnovijem stanju, ne starome. 
      //UPOZORNEJE:Ako je neki value nekog key-a props objekta drugi objekt i samo neki property toga objekta se promjeni, treba paziti na by value i by reference.
      // vidit lekciju Using shouldComponentUpadate for optimatization. On zamjeni cijeli taj objekt pa by reference više ne radi. 
      //nextState predstvlja state ove komponente Mate.js nakon što se aktiviralo update lifyclye Mate.js jer se dogodla promjna stanja Mate.js.
      // znači nextState će biti state objekt nakon što dodamo ovaj doli noviKey
      //VAŽNO:Mora vratiti boolean.
      return true;
    }  
        
    promjeniStanje = () => {
        this.setState({noviKey: 'noviKey koji je postavio this.setState unutar Mate.js',ubačeniDiv: true});
     }

     ukloniAntu=()=>{
    //   VAŽNO: metoda kad se dogodi event koji je aktivira bude prva koja se aktivira u cijelom proces uklanjanja Ante   
      console.log('ovo je ukloniAntu')
      this.setState({AnteAktivan: false});
     }
   
 
    render() {
        console.log(`Mate.js${this.props.oznaka}, render metoda`)
        // console.log("Mate.js, render metoda trenutni state",this.state)
        // I u lifecylce upadate fazi je ovo treća lifecycle hook tj. metoda po redu.
         let hoceLiEksplictnoDodavanjeUDomUzrokovatiReRenderAppJs=null;
         if(this.state.ubačeniDiv){
          hoceLiEksplictnoDodavanjeUDomUzrokovatiReRenderAppJs=<div>Ovo je dodani div da vidimo hoće li se app.js i sad ostati neaktivan kada se dodaje nešto u dom</div>
         }
       
        return (
            <div> 
                <p>Ovo je paragraf unutar komponente mate</p>
                <p>{this.props.nekiProp} btw ovo je Mate jsx i putem propa je prebačena ta vrijednost</p>
                 <button onClick={this.promjeniStanje} >Botun unutar Mate.js, koji mijenja stanje u Mate.js, primjeti da se App.js ne aktivira</button>
                 {hoceLiEksplictnoDodavanjeUDomUzrokovatiReRenderAppJs}
                 {this.state.AnteAktivan? <Ante ukloniAntu={this.ukloniAntu}/>: null} 
                  
            </div>
        )
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`Mate.js${this.props.oznaka}, getSnapShotBeforeUpdate`)
        // console.log('getSnapshotBeforeUpadate','prevProps', prevProps)
        //console.log("this.props u getSnapshotBeforeUpadate:",this.props)
        //console.log("--------------------------------------------------")
        // console.log('getSnapshotBeforeUpadate','prevState', prevState)
        // console.log("this.state u getSnapshotBeforeUpadate:",this.state)
        // Služi sa last minute dom operacije. Ali ne promjene u domu.
        // Jedan od primjera je scrolling postion usera kada update u dom će dodatni neke dodane dom elemente.
        // Znači dobijemo snapashot scorlling pozicije korisnika i onda kada se update završi iskoristimo to da vratimo korisnika na tu poziciju.
        // prevProps predstvlja stanje props objekta prije promjena koje se se dogodile nakon što je počeo App. update lifecycle.
        // prevState predstvlja stanje unutar ove, Mate.js komponete prije nego što dogodio lifecylce update jer se promjenilo stanje ovdje.
        // znači ono stanje prije nego što se doda gore 'noviKey' sa setState 
        //VAŽNO:U ovoj lifecycle metodi this.state predstvlja najnovije stanje za razliku od recimo shouldComponenent update
        //VAŽNO:Moramo returan neku vrijedost ili null.
        //VAŽNO: ako returnamo null neće se vidjeti ove c.log prevProps i prevState iz nekog razloga.
        return prevState; 
    }

   componentDidUpdate() {
       console.log(`Mate.js${this.props.oznaka}, componentDidUpdate metoda`)
      //  console.log("this.state unutar componentDidUpdate", this.state)
       
   } 

  //Za creation fazu specifčne lifecycle hooks:

  constructor(props) {
    super(props)
    console.log(`Mate.js${this.props.oznaka}, Constructor`)
  }
  
  componentDidMount() {
    console.log(`Mate.js${this.props.oznaka}, componentDidMount`); 
    }
}

export default Mate