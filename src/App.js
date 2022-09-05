import logo from './logo.svg';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryCard from './components/HomeScreen/CategoryCard/CategoryCard';
import { Container } from 'react-bootstrap';

function App(props) {
  return (
    <>
    <div className='container'>
    <HomeScreen></HomeScreen>
    </div>
    </>
  );
}

export default App;
