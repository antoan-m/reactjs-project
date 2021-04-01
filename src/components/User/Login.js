import "./Login.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from "../../services/userService";
import React from 'react';
import Debounce from 'react-debounce-component';
import M from 'materialize-css';
import Backendless from 'backendless';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        current_user: '',
        error: '',
        email: '',
        password: '',
        stayLoggedIn: true,
        login_email_error: '',
        login_password_error: '',
      }
    }

    userToken = localStorage.getItem('user-token');

    componentDidMount() {

        userService.userValidate(this.userToken);
    }

    changeHandlerEmail(e) {
        
        this.setState({email: e.target.value},
  
            function validateEmail() {
  
                if (!this.state.email.includes('@')) { this.setState({login_email_error: "Email should contain '@'!"}) } 
                else if (!this.state.email.includes('.')) { this.setState({login_email_error: "Invalid email!"}) }
                else if (this.state.email.indexOf(' ') !== -1) { this.setState({login_email_error: "Invalid email!"}) }
                else if (this.state.email.length < 6) { this.setState({login_email_error: "Invalid email!"}) }
                else if (this.state.email === '') { this.setState({login_email_error: ""}) }
                else { this.setState({login_email_error: ""}) }
            }
        )
    }

    changeHandlerPass(e) {

        this.setState({password: e.target.value},
  
            function validatePassword() {
  
              if (this.state.password.length < 6) { this.setState({login_password_error: "Password should be at least 6 characters long!"}) }
              else if (this.state.password.indexOf(' ') !== -1) { this.setState({login_password_error: "Password should not contain spaces!"}) }
              else if (this.state.password === '') { this.setState({login_password_error: ""}) }
              else { this.setState({login_password_error: ""}) }
            }
        )
    }

    submitHandler(e) {
        e.preventDefault();

        const { history } = this.props;

        const { email, password } = this.state;

    Backendless.UserService.login( email, password, false )
    .then(loggedInUser => {
        console.log(loggedInUser)
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
        
        // userService.userLogin(email, password, true)
        // .then(user => {
        //     this.setState({ current_user: user});
        //     console.log(user);
        // M.toast({html: 'Hello, ' + user['name'] + '!'})
        // localStorage.name = user['name'];
        // localStorage.email = user['email'];
        // localStorage.id = user['objectId'];
        // localStorage['user-token'] = user['user-token']
        //     })
        //     .catch(error => {
        //         this.setState({ error: error })
        //         M.toast({html: error.message})
        //     });

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
                            <Debounce ms={1000}>
                                <span className="vaidation-error error-text-red">{this.state.login_email_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="password" type="password" className="form-input-field" name="password" value={this.state.password} onChange={this.changeHandlerPass.bind(this)} />
                            <Debounce ms={1000}>
                                <span className="vaidation-error error-text-red">{this.state.login_password_error}</span>
                            </Debounce>
                        </div>
                        {/* <span className="vaidation-error error-text-red form-error">SERVER ERROR MESSAGE HERE</span> */}
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