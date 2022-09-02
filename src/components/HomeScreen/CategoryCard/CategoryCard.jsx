import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function CategoryCard(props) {
    return (
    <div className="card col-6" style={{width: '18rem'}}>
      <img src={props.img} class="card-img-top" alt={props.user}/>
      <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
    );
  }

export default CategoryCard;