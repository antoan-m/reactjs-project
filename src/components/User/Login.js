import "./Login.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from "../../services/userService";
import React from 'react';
import Debounce from 'react-debounce-component';
import M from 'materialize-css';
import Backendless from 'backendless';
import { UserContext } from "../../context/UserContext";
import { useState, useEffect, useContext } from 'react';

function Login(props) {

    const [current_user, setCurrentUser] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login_email_error, setEmailError] = useState('');
    const [login_password_error, setPasswordError] = useState('');

    // userToken = localStorage.getItem('user-token');

    // function componentDidMount() {
    //     console.log('Login: ', this.context.user);
    //     userService.userValidate(this.userToken);
    // }

    const [user, setUser, loggedIn, setLoggedIn, cartItems, setCartItems] = useContext(UserContext);


    function changeHandlerEmail(e) {
        
        setEmail(e.target.value);

                if (!email.includes('@')) { setEmailError("Email should contain '@'!") } 
                else if (!email.includes('.')) { setEmailError("Invalid email!") }
                else if (email.indexOf(' ') !== -1) { setEmailError("Invalid email!") }
                else if (email.length < 6) { setEmailError("Invalid email!") }
                else if (email === '') { setEmailError("") }
                else { setEmailError("") }
    }

    function changeHandlerPass(e) {

        setPassword(e.target.value);

              if (password.length < 6) { setPasswordError("Password should be at least 6 characters long!") }
              else if (password.indexOf(' ') !== -1) { setPasswordError("Password should not contain spaces!") }
              else if (password === '') { setPasswordError("") }
              else { setPasswordError("") }
    }

    function submitHandler(e) {
        e.preventDefault();

        const { history } = props;

    Backendless.UserService.login( email, password, false )
    .then(loggedInUser => {
        
        setUser(loggedInUser);
        setLoggedIn(true);

        M.toast({html: 'Hello, ' + loggedInUser['name'] + '!'})
        localStorage.name = loggedInUser['name'];
        localStorage.email = loggedInUser['email'];
        localStorage.id = loggedInUser['objectId'];
        localStorage['user-token'] = loggedInUser['user-token'];
        if (history) { history.push('/') };
   })
    .catch(error => {
        console.error(error)
        M.toast({html: error.message})
   });
    

    };

    return (
   <>
       <h2 className="page-title">LOG IN</h2>
       <section className="center">
            <article></article>
                <form>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="email" type="email" className="form-input-field" name="email" value={email} onChange={changeHandlerEmail} />
                            <Debounce ms={1000}>
                                <span className="vaidation-error error-text-red">{login_email_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="password" type="password" className="form-input-field" name="password" value={password} onChange={changeHandlerPass} />
                            <Debounce ms={1000}>
                                <span className="vaidation-error error-text-red">{login_password_error}</span>
                            </Debounce>
                        </div>
                       
                    </div>
                    <div className="login-button">
                        <button onClick={submitHandler} className="btn waves-effect waves-light login-btn" name="action"><i className="material-icons left">input</i>Login</button>
                    </div>
                </form>
            </section>
                <div className="not-registered">Don't have an account? <Link to="./register">REGISTER</Link></div>
            <article></article>
    </>
  );
}

export default Login;