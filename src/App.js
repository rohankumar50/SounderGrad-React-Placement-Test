import './App.css';
import Slides from './components/Slides';

function App({ slides }) {

  return (
    <div className="App">
      <div className="header">
        <h1>Slideshow App</h1>
      </div>
      <Slides slides={slides} />
    </div>
  );
}

export default App;
