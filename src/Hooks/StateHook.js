import React, { useState } from 'react'

const  StateHook=()=> {
    const [count,setCount]=useState(0)
    const increment=()=>{
       setCount(count+1)
}  
const decrement=()=>{
    setCount(count-1)
}  
return (
    <div>{count}
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default StateHook