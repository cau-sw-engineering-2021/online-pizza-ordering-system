import logo from './logo.svg';
import './App.css';
import {login, ping, fetchMenuList,
  fetchCartList, addCartItem, removeCartItem} from './util';

function App() {
  /* Login Test */
  login({
    id: "lmu",
    password: "test",
  }).then(({jwt}) => {
    ping(jwt).then(console.log);
  });

  /* Menu Test */
  fetchMenuList().then(console.log);

  /* Cart Test */
  fetchCartList().then(console.log);
  addCartItem({id : 3}).then(console.log);
  removeCartItem({id : 1}).then(console.log);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pizza Online Order System
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
      </header>
    </div>
  );
}

export default App;
