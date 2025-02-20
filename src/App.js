import './App.css';
import AboutPage from './Components/About/AboutPage';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <AboutPage/>
        <Experience/>
        <Skills/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
