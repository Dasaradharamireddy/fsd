import { Link } from "react-router-dom";

function Menu(){
    return(
        <div>
            <Link to='/' style={{color:'gray'}}>Home</Link>
            <Link to='/product' style={{color:'gray'}}>||Product</Link>
            <Link to='/about' style={{color:'red'}}>||About</Link>
            <Link to='/Services' style={{color:'green'}}>||Services</Link>
            <Link to='/events' style={{color:'yellow'}}>||Events</Link>
            <Link to='/trainees' style={{color:'pink'}}>||trainees</Link>
            <Link to='/bg' style={{color:'gray'}}>||BG</Link>
            <Link to='/inc' style={{color:'orange'}}>||inc</Link>
            <Link to='/hooks' style={{color:'orange'}}>||hooks</Link>
            <Link to='/hooks1' style={{color:'red'}}>||hooks1</Link>
            <Link to='/newcomp' style={{color:'red'}}>||new</Link>
            <Link to='/productinfo' style={{color:'green'}}>||newproduct</Link>
            
        </div>
    )
}
export default Menu