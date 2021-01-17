import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import Introduction from './components/Intro/Introduction'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <section>
            <Introduction />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Contact />
        </section>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
