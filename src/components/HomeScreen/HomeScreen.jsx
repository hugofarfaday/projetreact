import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryCard from './CategoryCard/CategoryCard';

class HomeScreen extends Component {
    render() {
        return (
            <>
            <div className='row'>
                <h1>LA BOUTIQUE DE UGO LEHMANN</h1>
            <CategoryCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLTD-EEs8bxwuZtNSWPEROeaAu3FvGnlGQ6BhxGc4fuuphh9jJz1OWtJQII7BMUlrCHA&usqp=CAU" title="Je suis un chien" user="" text="Prout"></CategoryCard>
            <CategoryCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrhBnkQNEAxj7wCLQXFllP9vrD7FfCLiAUvbJA97gz7HbubsvxOoFjvAh21hb_UPfWEE&usqp=CAU" title="Je suis en prison" user="" text="Help"></CategoryCard>
            </div>
            </> 
            );
    }
}

export default HomeScreen;