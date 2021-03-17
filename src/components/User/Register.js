import "./Register.css";

import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';


function Register() {
  return (
   <div className="App">
     <form>
                    <div className="row">
                        <div>
                            <input id="name" type="text" className="validate" name="name" />
                            <label for="name">Name</label>
                            <span className="vaidation-error error-text-red">Name is required!</span>
                            <span className="vaidation-error error-text-red">Name must be at least 3 characters!</span>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <input id="email" type="email" className="validate" name="email" />
                            <label for="email">Email</label>
                            <span className="vaidation-error error-text-red">Email is required!</span>
                            <span className="vaidation-error error-text-red">Email is invalid!</span>
                            <span className="vaidation-error error-text-red">Email is already registered!</span>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <input id="password" type="password" className="validate" name="password" />
                            <label for="password">Password</label>
                            <span className="vaidation-error error-text-red">Password is required!</span>
                            <span className="vaidation-error error-text-red">Password must be at least 6 characters!</span>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <input id="rePassword" type="password" className="validate" name="rePassword" />
                            <label for="rePassword">Repeat Password</label>
                            <span className="vaidation-error error-text-red">Password is required!</span>
                            <span className="vaidation-error error-text-red">Password must be at least 6 characters!</span>
                            <span className="vaidation-error error-text-red">Passwords don't match!</span>
                            <span className="vaidation-error error-text-red">Passwords don't match!</span>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <input id="address" type="text" className="validate" name="address" />
                            <label for="address">Address</label>
                            <span className="vaidation-error error-text-red">Address is required!</span>
                            <span className="vaidation-error error-text-red">Address must be at least 6 characters!</span>
                        </div>
                    </div>
                    
                    <div className="switch register-switch">
                    <label>
                    User
                    <input type="checkbox" name="publisher" />
                    <span className="lever"></span>
                    Publisher
                    </label>
                    </div>
                    <span className="vaidation-error error-text-red">ERROR MESSAGE</span>
                    <div id="register-buttons">
                        <button className="btn waves-effect waves-light register-btn" name="action"><i className="material-icons left">input</i>Register</button>
                        <button className="btn waves-effect waves-light register-btn" name="action" type="reset"><i className="material-icons left">input</i>Reset</button>
                    </div>
                </form>
                <div id="already-registered">Already have an account? <Link to='./login'>Login</Link></div>
   </div>
  );
}

export default Register;