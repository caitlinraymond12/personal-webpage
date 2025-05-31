import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import NavBar from './NavBar';
import Portfolio from './Portfolio';
import Contact from './Contact';


function App() {
  return (
    <Router>
      <div className = "App">
        <NavBar />
        <div className = "content">
        <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;


