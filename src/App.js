import logo from './logo.svg';
import './App.css';

// components
import Navbar from './components/Navbar'
import Banner from './components/Banner'


// import images
import anime1 from './components/9675abf5-97de-4ae3-87bd-54008033a4b5.jpg'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner
        caption="Childcare and Education"
        details="We are a leader in digital content 
        development and delivery for Primary, Secondary and non 
        Academic training programs"
        image={anime1}
      />
      <Banner
        caption="Childcare and Education"
        details="We are a leader in digital content 
        development and delivery for Primary, Secondary and non 
        Academic training programs"
        image={anime1}
        cName="reverse__row"
      />
    </div>
  );
}

export default App;
