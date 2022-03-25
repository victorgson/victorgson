import React from 'react'
import "../Card/card.css";
import fitly from "./fitly.png";

export default function Card(props) {
  return (
    <div className='card'>

      <span>  <img className="image" src={fitly} alt="project"></img></span>


      <h1 className="text"> {props.title} </h1>
      <h4 className="text"> {props.subtitle} </h4>
      <p className="text"> {props.text}</p>
      <p className="link text"><a href={props.link} className="icon" target="_blank" rel="noreferrer"> See more </a></p>


    </div>
  )
}
