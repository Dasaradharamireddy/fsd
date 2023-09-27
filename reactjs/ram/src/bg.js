function background() {
    var red = Math.floor(Math.random() * 200);
    var green = Math.floor(Math.random() * 258);
    var pink = Math.floor(Math.random() * 256);
      document.body.style.background = "rgb(" + green  + ", " + red + ", " + pink + ")";
        return(
            <div>
            <h1>color change</h1>
            <button onClick={()=>background(background)}>Click here</button>
            </div>

        );
}
export default background