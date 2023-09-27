function product(){
    let Product=[
        {product:'hairvax',productid:234,productcost:400},
        {product:'sunscream',productid:123,productcost:250},
    ]
    function getdata(Res){
        Res.map((ele,i)=>{
            document.write(i+1+" "+ele.product+" "+ele.productcost+" " +ele.productid+"<br/>")
        }) 
    }
    return(
        <div>
            <h1>product list</h1>
            <button onClick={()=>getdata(Product)}>Click here</button>
        </div>
    )
}
export default product;