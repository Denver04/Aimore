import React, { useState , useEffect } from 'react'
import {useParams} from 'react-router-dom';
import { results } from './apis';
import "../CSS/Recipe.css";
import { hover } from '@testing-library/user-event/dist/hover';


function Abc(props) {
    // console.log(props)
    let {id}=useParams();
    // console.log(id,typeof(id))
    const [element , setElement] = useState("");


    useEffect(() => {
        for (let i = 0; i < results.length; i++) {
            const ele = results[i];
          //   const result = results.findIndex(res => res.id === (id));
          const id1=parseInt(id)
          // console.log(results[i]);
            if(ele.id === id1){
              // console.log(ele);
              setElement(ele)
              // console.log(result);
              break;
            }
            
          }
     }, []);
    
  return (
      <div className='recipe-page'>
        <div style={{backgroundColor:"rgb(252 252 252)"}}>
          <img src={element.image} className="recipe-image" />        
        <div className='recipe-content'>
          <div className='recipe-title' >
          <div className='recipe-price-title'>
          <h1>{(element.title)}</h1>
          <p> {element.price} </p>
          </div>
          <div className='recipe-rating'>
            <h3>{(element.rating)}</h3>
            <div className='recipe-reviews'>
              <h4>408</h4>
              <p style={{fontWeight:"light"}}>selling reviews</p>
            </div>
          </div>
          </div>
          <div className='recipe-infos'>
            <h3>{(element.content)}</h3>       
          </div> 

          <div className='recipe-btn'>
            <button onClick={()=>props.Addhandler(element)}>Add to Cart</button>
            <button>Direction</button>
            <button>Share</button>
            <button onClick={()=>props.RemoveHandler(element)} style={{backgroundColor:hover="red"}} >Remove from cart</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Abc