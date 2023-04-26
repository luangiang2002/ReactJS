import React from 'react'
import Avatar from './Avatar'

export default function MenberInfo(props) {
  return (
   <>
   <Avatar link= {props.info.path}/>
   <h2>ten: {props.info.name}</h2>
   </>
  )
}
