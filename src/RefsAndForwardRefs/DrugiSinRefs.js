import React, { Component } from 'react';

//Forward Ref, verzija sa class(vidi doli za običnu funkciju)
//Mogli smo sytax iz class verzija primjeniti i na funckonalnu verziju. Standardni funckonalni sytnax za class verziju ne možemo primjeniti.

// class DrugiSinRefs extends Component {
 
//     render() {
       
//             return (
//                 <div style={{border: "1px solid pink"}}>
//                     DrugiSinRefs je ovo
//                     <input placeholder="ovo je input unutar DrugiSinRefs na kojemu je forward ref" ref={this.props.forwardRef}/>
//                 </div>
//             );
           
         
// }

// }


// export default  React.forwardRef((props,ref)=> <DrugiSinRefs {...props} forwardRef={ref}/>);

//Verija kada je obična funkconalna komponenta:

 const DrugiSinRefs=React.forwardRef((props,ref)=>{
    return (
                        <div style={{border: "1px solid pink"}}>
                            DrugiSinRefs je ovo
                            <input placeholder="ovo je input unutar DrugiSinRefs na kojemu je forward ref" ref={ref}/>
                        </div>
                     );
 })

 export default DrugiSinRefs

 
