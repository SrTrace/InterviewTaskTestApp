import './App.css';
import {useSelector} from "react-redux";
import LoginPage from "./components/LoginPage/LoginPage";
import React from "react";

function App() {
    const state = useSelector(state=>  state.auth);

    //console.log(state);
  return (
    <div className="App">
          <h1>Enter</h1>
        <LoginPage/>
    </div>
  );
}

export default App;
