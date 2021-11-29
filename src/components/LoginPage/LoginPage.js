import React from 'react';
import "./style.css";


const LoginPage = () => {
    return (
        <form className="form">
            <input className="form__input" type="text"/>
            <input className="form__input" type="text"/>
            <button className="form__link">
                Login
            </button>
        </form>
    );
};

export default LoginPage;