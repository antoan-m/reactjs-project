import "./Login.css";
import Register from "./Register"

import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';


function Login() {
  return (
   <div className="App">
                <form>
                    <div className="row">
                        <div>
                            <input id="email" type="email" className="validate form-control" name="email" />
                            <label for="email">Email</label><span className="vaidation-error error-text-red">Email is required!</span>
                            <span className="vaidation-error error-text-red">Email is invalid!</span>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <input id="password" type="password" className="validate form-control" name="password"/>
                            <label for="email">Password</label><span className="vaidation-error error-text-red">Password is required!</span>
                            <span className="vaidation-error error-text-red">Password must be at least 6 characters!</span>
                        </div> <span className="vaidation-error error-text-red">ERROR MESSAGE HERE</span>
                    </div>
                    <div id="login-button">
                        <button className="btn waves-effect waves-light" name="action"><i className="material-icons left">input</i>Login</button>
                    </div>
                </form>
                <div id="not-registered">Don't have an account? <Link to="./register" exact>Register</Link></div>
                </div>
  );
}

export default Login;