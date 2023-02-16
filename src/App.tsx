import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

// // Log In 

// interface LoginState {
//   email: string;
//   password: string;
// }

// const Login: React.FC = () => {
//   const [state, setState] = useState<LoginState>({
//     email: "",
//     password: "",
//   });

//   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setState({ ...state, email: event.target.value });
//   };

//   const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setState({ ...state, password: event.target.value });
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(state.email, state.password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Email:
//         <input type="email" value={state.email} onChange={handleEmailChange} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={state.password}
//           onChange={handlePasswordChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Log in</button>
//     </form>
//   );
// };


// Sign-Up



  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
