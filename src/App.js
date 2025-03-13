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
  const linkedInTitle = "Here's my LinkedIn page:";
  const emailSubject = encodeURIComponent("Hi, let's connect!");
  const recipientEmail = "rfirdaus@wisc.edu";

  return (
    <section className="page">
      <div className="overlay"></div>
      <img src={tempBg} alt="uni the cat"></img>
      <div className="page__content">
        <h1>Portfolio Website Under Development!</h1>
        <h3  style={{marginTop:"5px"}}>Radiya's portfolio will be up and running within the month of March.</h3>
        <h5>Thank you for your patience!</h5>

        <div style={{textAlign:"center", marginTop:"10px"}}>

          <div style={{display:"flex", justifyContent:"center", gap:"25px"}}>
          <a href={`mailto:${recipientEmail}?subject=${emailSubject}`}>
            <button style={{ fontSize: "5px", cursor: "pointer" }}>
              <EmailIcon size={40} round={true}></EmailIcon>
            </button>
          </a>
            
         
          <LinkedinShareButton url={linkedinUrl} quote={linkedInTitle}>
            <LinkedinIcon size={40} round={true}></LinkedinIcon>
          </LinkedinShareButton>







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
