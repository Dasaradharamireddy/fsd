function Event(){
    function getdata(){
        let trainees=[{
            name:"siva",
            id:1234
        },
        {
            name:"ram",
            id:1245
        }
        ];
        let stud=trainees.map(function(ele){
            return ele.name+"  "+ele.id+"<br>";
        })
         document.write(stud);
    }
    return(
        <div>
            <h1>events</h1>
            <button onClick={() => getdata()}> click here</button>
        </div>
    );
}
export default Event