import "./Register.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from "../../services/userService";
import countryList from "../../services/countryList";
import React from 'react';
import Debounce from 'react-debounce-component';
import M from 'materialize-css';

class Register extends Component {
    constructor(props) {
      super(props);
      this.state = {
        current_user: '',
        register_server_error: '',
        register_name_error: '',
        register_email_error: '',
        register_password_error: '',
        register_rePassword_error: '',
        register_country_error: '',
        register_address_error: '',
        register_phone_error: '',
        name: '',
        email: '',
        password: '',
        rePassword: '',
        country: '',
        address: '',
        phone: '',
        countries: []
      }
    }

    componentDidMount() {
            this.setState({countries: countryList});

            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {classes: 'form-countrylist-dropdown', dropdownOptions: countryList});
        }

        componentDidUpdate() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {classes: 'form-countrylist-dropdown', dropdownOptions: countryList});
        }


    changeHandlerName(e) {

        this.setState({name: e.target.value},
  
            function validateName() {
  
              if (this.state.name.length < 3) { this.setState({register_name_error: "Name should be at least 3 characters long!"}) }
              else { this.setState({register_name_error: ""}) }
            }
        )
      };

    changeHandlerEmail(e) {
  
        this.setState({email: e.target.value},
  
            function validateEmail() {
  
                if (!this.state.email.includes('@')) { this.setState({register_email_error: "Email should contain '@'!"}) } 
                else if (!this.state.email.includes('.')) { this.setState({register_email_error: "Invalid email!"}) }
                else if (this.state.email.indexOf(' ') !== -1) { this.setState({register_email_error: "Invalid email!"}) }
                else if (this.state.email.length < 6) { this.setState({register_email_error: "Invalid email!"}) }
                else if (this.state.email === '') { this.setState({register_email_error: ""}) }
                else { this.setState({register_email_error: ""}) }
            }
        )
      };

      changeHandlerPassword(e) {

        this.setState({password: e.target.value},
  
            function validatePassword() {
  
              if (this.state.password.length < 6) { this.setState({register_password_error: "Password should be at least 6 characters long!"}) }
              else if (this.state.password.indexOf(' ') !== -1) { this.setState({register_password_error: "Password should not contain spaces!"}) }
              else if (this.state.password === '') { this.setState({register_password_error: ""}) }
              else { this.setState({register_password_error: ""}) }
            }
        )
      };

      changeHandlerRePassword(e) {
  
        this.setState({rePassword: e.target.value},
  
            function validateRePassword() {
  
              if (this.state.password !== this.state.rePassword) { this.setState({register_rePassword_error: "Password missmatch!"}) } 
              else if (this.state.password.rePassword < 6) { this.setState({register_password_error: "Password missmatch!"}) }
              else { this.setState({register_rePassword_error: ""}) }
            }
        )
      };

      changeHandlerPhone(e) {
  
        this.setState({phone: e.target.value},
  
            function validatePhone() {

              let letter = /[a-zA-Z\D]/;
  
              if (this.state.phone.match(letter)) { this.setState({register_phone_error: "Phone should contain only numbers!"}) } 
              else if (this.state.phone.length < 10) { this.setState({register_phone_error: "Invalid phone!"}) }
              else if (this.state.phone === '') { this.setState({register_phone_error: ""}) }
              else { this.setState({register_phone_error: ""}) }
            }
        )
      };

      changeHandlerCountry(e) {

        this.setState({country: e.target.value},
  
            function validateCountry() {
              if (this.state.country === 'Country'|| !this.state.country || this.state.country === '') { this.setState({register_country_error: "Choose country!"}) } 
              else { this.setState({register_country_error: ""}) }
            }
        )
      };

      changeHandlerAddress(e) {

        this.setState({address: e.target.value},
  
            function validateAddress() {
  
              if (this.state.address.length === 0) { this.setState({register_address_error: "Enter address!"}) }
              else if (this.state.address === '') { this.setState({register_address_error: ""}) }
              else { this.setState({register_address_error: ""}) }
            }
        )
      }


