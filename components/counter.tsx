'use client'
import React from 'react'
import {useState} from "react"


export default function CounterApp(){

    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count => count +1)
    }
    const decrement = () =>{
        if(count > 0){
            setCount(count => count -1)
        }
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <>
            <h1>Counter App</h1>
            <div className="counter_count">{count}</div>
            <div className="counter_btn">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>

    )

}