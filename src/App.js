import logo from './logo.svg';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './components/ContactForm/ContactForm';


function App(props) {

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    // const jsonData2 = Object.fromEntries(new FormData(evt.target));
    console.log(jsonData);
  };

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
