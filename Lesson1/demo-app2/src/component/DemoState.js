import React, { Component } from 'react'

export default class DemoState extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"GIang",
            age:"34"
        }
    }
    handleChange=()=>{
        this.setState({
            name:"No GIang",
            age:"20"
        })
    }
   
  render() {
    return (
      <div>DemoState
        <hr></hr>
        <p>Name: {this.state.name}</p>
        <hr></hr>
        <p>Tuổi: {this.state.age}</p>
        <hr></hr>
        <button onClick={ this.handleChange}>change</button>
       
      </div>
    )
  }
}
