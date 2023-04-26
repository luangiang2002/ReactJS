import React, { Component } from 'react'
// sử dụng sự kiện có tham số
export default class EventDemo2 extends Component {
    handleClick1=(conten1)=>{
        alert(conten1);
    }
     handleClick2=(conten2)=>{
        alert(conten2);
    }
  render() {
    return (
      <div>
        <h2>Sử dụng sự kiện có tham số</h2>
        {/* function được gọi khi render  */}
        {/* <button onClick={this.handleClick1("button1 was click")}>Button</button> */}
        {/* function được gọi khi click -arrow function */}
        <button onClick={()=>this.handleClick2("button2 was click")}>Button2</button>
      </div>
    )
  }
}
