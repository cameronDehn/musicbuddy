import { useState } from "react";
import "./Login.css";
import reactLogo from '../assets/react.svg'

interface LoginState {
    email: string;
    password: string;
}

function Login() {
    const [state, setState] = useState<LoginState>({
        email: "",
        password: "",
    });

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, email: event.target.value });
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, password: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(state.email, state.password);
    };

    return (
        <>
            <div>
                {/* <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a> */}
            </div>
            <form onSubmit={handleSubmit} className="login-container">
                <label>
                    Email:
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={state.password}
                        onChange={handlePasswordChange}
                    />
                </label>
                <button type="submit">Log in</button>
            </form>
        </>
    );
};

export default Login;
