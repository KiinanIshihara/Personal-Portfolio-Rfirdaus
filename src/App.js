import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import tempBg from './assets/img/IMG_7707.png';
import { LinkedinShareButton, WhatsappShareButton, EmailIcon, LinkedinIcon, WhatsappIcon, LineIcon } from 'react-share';


function App() {

  const linkedinUrl = "https://www.linkedin.com/in/radiya-firdaus/";
  const emailSubject = encodeURIComponent("Hi, let's connect!");
  const recipientEmail = "rfirdaus@wisc.edu";

  return (
    <section className="page">
      <div className="overlay"></div>
      <img src={tempBg} alt="uni the cat"></img>
      <div className="page__content">
        <h1>Portfolio Website Under Development!</h1>
        <h3  style={{marginTop:"5px"}}>Radiya's portfolio will be up and running within the month of March.</h3>
        <p style={{textAlign:"center", paddingLeft:"50px", paddingRight:"50px"}}>
          While my full website is still under construction, you can view a PDF version of my <a href="https://drive.google.com/file/d/1tBbBTrumTP043U8U2C-tUpVNzjlsG1Ge/view?usp=sharing" target="_blank" rel="noopener noreferrer">Project Portfolio here</a>

        </p>
        <br></br>
        <h5>Thank you for your patience!</h5>

        <div style={{textAlign:"center", marginTop:"10px"}}>

          <div style={{display:"flex", justifyContent:"center", gap:"25px"}}>
          <a href={`mailto:${recipientEmail}?subject=${emailSubject}`}>
            <button style={{ fontSize: "5px", cursor: "pointer" }}>
              <EmailIcon size={40} round={true}></EmailIcon>
            </button>
          </a>
            
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <button><LinkedinIcon size={40} round={true}></LinkedinIcon></button>
          </a>






          </div>

        </div>
        
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
