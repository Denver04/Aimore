import React from 'react';
import '../CSS/App.css';
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-head'>
            <h3>Aimora</h3>
            <h6>The First Ait food Website</h6>
        </div>
        <hr />
        <div className='footer-icons'>
            <div className='icons'>
            <a href="https://www.instagram.com/denver_d_deniver/" style={{color:"white"}}><i class="fa-brands fa-instagram-square"></i></a>
            <a href="https://www.linkedin.com/in/denver-abhisek-088592217/" style={{color:"white"}}><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Denver04" style={{color:"white"}}><i class="fa-brands fa-github"></i></a>
            </div>
            <div>
                <h4>Made by love - Denver</h4>
            </div>
        </div>
    </div>
  )
}

export default Footer