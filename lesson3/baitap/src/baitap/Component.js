import React, { Component } from "react";

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allChecked: false,
      list: [
        { id: 1, name: "Mobile", IsActive: false },
        { id: 2, name: "Iphone", IsActive: false },
        { id: 3, name: "Laptop", IsActive: false }
      ]
    };
  }

  handleChange = e => {
    
    let productName = e.target.name;
    let checked = e.target.checked;
    this.setState(prevState => {
      let { list, allChecked } = prevState;
      if (productName === "selectAll") {
        allChecked = checked;
        list = list.map(item => ({ ...item, IsActive: checked }));
      } else {
        list = list.map(item =>
          item.name === productName ? { ...item, IsActive: checked } : item
        );
        allChecked = list.every(item => item.IsActive);
      }
      return { list, allChecked };
    });
  };

  renderList = () => {
    return this.state.list.map(item => (
        
      <div>
        <input
          key={item.id}
          type="checkbox"
          name={item.name}
          value={item.name}
          checked={item.IsActive}
          onChange={this.handleChange}
        />
        <label>{item.name}</label>
      </div>
    ));
  };
  render() {
    let gender=this.state.IsActive?"Nam" :"Nữ"
    return (
      <div>
        <input
          type="checkbox"
          name="selectAll"
          checked={this.state.allChecked}
          
          onChange={this.handleChange}
        />
         <label htmlFor=''>{gender}</label>
        Select all
        <br />
        {this.renderList()}
      </div>
    );
  }
}