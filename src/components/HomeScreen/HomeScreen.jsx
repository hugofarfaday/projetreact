import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryCard from './CategoryCard/CategoryCard';

class HomeScreen extends Component {
    render() {
        return (
            <>
            <div className='row'>
                <h1>LA BOUTIQUE DE UGO LEHMANN</h1>
            <CategoryCard text="la mode pour lui" title="Homme" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLTD-EEs8bxwuZtNSWPEROeaAu3FvGnlGQ6BhxGc4fuuphh9jJz1OWtJQII7BMUlrCHA&usqp=CAU"></CategoryCard>
            <CategoryCard text="la mode pour elle" title="Femme" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLTD-EEs8bxwuZtNSWPEROeaAu3FvGnlGQ6BhxGc4fuuphh9jJz1OWtJQII7BMUlrCHA&usqp=CAU"></CategoryCard>
            <CategoryCard text="la mode pour eux" title="Enfants" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLTD-EEs8bxwuZtNSWPEROeaAu3FvGnlGQ6BhxGc4fuuphh9jJz1OWtJQII7BMUlrCHA&usqp=CAU"></CategoryCard>
            <CategoryCard text="la mode pour eux aussi" title="Baby" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLTD-EEs8bxwuZtNSWPEROeaAu3FvGnlGQ6BhxGc4fuuphh9jJz1OWtJQII7BMUlrCHA&usqp=CAU"></CategoryCard>
            </div>
            </> 
            );
    }
}

export default HomeScreen;