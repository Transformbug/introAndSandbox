import React, { Component } from 'react';

class DrugoRenderKrilo extends Component {
  
    
    componentDidUpdate(){
        console.log("comonentDidUpadate DrugoRenderKrilo.js")
    }


    render() {
        return (
            <div>
                Ovo je Drugo Render Krilo
                <div>Trenutni count: {this.props.count}</div>
                <button onClick={this.props.promjeniState}>Promjeni count botun</button>
            </div>
        );
    }
}

export default DrugoRenderKrilo;