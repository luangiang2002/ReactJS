import React from 'react'

export default function EventDemo1() {
    const handleClick=()=>{
        alert("Click Button1")
    }
    const handleClick2=()=>{
        alert("Click Button2")
    }
  return (
    <div>
        <h2>Sử dụng sự kiện ko có tham số</h2>
        {
            //gọi thực hiện khi render
            // <button onClick={handleClick()}>Button1</button>
        }
        {/* {gọi thực hiện khi click} */
        <button onClick={handleClick2}>Button2</button>
        }
    </div>
  )
}
