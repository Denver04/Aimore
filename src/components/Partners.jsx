import React from 'react';
import "../CSS/App.css";
import p1 from "../photos/p1.jpg";
import p4 from "../photos/p4.png";
import p2 from "../photos/p21.png";
import p7 from "../photos/p7.png";
import p8 from "../photos/p12.jpg";


const Partners = () => {
  return (
    <div className='partner'>
        <div className='partner-head'>
            <h1>Partners</h1>
        </div>
        <div className='partner-image'>
            <img src={p1} />
            <img src={p4} />
            <img src={p7} />
            <img src={p8} />
            <img src={p2} />
        </div>
    </div>
  )
}

export default Partners