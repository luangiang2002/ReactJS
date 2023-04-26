import React, { Component } from 'react'
// sử dụng sự kiện có dùng state, props 
export default class EventDemo3 extends Component {
   
    handleClick1=()=>{
        alert(this.props.name1)
    }
    handleClick2=(param)=>{
        alert(param+"\n"+ this.props.name2)
    }
    handleClick3=()=>{
       this.props.onView("Devmaster");
    }
  render() {
    return (
      <div>
        <h2>sử dụng sự kiện có đùng props, state </h2>
        {/* khai báo arrow function  */}
        <button onClick={this.handleClick1}>Button1</button>
        {/* gọi function - arrow function */}
        <button onClick={()=>this.handleClick2("dev")}>Button2</button>
        {/*gọi arrow function -> app */}
        <button onClick={this.handleClick3}>Button3</button>
      </div>
    )
  }
}
