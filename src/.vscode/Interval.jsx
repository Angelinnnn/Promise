import React, { useEffect, useState } from 'react'

const Interval = () => {
    const[show_count,set_count]=useState(1);
    const[show_reset,set_reset]=useState('');
useEffect(()=>{
function count()
{
    set_count(prev=>prev+1);
}
const increment=setInterval(count,1000)

function reset_count()
{
    set_count(1)
    set_reset("Reset")
    setTimeout(()=>{set_reset('')},1000);
}

const reset=setInterval(reset_count,6000);

return()=>
    {
        clearInterval(increment);
        clearInterval(reset);
    }
},[])
  return (
    <div>
        <h1></h1>
        <p>Count: {show_count}</p>
        <p>{show_reset}</p>
    </div>
  )
}

export default Interval
