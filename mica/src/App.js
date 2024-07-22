
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navigation/NavBar.js";
import MicaCarousel from "./Carousel/Carousel.js";
import Content from './Content/Content.js';
import Contact from './Contact/Contact.js';
import logo from './logo.png'

const textStyle  = "Content";
const title = "Title";
const contact = "Contact";
const contactText = "ContactText";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <img className = 'logo' src = {logo}/>
      <div className = "Carousel">
      <MicaCarousel/>
      </div>
      <div className='ContentContainer'>
      <Content titleStyle = {title} style = {textStyle}/>
      <footer>
        Phone: 250-566-1990 | 
        <a href = {'mailto:lazydogacres@gmail.com'} > email </a> | 
        <a href = {'https://www.facebook.com/MicaElectronics/'} > facebook </a>
      </footer>
      </div>
    </div>
  );
}

export default App;
