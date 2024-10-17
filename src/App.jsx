
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx'
import Resume from './components/Resume.jsx';
import Portfolio from './components/Portfolio.jsx';
import Partners from './components/Partners.jsx';
import Services from './components/Services.jsx';
import Testimonials from './components/Testimonials.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';



function App() {
  return (
    <>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Partners />
      <Services />
      <Testimonials /> 
      <Blog />
      <Contact />
      <Footer />
    
      
      
      {/* Back to top */}
      <a
        href="#"
        className="back-to-top rounded text-center"
        id="back-to-top"
        title="Top"
      >
        <i className="mdi mdi-chevron-up d-block icons"> </i>
      </a>
      {/* Back to top */}
      <div className="cursor cursor-small" />
      <canvas className="cursor cursor-canvas" />
      {/* JAVASCRIPTS */}
      {/* menu */}
      {/* Icons */}
      {/* portfolio */}
      {/* slider */}
      {/* app js */}
    </>
  );
}

export default App;
