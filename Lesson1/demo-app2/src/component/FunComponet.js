import React from 'react'
export default function FunComponet(props) {
  return (
    <>
    <h2>Tôi là Fun Cpmponent</h2>
    <p>Xin chào React</p>
    <h3>Sử dụng props</h3>
    <p>Nane: {props.name}</p>
    <p>Component: {props.component}</p>
    </>
  )
}
