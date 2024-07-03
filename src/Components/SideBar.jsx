import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
   <>
   <div> <nav className=" navbar-expand-lg flex-column border sidebar">
<div>
<div >  <button className="navbar-toggler bg-danger " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon "></span>
</button>
<div className="collapse navbar-collapse sidebar" id="navbarNav">

<ul className="navbar-nav flex-column p-5 ">


 <li className="nav-item my-2">
   <Link to='/'  className="Link">HOME</Link>
 </li>
 <li className="nav-item my-2">
 <Link to='/Book' className="Link" >Book Info</Link>
 </li>
 <li className="nav-item my-2">
 <Link to='/Author' className="Link" >Author Info</Link>
 </li>
 
</ul>

</div></div>


</div>
</nav></div>
   
    </>
  );
};

export default SideBar;
