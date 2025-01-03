import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Hero from './components/hero/Hero';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Hero />
        } />
        {/* <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </Router>
  )
}

export default App
