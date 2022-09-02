import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

export default class CategoryCard extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.img} alt={this.props.user}/>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
            {this.props.text}
        </Card.Text>
      </Card.Body>
    </Card>
    )
  }
}
