import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const categorie = [
  {title: "femme", desc: "la mode pour elle", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLTD-EEs8bxwuZtNSWPEROeaAu3FvGnlGQ6BhxGc4fuuphh9jJz1OWtJQII7BMUlrCHA&usqp=CAU"},
  {title: "homme", desc: "la mode pour lui", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLTD-EEs8bxwuZtNSWPEROeaAu3FvGnlGQ6BhxGc4fuuphh9jJz1OWtJQII7BMUlrCHA&usqp=CAU"},
  {title: "enfants", desc: "la mode pour eux", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLTD-EEs8bxwuZtNSWPEROeaAu3FvGnlGQ6BhxGc4fuuphh9jJz1OWtJQII7BMUlrCHA&usqp=CAU"},
  {title: "baby", desc: "la mode pour eux aussi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLTD-EEs8bxwuZtNSWPEROeaAu3FvGnlGQ6BhxGc4fuuphh9jJz1OWtJQII7BMUlrCHA&usqp=CAU"},
]

function CategoryCard(props) {
    return (
      <div className='col-3'>
    <div className="card" style={{width: '18rem'}}>
      <img src={props.img} class="card-img-top" alt={props.user}/>
      <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
    </div>
    );
  }

export default CategoryCard;