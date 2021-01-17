import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import Introduction from './components/Intro/Introduction'
import About from './components/About/About';
import Projects from './components/Projects';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Introduction />
      <About />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
