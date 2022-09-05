import logo from './logo.svg';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './components/ContactForm/ContactForm';


function App(props) {
  return (
    <>
    <div className='container'>
    <HomeScreen></HomeScreen>
    <ContactForm></ContactForm>
    </div>
    </>
  );
}

export default App;
