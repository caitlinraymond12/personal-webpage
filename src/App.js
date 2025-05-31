import About from './About';
import NavBar from './NavBar';
import Portfolio from './Portfolio';
import Contact from './Contact';


function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;

