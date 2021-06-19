import React from 'react';

//Q85. Explain synthetic event in React js?
//Inside React event handlers, the event object is wrapped in a SyntheticEvent object. These objects are pooled, which means that the objects received at an event 
//handler will be reused for other events to increase performance.
//VAŽNO: This also means that accessing the event object's properties asynchronously will be impossible 
//since the event's properties have been reset due to reuse.



function EventSyntheticReact(props) {
     
    const onClickHandler=(event)=>{
        //  console.log(event.target.value)
        let vrijednost=event.target.value
         setTimeout(()=>{
            // console.log(event.target.value)
            console.log(vrijednost)
         },3000)
    }

    return (
        <div>
            <input placeholder="EventSyntehicReact" onChange={onClickHandler}/>
        </div>
    );
}

export default EventSyntheticReact;