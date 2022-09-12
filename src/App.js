import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { Link, Route, Routes } from 'react-router-dom';
import MobileNav from './components/MobileNav';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
