import "./Login.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from "../../services/userService";
import React from 'react';
import M from 'materialize-css';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        current_user: '',
        error: '',
        email: '',
        password: '',
        stayLoggedIn: true
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
       <h2 className="page-title">LOG IN</h2>
       <section className="center">
            <article></article>
                <form>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="email" type="email" className="form-input-field" name="email" value={this.state.email} onChange={this.changeHandlerEmail.bind(this)} />
                            <span className="vaidation-error error-text-red">Email is required!</span>
                            <span className="vaidation-error error-text-red">Email is invalid!</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="password" type="password" className="form-input-field" name="password" value={this.state.password} onChange={this.changeHandlerPass.bind(this)} />
                            <span className="vaidation-error error-text-red">Password is required!</span>
                            <span className="vaidation-error error-text-red">Password must be at least 6 characters!</span>
                        </div>
                        <span className="vaidation-error error-text-red form-error">ERROR MESSAGE HERE</span>
                    </div>
                    <div className="login-button">
                        <button onClick={this.submitHandler.bind(this)} className="btn waves-effect waves-light login-btn" name="action"><i className="material-icons left">input</i>Login</button>
                    </div>
                </form>
            </section>
                <div className="not-registered">Don't have an account? <Link to="./register">REGISTER</Link></div>
            <article></article>
    </>
  );
}
}

export default Login;