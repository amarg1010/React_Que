import React, { useState } from 'react'

function HooksForm() {
    const [name,setName] = useState({fName:'',lName:''})
  return (
     <form>
         <input type='text' value={name.fName} onChange={e => setName({fName:e.target.value})}></input>
         <input type='text' value={name.lName} onChange={e => setName({lName:e.target.value})}></input>
        <h2>FName - {name.fName}</h2>
        <h2>LName - {name.lName}</h2>
     </form>
  )
}

export default HooksForm