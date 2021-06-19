import React, { Component } from 'react';

class MainRenderProps extends Component {

  state={
      count: 0
  }

  promjeniState=()=>{
      this.setState((state)=>{
          return{count: state.count + 1}
      })
  }

  componentDidUpdate(){
      console.log("comonentDidUpadate MainRenderProps.js")
  }

    render() {
        return (
            <div>
                <br/>
                {this.props.render(this.state,this.promjeniState)}
            </div>
        );
    }
}

export default MainRenderProps;