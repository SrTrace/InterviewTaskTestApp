import React from 'react';
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <form className="form">
            <input className="form__input" type="text"/>
            <input className="form__input" type="text"/>
            <Link className="form__link">
                Login
            </Link>
        </form>
    );
};

export default LoginPage;