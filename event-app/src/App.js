import logo from './images/logo.svg';
import './App.css';
import Counterdown from './components/counter/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counterdown/>

     
      </header>
    </div>
  );
}

export default App;
