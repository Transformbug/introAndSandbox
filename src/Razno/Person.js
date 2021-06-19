import React from 'react';

//Ova komponeta se korisit u IntroReact.js
function Person(props) {
    console.log(props)
    return (
        <div className="personGlavniDiv" >
            <p onClick={props.deletePersonHandler}>Hi I'm {props.name} and I'm {props.age} old!</p>
             <input type="text" value={props.name} onChange={props.onChangeHandler}/>
        </div>
    );
}

export default Person;