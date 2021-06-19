import React, { Component } from 'react';
import "./običniCssFile.css"
import Person from "./Person.js"

class IntroReact extends Component {

state={
 persons:[
   {name: "Max",age:28,id: "dsfjksdjf"},
   {name: "Antiša", age: 44, id:"jkljkj"},
   {name: "Eduardo", age:33, id:"uusdfusldf"}
  ],
  nekiDrugiKey: "nekiDrugiKeyValue",
  isPersonsShown: false

}

togglePersonsHandler(){
  //Ovo je primitive pa se može ovako.
 let  PersonsShown=this.state.isPersonsShown
 this.setState({isPersonsShown: !PersonsShown})

}

onChangeHandler=(event, curPersonId)=>{
  let indexForChange=this.state.persons.findIndex((cur=>cur.id===curPersonId))
  
 //VAŽNO: ovo je krivo, ovdje se dogodilo da bi kopirali array, ali bi kasnije radili promjene na podobjektu koji je još bio by reference i mijnajli bi state bez setState
  // let kopijaPersons=[...this.state.persons]
  // kopijaPersons[indexForChange].name=event.target.value
  // this.setState({persons: kopijaPersons})
 
  //VAŽNO:Pazi važna su dva koraka: Promjenimo izravno kopija objekta koji mijanjamo i onda kopriamo array koji sadrži taj objekt i u kopirajnoj arr ubaicmo taj objekt.I kasnije
  //sa setState ubacimo promjenimo cijelu Persons array. Ako se radio kao gore na krivi način modiricramo state objekt, jedino setState može mijenjati state u class kompontama.
  let personObjKopija={...this.state.persons[indexForChange]}
      personObjKopija.name=event.target.value

  let kopijaPersonsArr=[...this.state.persons]
  kopijaPersonsArr[indexForChange]=personObjKopija
  this.setState({persons: kopijaPersonsArr})    


}

deletePersonHandler=(curPersonId)=>{
 let indexForDelete=this.state.persons.findIndex(cur=>cur.id===curPersonId);
 let kopijaPersonsArr=[...this.state.persons]
     kopijaPersonsArr.splice(indexForDelete,1)
 this.setState({persons:kopijaPersonsArr})    
}


  render() {
  
   let person; 

   if(this.state.isPersonsShown){
     person=this.state.persons.map(curPerson=>{
       return  <Person name={curPerson.name} 
                       age={curPerson.age} 
                       key={curPerson.id} 
                       onChangeHandler={(event)=>{this.onChangeHandler(event,curPerson.id)}}
                       deletePersonHandler={()=>{this.deletePersonHandler(curPerson.id)}}/>
     })
   }else{
     person=null
   }

    return (
      <div className="zaReactIntroKlasa">
        <h1>Hi I'm React App</h1>
        <p>This is really working!</p>
        <button className="botun" onClick={this.togglePersonsHandler.bind(this)}>Toggle Persons</button>
        {person}
      </div>
    );
  }
}

export default IntroReact;