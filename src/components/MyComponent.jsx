import React from 'react'
import {useState, useEffect, useRef} from 'react'

function MyComponent() {
  
  const InputRef = useRef(null)
  console.log(InputRef)

   useEffect(() => (
     console.log("componente renderizzato")
   ), )

   function handleClick (){
     InputRef.current.focus();
     InputRef.current.style.backgroundColor = 'red'
   }

  return (
    <div>
       <button onClick={handleClick}>cliccami!</button>
        <input ref={InputRef} type="text" />
     
    </div>
  )
}

export default MyComponent