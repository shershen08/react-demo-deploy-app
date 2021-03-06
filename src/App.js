// import logo from './logo.svg';
import './App.css';
import packageJson from '../package.json';

import UsersList from './UsersList';
import ComplexUI from './ComplexUI';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ComplexUI/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <UsersList/>
      </header>
      <footer>
        {packageJson.version}
      </footer>
    </div>
  );
}

export default App;
