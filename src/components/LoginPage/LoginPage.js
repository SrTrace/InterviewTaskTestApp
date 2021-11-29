import React from 'react';
import "./style.css";
import {useDispatch, useSelector} from "react-redux";
import {LOGIN, PASSWORD} from "../../constants/constants";
import {login, password} from "../../redux/actions/actions";

const LoginPage = () => {
    const state = useSelector(state=>  state.auth);
    const dispatch = useDispatch();

    const handlerLogin = (event) => {
        dispatch(login(LOGIN,event.target.value));
        console.log(state.login);
    };

    const handlerPassword = (event) => {
        dispatch(password(PASSWORD,event.target.value));
        console.log(state.password);
    };

    return (
        <form className="form">
            <input
                className="form__input" type="text"
                onChange={handlerLogin}
            />
            <input
                className="form__input" type="text"
                onChange={handlerPassword}
            />
            <button className="form__link">
                Login
            </button>
        </form>
    );
};

export default LoginPage;