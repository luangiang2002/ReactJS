import React, { Component } from 'react'

export default class ClassComponet extends Component {
  render() {
    return (
      <>
      <h2>Tôi là component</h2>
      <hr></hr>
      <p>sử dụng pops</p>
      <hr></hr>
      <p>Name: {this.props.name}</p>
      <p>lastName : {this.props.last}</p>
      </>
    )
  }
}

