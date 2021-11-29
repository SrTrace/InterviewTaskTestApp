import React from "react";
import {useSelector} from "react-redux";
import LoginPage from "./components/LoginPage/LoginPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
    const state = useSelector(state=>  state.auth);

    //console.log(state);
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/profile' element={ <ProfilePage login={state.login}/>}/>
                <Route path='/' element={<LoginPage/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
