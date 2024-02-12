// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(username, password);
  const changeHandler = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (username === "user" && password === "password") {
      setIsCorrect(true);
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {isCorrect && <p>Welcome, user!</p>}

      {isSubmitted && !isCorrect ? <p>Invalid username or password</p> : null}
      {!isCorrect && (
        <form
          id="loginForm"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              required
              onChange={(e) => {
                changeHandler(e);
              }}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" required onChange={(e) => {
                changeHandler(e);
              }}/>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;
