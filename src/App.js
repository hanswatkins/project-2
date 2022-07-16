import './App.css';
import Header from './components/Header'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="App">
      <h1>App component</h1>
      <Header />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
