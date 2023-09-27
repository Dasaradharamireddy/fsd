function Trainees(){
        function getdata(){
            let trainees=[{
                name:"siva",
                id:1234
            },
            {
                name:"akshay",
                id:145
            }
            ];
            let stud=trainees.map(function(ele){
                return ele.name+"  "+ele.id+"<br>";
            })
             document.write(stud);
        }
        return(
            <div>
                <h1>trainees list</h1>
                <button onClick={() => getdata()}> click here</button>
            </div>
        );
}

export default Trainees