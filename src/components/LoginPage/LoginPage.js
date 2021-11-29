import React from 'react';
import "./style.css";
import {useDispatch, useSelector} from "react-redux";

const LoginPage = () => {
    const state = useSelector(state=>  state.auth);
    const dispatch = useDispatch();

    const handlerLogin = () => {

    };

    const handlerPassword = () => {

    };

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