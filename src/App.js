import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ProjectsDetails from './components/ProjectsDetails/ProjectsDetails';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header> </Header>
        <Switch>
          <Route exact path="/">
            <Home> </Home>
          </Route>
          <Route path="/home">
            <Home> </Home>
          </Route>
          <Route path="/about">
            <About> </About>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/project/:id">
            <ProjectsDetails> </ProjectsDetails>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
