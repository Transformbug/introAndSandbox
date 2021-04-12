import React, { Component,PureComponent, useEffect,useState,useMemo, useCallback } from 'react';

class ObjCompSin extends PureComponent {


    // shouldComponentUpdate(nextProps,nextState){
    //   console.log("this.props.objVanka, ShouldComponetedUpdate ObjCompSin:",this.props.objVanka)
    //   console.log("nextProps.objVanka, shouldComponentUpdate ObjCompSin:",nextProps.objVanka)
    //         return this.props!==nextProps
    //     }

    componentDidMount(){
        console.log("componentDidMount, ObjCompSin.js")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate, ObjCompSin.js")
    }


    render() {
        return (
            <div>
                Ovo je ObjCompSin
            </div>
        );
    }
}

export default ObjCompSin;




// function ObjCompSin (props){
//     console.log("ovo je ObjCompSin.js funkcionalna komponenta verzija")

//       //test za useEffect i useMemo drugi argumnet equality obj cheek
//     console.log("objVanka unutar ObjCompSin fn.komp", props.objVanka)

//     // useEffect(()=>{
       
//     //   console.log("objVanka unutar useEffecta",props.objVanka)

//     // },[props.objVanka])

//     // let returnUseMema=useMemo(()=>{
//     //   console.log("useMemo objVanka:",props.objVanka)
//     //   return props.objVanka   

//     // },[props.objVanka])



//   return(
//     <div>
//     Ovo je ObjCompSin
// </div>
//   )

// }


// //test za useEffect i useMemo drugi argumnet equality obj cheek
// export default ObjCompSin

// //Standardni React.memo()
// export default React.memo(ObjCompSin);

// // //areEqual custom fn. verzija React.memo
// function jesuLiJednakiProps (prevProps,nextProps){
//     //U shouldComponentUpdate ukoliko želimo da se nastavi izršavanje komponte tj. dogodi se re-render treba returanti true.
//     //U ovoj custom areEqual fn. treba vratiti false ukoliko želimo da se dogodi re-render.
//     return prevProps.objVanka===nextProps.objVanka
// }

// export default React.memo(ObjCompSin,jesuLiJednakiProps)

