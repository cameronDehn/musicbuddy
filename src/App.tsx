import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/login'
import ListPage from './components/listpage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 >music buddy</h1>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <Login onLogin={handleLogin} />

        
      )}
      <div>
      </div>
        <div className="card">
        <button>
          Connect with Instagram
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Music Buddy logo to learn more
      </p>
    </div>
  )
}

export default App;
