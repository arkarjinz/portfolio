
import './index.css'
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";

import Skills from "./components/skills/Skills.jsx";
import Services from "./components/ser_vice/Services.jsx";
import Qualification from "./components/qualification/Qualification.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import ScrollUp from "./components/scrollup/ScrollUp.jsx";
import Work from "./components/work/Work.jsx";

function App() {


  return (
      <>
          <Header/>
          <main className="main">
                  <Home/>
                  <About/>
                  <Skills/>
                  <Services/>
                  <Qualification/>
                  <Work/>
                  <Testimonials/>
                  <Contact/>
          </main>
          <Footer/>
          <ScrollUp/>

      </>
  )
}

export default App
