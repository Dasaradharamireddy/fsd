import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
function Productinfo(){
    const {id} =useParams();
    const [data, setData]=useState({})
    const api ='https://fakestoreapi.com/products/'+id
    useEffect(()=>{
        singleproduct()
    },[])
    const singleproduct =()=>{
        axios.get(api).then((response)=>{
            setData(response.data)
        })
    }
    return(
         <div>
            <h1>single product</h1>
               <div className="card">
                <img src={data.image} alt=""></img>
                <p>{data.title}</p>
                <p>{data.price}</p>
                <p>{data.category}</p>
               </div>
            {/* {api} */}
         </div>

    )
}
export default Productinfo;