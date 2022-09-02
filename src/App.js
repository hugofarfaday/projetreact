import logo from './logo.svg';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryCard from './components/HomeScreen/CategoryCard/CategoryCard';

function App() {
  return (
    <>
    <HomeScreen></HomeScreen>
    <CategoryCard></CategoryCard>
    </>
  );
}

export default App;
