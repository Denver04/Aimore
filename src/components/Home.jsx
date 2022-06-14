import React, { useEffect, useState } from 'react';
import "../CSS/home.css"
import {results} from "./apis"
import "../CSS/Info.css";
import {Link} from "react-router-dom";


function Home() {
    const [search , setSearch] = useState("");
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

  return (
    <div className='home-topest'>
        <div className='home-top'>
            <div className='home-header'>
                <h1>Taste aimora</h1>
                <p>deliver your needs within minutes</p>
            </div>
            <div className='home-location'>
                <i class="fa-solid fa-location-dot"></i>
                <input type="text" placeholder='Enter your location' />
            </div>  
        </div>

        <div className='home-recipe-maining'>
            <div className='home-recipe-maining2'>
            <h1>Dishes For You</h1>
            <Link to="/product" style={{textDecoration:"none"}} >
                <button class="button-4" role="button">More Dishes -></button>
            </Link>
            </div>
            <input type="text" placeholder='Search Food' className='search-recipe' style={{border:"2px solid #ded7d7"}} onChange={e =>setSearch(e.target.value)}  />
        </div>

        <div className='home-main'>
            <div className='home-recipes'>
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
        </div>

        <div className='home-main'>
            <div className='home-recipes'>
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
        </div>

        <div className='home-main'>
            <div className='home-recipes'>
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
        </div>
       
    <Link to="/product" style={{textDecoration:"none"}}>
        <button class="button-4" role="button">More Dishes -></button>
    </Link>
    </div>
  )
}

export default Home
