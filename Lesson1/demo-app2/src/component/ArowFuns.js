import React from 'react'

export default function ArowFuns() {
    const Member=(props)=>{
        return(
           <>
            <h1>ArowwFunstion</h1>
            <hr></hr>
            <h3>Welcome to {props.info}</h3>
           </>
        );
    }
  return (
    <Member info="Hello GIAng Học ArrowFuntion thôi"></Member>
  )
}
