import React, { PureComponent, } from 'react';
import NekiContext from './NekiContext';
import UnukContext from './UnukContext';



class SinContext extends PureComponent {

 static contextType=NekiContext

//  componentDidMount(){
//     console.log("CompoonetiDidMount u komponeti SinContext.js")
// }


//  componentDidUpdate(){
//      console.log("CompoonetiDidUpdate u komponeti SinContext.js")
//  }


   

    render() {
        console.log("SinContext.js")
        return (
            <div>
                Ovo je SinContext
                <br/>
                <div style={{color: "red"}}>{this.context.carData.typeOfCar}</div>
                <UnukContext/>
            </div>
        );
    }
}

export default SinContext;