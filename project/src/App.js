import './App.css';
import Navbar from './components/NavBar';
import Experience from './components/Experience';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import Offers from './components/Offers';


function App() {
  return (
    <div >
      
      <Navbar/>
      <Destinations/>
      <Experience/>
      <Offers/>
      <Footer/>
    </div>
  );
}

export default App;
