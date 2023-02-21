import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './components/login'
import ListPage from './components/listpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <h1>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        music buddy
      </h1>
      {isLoggedIn ? (
        <>
          <Router>
            <Routes>
              <Route path="/listpage" element={<ListPage />} />
            </Routes>
          </Router>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
      <div className="card">
        <button>Connect with Instagram</button>
      </div>
      <p className="read-the-docs">Click on the Music Buddy logo to learn more</p>
    </div>
  );
}

export default App;
