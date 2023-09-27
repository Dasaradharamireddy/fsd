import React, { useState } from 'react';
function Hooks1(){
    const [arr,setArr] =useState(['banana','apple','grapes','apple'])
    const [fruitname,setFruitname] =useState('')
    const [msg,setMsg]=useState('')
    const filterfruits=()=>{
        console.log(fruitname)
        console.log(arr)
        let output = arr.filter((ele,i)=>{
            return( ele===fruitname)
        })
        if(output.length==0){
            setMsg('no fruits found')
            setArr(['banana','apple','grapes','apple'])
        }
        else{
            setArr(output);
        }
    }

    return(
        <div>
            <h1>Raect hooks</h1>
            <input type="text" onChange={(e)=>setFruitname(e.target.value)}></input>
            <button onClick={filterfruits}>find</button>
            <br />
            <ol style={{'display':'inline-block'}}>
            {
                arr.map((ele) => {
                    return(<li>{ele}</li>)
                })
            }
            </ol>
        </div>
    )
}
export default Hooks1;