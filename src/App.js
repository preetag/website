import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Handover Pro
        </p> */}
        <Header/>
      </header>
    </div>
  );
}

export default App;
