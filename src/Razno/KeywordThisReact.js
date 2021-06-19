import React, { Component } from 'react';

class KeywordThisReact extends Component {
  
    constructor(){
        super()
        this.bindanoUnutarConstructora=this.bindanoUnutarConstructora.bind(this)
    }

    bindanoUnutarConstructora(){
        console.log(this)
    }

    bindanoUnutarRenderMetode(){
        console.log(this)
    }

    fieldDeklaracijaMetoda=()=>{
        console.log(this)
    }

    unutarRenderaArrowFnOvdjeObična(){
        console.log(this)
    }

    render() {
        return (
            <div>
                <button onClick={this.bindanoUnutarConstructora}>bindanoUnutarConstructora-botun aktivacija</button>
                <br/>
                <button onClick={this.bindanoUnutarRenderMetode.bind(this)}>bindanoUnutarRenderMetoda-botun aktivacija</button>
                <br/>
                <button onClick={this.fieldDeklaracijaMetoda}>fieldDeklaracijaZadržavnajeZnačenja-botun aktivacija</button>
                <br/>
                <button onClick={()=>{this.unutarRenderaArrowFnOvdjeObična()}}>arrowOnTheFlyVerzija-botun aktivacija</button>
            </div>
        );
    }
}

export default KeywordThisReact;