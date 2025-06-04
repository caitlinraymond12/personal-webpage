import About from './About';
import NavBar from './NavBar';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Landing from './Landing';
import Footer from './Footer';


function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <section id="landing">
          <Landing />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;

