import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import tempBg from './assets/img/IMG_7707.png';


function App() {
  return (
    <section className="page">
      <div className="overlay"></div>
      <img src={tempBg} alt="uni the cat"></img>
      <div className="page__content">
        <h1>Portfolio Website Under Development!</h1>
        <h3>Radiya's portfolio will be up and running within the month of March.</h3>
        <h5>Thank you for your patience!</h5>
      </div>
    </section>
    /**<div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />

    </div> **/
  );
}

export default App;
