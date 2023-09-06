import { NavLink } from "react-router-dom";
import "./Aside.css";

function Aside(): JSX.Element {
    return (
        <div className="Aside">
        
			{/* <a href = "/home">Home</a>
            <a href="/products">Products</a>
    <a href="/about">About</a> */}
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/products">Products</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/ContactUs">Contact Us</NavLink>
    <NavLink to="/employees">Employees List</NavLink>
    <NavLink to="/products/new">Add product</NavLink>       
        </div>
    );
}

export default Aside;
