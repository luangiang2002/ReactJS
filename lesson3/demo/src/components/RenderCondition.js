import React, { Component } from 'react'
import EventDemo1 from './EventDemo1';
import EventDemo3 from './EventDemo3';

export default class RenderCondition extends Component {
    constructor(props){
        super(props);
        this.state={
            isActive:false,
        }
    }
    handleChange=()=>{
        let check=!this.state.isActive;
        this.setState({
            isActive:check
        })
    }
    handleClick=()=>{
        alert("Check:" + this.state.isActive)
    }
  render() {
    // let check=this.state.isActive?'checked':'';
    let comp=this.state.isActive?<EventDemo1/>:<EventDemo3/>
    let gender=this.state.isActive?"Nam" :"Nữ"
    return (
      <div>
        <hr></hr>
        <h2>Render có điều kiệns</h2>
        <div>
            <input type='checkbox'  id="gt"
            value={this.state.isActive}
            onChange={this.handleChange}
            />
            <label htmlFor=''>{gender}</label>
        </div>
        <button onClick={this.handleClick}>Click</button>
        <hr></hr>
        {comp}
      </div>
    )
  }
}
