import React, { Component } from 'react';

class PrvoRenderKrilo extends Component {

  
    componentDidUpdate(){
        console.log("comonentDidUpadate PrvoRenderKrilo.js")
    }

    render() {
        return (
            <div>
                Ovo je Prvo Render Krilo.
                <div>Trenutni count: {this.props.count}</div>
                <button onClick={this.props.promjeniState}>Promjeni count botun</button>
            </div>
        );
    }
}

export default PrvoRenderKrilo;