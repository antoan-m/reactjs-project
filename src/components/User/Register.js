import "./Register.css";

import { Link } from 'react-router-dom';


function Register() {
  return (
   <fragment>
       <h2 className="page-title">CREATE NEW ACCOUNT</h2>
       <section className="center">
       <article></article>
     <form id="user-register">
                    <div className="row">
                        <div className="form-field-group">
                            <input id="name" type="text" className="form-input-field" name="name" placeholder="Your names" />
                            <span className="vaidation-error error-text-red">Name is required!</span>
                            <span className="vaidation-error error-text-red">Name must be at least 3 characters!</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="email" type="email" className="form-input-field" name="email" placeholder="Email" />
                            <span className="vaidation-error error-text-red">Email is required!</span>
                            <span className="vaidation-error error-text-red">Email is invalid!</span>
                            <span className="vaidation-error error-text-red">Email is already registered!</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="password" type="password" className="form-input-field" name="password" placeholder="Password" />
                            <span className="vaidation-error error-text-red">Password is required!</span>
                            <span className="vaidation-error error-text-red">Password must be at least 6 characters!</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="rePassword" type="password" className="form-input-field" name="rePassword" placeholder="Repeat password" />
                            <span className="vaidation-error error-text-red">Password is required!</span>
                            <span className="vaidation-error error-text-red">Password must be at least 6 characters!</span>
                            <span className="vaidation-error error-text-red">Passwords don't match!</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="city" type="text" className="form-input-field" name="city" placeholder="City" />
                            <span className="vaidation-error error-text-red">City is required!</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="street" type="text" className="form-input-field" name="street" placeholder="Street" />
                            <span className="vaidation-error error-text-red">Street is required!</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="phone" type="text" className="form-input-field" name="phone" placeholder="Phone number" />
                            <span className="vaidation-error error-text-red">Phone number is required!</span>
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
                    <span className="vaidation-error error-text-red form-error">ERROR MESSAGE</span>
                    <div id="register-buttons">
                        <button className="btn waves-effect waves-light register-btn" name="action"><i className="material-icons left">input</i>Register</button>
                        <button className="btn waves-effect waves-light register-btn" name="action" type="reset"><i className="material-icons left">input</i>Reset</button>
                    </div>
                </form>
                <article></article>
                </section>
                <div className="already-registered">Already have an account? <Link to='./login'>LOGIN</Link></div>
   </fragment>
  );
}

export default Register;