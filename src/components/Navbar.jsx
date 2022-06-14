import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/App.css';
import "../CSS/home.css"

const Navbar = (props) => {
  // console.log(props.data[0].cartData.price);
  return (
    <div className='navbar'>
        <div className='navbar-head'>
            <h1 style={{fontWeight:'bolder'}}>aimora</h1>
        </div>
        <div className='navbar-right'>
            <div className='search'>

            </div>
            <div className='navbar-btn recipe-btn'>
              <button style={{marginTop:"0" , margin:"0 20px" , backgroundColor:"rgb(0 0 255 / 85%)" , color:"white"}}  role="button">Login</button>
              <button style={{marginTop:"0" , margin:"0 20px"}}  role="button">SignUp</button>  
              <i class="fa-solid fa-cart-shopping"><p>{props.data.length} </p></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar