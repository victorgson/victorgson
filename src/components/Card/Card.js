import React from 'react'
import "../Card/card.css";

export default function Card(props) {
  return (
    <div className='card'>
      <h1> {props.title} </h1>
      <h4> {props.subtitle} </h4>
      <p> {props.text}</p>
      <p className="link"><a href={props.link} target="_blank" rel="noreferrer"> See project </a></p>
    </div>
  )
}
