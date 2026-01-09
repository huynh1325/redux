import logo from './logo.svg';
import './App.css';
import { Counter } from './redux/slices/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React!</h1>
        <Counter />
      </header>
    </div>
  );
}

export default App;
