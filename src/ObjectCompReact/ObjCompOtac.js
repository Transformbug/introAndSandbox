import React, { Component } from 'react';
import ObjCompSin from './ObjCompSin.js';

let objVanka={nekiKey: "originalnaValue"}

class ObjCompOtac extends Component {

    state={
        persons: [{name:"Ante",age: 58},{name: "Ivana", age: 22}, {name:"Lily", age: 33}]
      }
    
      promjeni=()=>{
        let personsKopija=[...this.state.persons]
        //Ovdje namjerno mijenjamo podobjekt unutar array kojeg ne stavljamo na prop nego stavljamo ili cijelu array ili samo podobjekt "Ivana"-
        personsKopija[0]={name: "Mate", age: 60}
        
        //Ovaj .splice i dolje personsLength prop nisu bitni, tek tako da imamo čiste primitve vrijednosti i dodatne keyeve na props objektu sam ih ostavio
        // personsKopija.splice(0,1)
        this.setState({persons: personsKopija})
        
        //test za useEffect,useMemo drugi argumnet equality obj cheek
        // objVanka={nekiKey: "ručno overwiratan"}
        // objVanka["nekiKey"]="nova vrijednost, zadržava se by reference"
        //Ovo je još najbolji test da se provjeri jel reference cheek ili shallowcheak
        // objVanka={nekiKey: "originalnaValue"}

      }
    
    
    
    componentDidMount(){
        console.log("componetDidMount, ObjCompOtac.js")
    }

    componentDidUpdate(){
        console.log("componentDidUpade, ObjCompOtac.js")
    }

    render() {
        return (

            <div style={{border: "1px solid blue", marginBottom: "20px"}}>
        Ovo je ObjCompOtac(plava granica) gdje ćemo promjeniti stanje i odrediti što će biti na propu ObjCompSin

            <button onClick={this.promjeni}>Botun Promjeni ObjCompOtac</button>
            <ObjCompSin 
            persons={this.state.persons} 
            // persons={this.state.persons[1]} 
            // personsLength={this.state.persons.length} 
            // objVanka={objVanka}
               />
          </div>

        )
    }
}

export default ObjCompOtac;


