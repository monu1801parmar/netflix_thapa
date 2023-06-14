import React from "react";
import './App.css'
export default function Cards(props)
{
    return(
    <div className="cards">
    <div className="card">
        <img src={props.img} alt="Series"  />
        <div className="card_info">
            <div className="card_category">{props.title}</div>
            <div className="card_title">{props.sname}</div>
        
              <a href={props.links} target="_blank">
                <button>Watch Now</button>
              </a>
             
            
        </div>
    </div>
 </div>  
    ) 
    }   
