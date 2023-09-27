import React, { useState } from 'react';
function Hooks(){
    const [cnt,setCnt]=useState(0)
    const [name,setName] =useState('')

    return(
        <div>
            <h1>Raect hooks</h1>
            <p>count is{cnt}</p>
            <button onClick={()=>setCnt(cnt+1)}>count</button>
            <br />
            <input type="text" onChange={(e)=>setName(e.target.value)}></input>
            <h2>name is :{name}</h2>
        </div>
    )
}
export default Hooks;