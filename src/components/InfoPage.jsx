import React, { useEffect, useState , useSelector } from 'react';
import axios from 'axios';
import {results} from "./apis"
import "../CSS/Info.css";
import {Link , useParams} from "react-router-dom"
import Abc from './recipeInfo';

function InfoPage() {
  const { id } = useParams();
  // const url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=825fd499f51b428dad81f1a897627ad5&minCarbs=10&maxCarbs=50&number=2";
  // const [product , setProduct] = useState([]);

  // // let content = null;
  // const result = results.findIndex(res => res.id === (id));
  const handle = (id) =>{
  {
    for (let i = 0; i < results.length; i++) {
      const element = results[i];
      const result = results.findIndex(res => res.id === (id));
      if(element.id === id){
        console.log(element);
      }
      
    }
  }
  }
 
  const [search , setSearch] = useState("");
    return(
      <>
      <input type="text" placeholder='Search Food' className='search-Recipe' onChange={e =>setSearch(e.target.value)}  />
      <div className='recipes'>
    {
      results.filter((result)=>{
        if(search==""){
            return result
        }
        else if(result.title.toLowerCase().includes(search.toLowerCase())){
            return result
        }
      }).map((result , id)=>{
        return(
          <Link to={`/product/${result.id}`} className='link-card' onClick={()=>handle(result.id)} data={results}>
          <div className="recipe-box">
          <div key={result.id}>
            <img src={result.image} />
            <div className='recipe-info'>
            <h4>{result.title}</h4>
            <h5>{result.rating}</h5>
            </div>
            <div className='recipe-info2'>
            <h4>bshfsbjfsfh ...</h4>
            <h3><span>Price :</span> {result.price}</h3>
            </div>
          </div>
          </div>
          </Link>
        )
      })
    }
    </div>
    <div className='recipes'>
    {
      results.filter((result)=>{
        if(search==""){
            return result
        }
        else if(result.title.toLowerCase().includes(search.toLowerCase())){
            return result
        }
      }).map((result , id)=>{
        return(
          <Link to={`/product/${result.id}`} className='link-card' onClick={()=>handle(result.id)} data={results}>
          <div className="recipe-box">
          <div key={result.id}>
            <img src={result.image} />
            <div className='recipe-info'>
            <h4>{result.title}</h4>
            <h5>{result.rating}</h5>
            </div>
            <div className='recipe-info2'>
            <h4>bshfsbjfsfh ...</h4>
            <h3><span>Price :</span> {result.price}</h3>
            </div>
          </div>
          </div>
          </Link>
        )
      })
    }
    </div>
    <div className='recipes'>
    {
      results.filter((result)=>{
        if(search==""){
            return result
        }
        else if(result.title.toLowerCase().includes(search.toLowerCase())){
            return result
        }
      }).map((result , id)=>{
        return(
          <Link to={`/product/${result.id}`} className='link-card' onClick={()=>handle(result.id)} data={results}>
          <div className="recipe-box">
          <div key={result.id}>
            <img src={result.image} />
            <div className='recipe-info'>
            <h4>{result.title}</h4>
            <h5>{result.rating}</h5>
            </div>
            <div className='recipe-info2'>
            <h4>bshfsbjfsfh ...</h4>
            <h3><span>Price :</span> {result.price}</h3>
            </div>
          </div>
          </div>
          </Link>
        )
      })
    }
    </div>
    <div className='recipes'>
    {
      results.filter((result)=>{
        if(search==""){
            return result
        }
        else if(result.title.toLowerCase().includes(search.toLowerCase())){
            return result
        }
      }).map((result , id)=>{
        return(
          <Link to={`/product/${result.id}`} className='link-card' onClick={()=>handle(result.id)} data={results}>
          <div className="recipe-box">
          <div key={result.id}>
            <img src={result.image} />
            <div className='recipe-info'>
            <h4>{result.title}</h4>
            <h5>{result.rating}</h5>
            </div>
            <div className='recipe-info2'>
            <h4>bshfsbjfsfh ...</h4>
            <h3><span>Price :</span> {result.price}</h3>
            </div>
          </div>
          </div>
          </Link>
        )
      })
    }
    </div>
    <div className='recipes'>
    {
      results.filter((result)=>{
        if(search==""){
            return result
        }
        else if(result.title.toLowerCase().includes(search.toLowerCase())){
            return result
        }
      }).map((result , id)=>{
        return(
          <Link to={`/product/${result.id}`} className='link-card' onClick={()=>handle(result.id)} data={results}>
          <div className="recipe-box">
          <div key={result.id}>
            <img src={result.image} />
            <div className='recipe-info'>
            <h4>{result.title}</h4>
            <h5>{result.rating}</h5>
            </div>
            <div className='recipe-info2'>
            <h4>bshfsbjfsfh ...</h4>
            <h3><span>Price :</span> {result.price}</h3>
            </div>
          </div>
          </div>
          </Link>
        )
      })
    }
    </div>
    <div className='recipes'>
    {
      results.filter((result)=>{
        if(search==""){
            return result
        }
        else if(result.title.toLowerCase().includes(search.toLowerCase())){
            return result
        }
      }).map((result , id)=>{
        return(
          <Link to={`/product/${result.id}`} className='link-card' onClick={()=>handle(result.id)} data={results}>
          <div className="recipe-box">
          <div key={result.id}>
            <img src={result.image} />
            <div className='recipe-info'>
            <h4>{result.title}</h4>
            <h5>{result.rating}</h5>
            </div>
            <div className='recipe-info2'>
            <h4>bshfsbjfsfh ...</h4>
            <h3><span>Price :</span> {result.price}</h3>
            </div>
          </div>
          </div>
          </Link>
        )
      })
    }
    </div>
    </>
    )
}

export default InfoPage