import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './pages/Hero/Hero';
import Latest from './pages/Latest/Latest';
import Skills from './pages/Skills/Skills';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Latest />
      <Skills />
    </div>
  );
}

export default App;
