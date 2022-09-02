import logo from './logo.svg';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryCard from './components/HomeScreen/CategoryCard/CategoryCard';

function App(props) {
  return (
    <>
    <HomeScreen></HomeScreen>
    <CategoryCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLTD-EEs8bxwuZtNSWPEROeaAu3FvGnlGQ6BhxGc4fuuphh9jJz1OWtJQII7BMUlrCHA&usqp=CAU" title="Je suis un chien" user="" text="Prout"></CategoryCard>
    <CategoryCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrhBnkQNEAxj7wCLQXFllP9vrD7FfCLiAUvbJA97gz7HbubsvxOoFjvAh21hb_UPfWEE&usqp=CAU" title="Je suis en prison" user="" text="Help"></CategoryCard>
    </>
  );
}

export default App;
