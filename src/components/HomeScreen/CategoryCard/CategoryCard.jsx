import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

export default class CategoryCard extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrhBnkQNEAxj7wCLQXFllP9vrD7FfCLiAUvbJA97gz7HbubsvxOoFjvAh21hb_UPfWEE&usqp=CAU'/>
      <Card.Body>
        <Card.Title>Category Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    )
  }
}
