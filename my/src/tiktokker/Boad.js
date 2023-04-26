import React from 'react'
import Cell from './Cell'
// import { calculateWiner } from '../helpers'
const Boad = (props) => {
    // const show=()=>{

    // }
    // console.log(props);
    // const cells =[
    //     null,null,null,
    //     "x","x","x",
    //     null,null,null
    // ];
    // console.log(calculateWiner(cells));
    return (
        <div className='game-board'>
            {props.cells.map((item, index) => (
                <Cell
                    key={index}
                    value={item}
                    onClick={() => props.onClick(index)}
                    className={item === "X" ? "is-x" : item ===  "O"? "is-o" : ""}
                ></Cell>
            ))}
        </div>
    );
};
export default Boad;
