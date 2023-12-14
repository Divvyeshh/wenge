import './App.css';
import Navbar from './components/navbar/navbar'; 
import Hero from './components/hero/hero';
import Playback from './components/playback/playback';
import Sub from './components/sub-hero/sub';
import Text from './components/text/text';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Playback />
      <Sub />
      <Text />
    </div>
  );
}

export default App;
