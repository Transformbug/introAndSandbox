import React,{useState,useEffect} from 'react';

function asyncComponent(callbackFnGdjeJeImport) {
    return (
        class Mate extends React.Component{
            state={
                component: null
            }

            componentDidMount(){
                callbackFnGdjeJeImport()
                .then((objKojiImportReturna)=>{
                   this.setState({component: objKojiImportReturna.default})
                })
            }

            render(){
                const C=this.state.component
                return C? <C{...this.props}/>: null
            }
        }
    );
}

export default asyncComponent;