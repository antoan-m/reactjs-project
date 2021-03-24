import "./EditBook.css";
import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import userService from "../../services/userService";
import React from 'react';
import M from 'materialize-css';

class EditBook extends Component {
    constructor(props) {
      super(props);
      this.state = {
        current_user: '',
        error: '',
        name: '',
        email: '',
        password: '',
        rePassword: '',
        city: '',
        street: '',
        phone: '',
        useType: ''
      }
    }

changeHandlerEmail(e) {
    this.setState({email: e.target.value});
    console.log(e.target.value);
}

changeHandlerPass(e) {
    this.setState({password: e.target.value});
    console.log(e.target.value);
}

submitHandler(e) {
    e.preventDefault();

    const { email, password } = this.state;
    
    userService.userLogin(email, password, true)
    .then(user => {
        this.setState({ current_user: user})
        })
        .catch(error => {
            this.setState({ error: error })
        });
    };



render() {
    return (
       <>
       <h2 className="page-title">CREATE NEW ACCOUNT</h2>
       <section className="center">
       <article></article>
     <form id="user-EditBook">
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
                            <span className="vaidation-error error-text-red">Email is already EditBooked!</span>
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
                    
                    <div className="switch EditBook-switch">
                    <label>
                    User
                    <input type="checkbox" name="userType" />
                    <span className="lever"></span>
                    Seller
                    </label>
                    </div>
                    <span className="vaidation-error error-text-red form-error">ERROR MESSAGE</span>
                    <div id="EditBook-buttons">
                        <button onClick={this.submitHandler.bind(this)} className="btn waves-effect waves-light EditBook-btn" name="action"><i className="material-icons left">input</i>EditBook</button>
                        <button className="btn waves-effect waves-light EditBook-btn" name="action" type="reset"><i className="material-icons left">input</i>Reset</button>
                    </div>
                </form>
                <article></article>
                </section>
                <div className="already-EditBooked">Already have an account? <Link to='./login'>LOGIN</Link></div>
    </>
  );
}
}

export default EditBook;