submitHandler(e) {
    e.preventDefault();

    const { history } = this.props;
    
    const { name, email, password, rePassword, country, address, phone } = this.state;
    
    if(name === '') {
         return this.setState({register_name_error: "Name is empty!"});
    };

    if(email === '') {
        return this.setState({register_email_error: "Email is empty!"});
    };

    if(password === '') {
        return this.setState({register_password_error: "Password is empty!"});
    };

    if(password !== rePassword) {
        return this.setState({register_rePassword_error: "Password missmatch!"});
    }

    if(country === '' || country === 'Country') {
        return this.setState({register_country_error: "Choose country!"});
    };

    if(address === '') {
        return this.setState({register_address_error: "Address is empty!"});
    };

    if(phone === '') {
        return this.setState({register_phone_error: "Phone is empty!"});
    };

    let user = { "name": name, "email": email, "password": password, "country": country, "address": address, "phone": phone, "user_type": "user" };

    userService.userRegister(user);
    
        if (history) { history.push('/') };
    };

    submitClearHandler = () => { 
        this.setState({
        errors: 0,
        register_name_error: '',
        register_email_error: '',
        register_password_error: '',
        register_rePassword_error: '',
        register_country_error: '',
        register_address_error: '',
        register_phone_error: '',
        name: '',
        email: '',
        password: '',
        rePassword: '',
        country: '',
        address: '',
        phone: ''
    });
      }
      



render() {
    return (
       <>
       <h2 className="page-title">CREATE NEW ACCOUNT</h2>
       <section className="center">
       <article></article>
     <form id="user-register">
                    <div className="row">
                        <div className="form-field-group">
                            <input id="name" type="text" className="form-input-field" name="name" onChange={this.changeHandlerName.bind(this)} value={this.state.name} placeholder="Your names" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.register_name_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="email" type="email" className="form-input-field" name="email" onChange={this.changeHandlerEmail.bind(this)} value={this.state.email} placeholder="Email" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.register_email_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="password" type="password" className="form-input-field" name="password" onChange={this.changeHandlerPassword.bind(this)} value={this.state.password} placeholder="Password" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.register_password_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="rePassword" type="password" className="form-input-field" name="rePassword" onChange={this.changeHandlerRePassword.bind(this)} value={this.state.rePassword} placeholder="Repeat password" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.register_rePassword_error}</span>
                            </Debounce>
                        </div>
                    </div>

                    {/* <div className="row">
                        <div className="form-field-group">
                            <input id="country" type="text" className="form-input-field" name="country" onChange={this.changeHandlerCountry.bind(this)} value={this.state.contry} placeholder="Country" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.register_country_error}</span>
                            </Debounce>
                        </div>
                    </div> */}

                    <div className="row">
                    <div className="form-field-group">
                        <select className="browser-default form-countrylist-dropdown" onChange={this.changeHandlerCountry.bind(this)} >
                            <option value={this.state.contry}>Country</option>
                            {this.state.countries.map(x =>
                                <option value={x} key={x}>{x}</option>
                            )}
                        </select>
                        <span className="vaidation-error error-text-red">{this.state.register_country_error}</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-field-group">
                            <input id="address" type="text" className="form-input-field" name="address" onChange={this.changeHandlerAddress.bind(this)} value={this.state.address} placeholder="Address" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.register_address_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="phone" type="text" className="form-input-field" name="phone" onChange={this.changeHandlerPhone.bind(this)} value={this.state.phone} placeholder="Phone number" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.register_phone_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    
                    <span className="vaidation-error error-text-red form-error">{this.state.register_server_error}</span>
                    <div id="register-buttons">
                    <button onClick={this.submitHandler.bind(this)} disabled={this.state.disable_submit} className="btn waves-effect waves-light register-btn" name="action"><i className="material-icons left">input</i>Register</button>
                        <button onClick={this.submitClearHandler.bind(this)} className="btn waves-effect waves-light register-btn" name="action" type="reset"><i className="material-icons left">input</i>Reset</button>
                    </div>
                </form>
                <article></article>
                </section>
                <div className="already-registered">Already have an account? <Link to='./login'>LOGIN</Link></div>
    </>
  );
}
}

export default Register;