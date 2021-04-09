import "./ProfileDetailsEdit.css";
import { Component } from 'react';
import userService from "../../services/userService";
import countryList from "../../services/countryList";
import React from 'react';
import Debounce from 'react-debounce-component';
import M from 'materialize-css';

class ProfileDetailsEdit extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user_data: '',
        user_id: localStorage.getItem('id'),
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

        userService.userData(this.state.user_id)
        .then(data => this.setState({ user_data: data }))

        if (this.state.country === 'Country') {
           this.setState({country: false});
        }

            this.setState({countries: countryList});

            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {classes: 'form-countrylist-dropdown', dropdownOptions: countryList});
        }

        componentDidUpdate() {
            if(!this.state.user_data) {
                userService.userData(this.state.user_id)
                .then(data => this.setState({ user_data: data }))
            }

            if (this.state.contry === 'Country' || this.state.contry === '') {
                this.setState({contry: false});
             }

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
          console.log(e.target.value)

        this.setState({country: e.target.value},
  
            function validateCountry() {
              if (this.state.country === 'Country'|| !this.state.country || this.state.country === '') { this.setState({country: this.state.user_data.country}) } 
              else { this.setState({register_country_error: "", country: e.target.value}) }
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
    
    const { name, password, rePassword, country, address, phone } = this.state;

    let user = { "userId": this.state.user_data.objectId };

    if(name === '') {
        this.setState({name: this.state.user_data.name});
   } else {
       user.name = name;
   };


    if(password === '' && rePassword === '') {
        return this.setState({register_password_error: "Enter the old or a new password!"});
    } else {
        user.password = password;
    }


    if(password !== rePassword) {
        return this.setState({register_rePassword_error: "Password missmatch!"});
    }

    if(country === '' || country === 'Country') {
         this.setState({country: this.state.user_data.country});
    } else {
        user.country = country;
    };

    if(this.state.address === '') {
         this.setState({address: this.state.user_data.address});
    } else {
        user.address = address;
    };

    if(this.state.phone === '') {
        this.setState({phone: this.state.user_data.phone});
   } else {
       user.phone = phone;
   };

    userService.userUpdate(user)
    .then(result => {
        M.toast({html: 'Update successful!'});
            if (history) { history.push(`/user/profile/details/${this.state.user_id}, ${result}`) };
    })
    
        
    };

    cancelHandler = () => { 
        const { history } = this.props;
            if (history) { history.push(`/user/profile/details/${this.state.user_id}`) };
    };
      

render() {
    return (
       <>
       <h2 className="page-title">CREATE NEW ACCOUNT</h2>
       <section className="center">
       <article></article>
     <form id="user-register">
                    <div className="row">
                        <div className="form-field-group">
                            <input id="name" type="text" className="form-input-field" name="name" onChange={this.changeHandlerName.bind(this)} value={this.state.name ? this.state.name : this.state.user_data.name} placeholder="Your names" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.register_name_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="email" type="email" className="form-input-field" name="email" disabled value={this.state.email ? this.state.email : this.state.user_data.email} placeholder="Email" />
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

                    <div className="row">
                    <div className="form-field-group">
                        <select className="browser-default form-countrylist-dropdown" onChange={this.changeHandlerCountry.bind(this)} >
                            <option value={this.state.user_data.country}>Country</option>
                            {this.state.countries.map(x =>
                                <option value={x} key={x}>{x}</option>
                            )}
                        </select>
                        <span className="vaidation-error error-text-red">{this.state.register_country_error}</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-field-group">
                            <input id="address" type="text" className="form-input-field" name="address" onChange={this.changeHandlerAddress.bind(this)} value={this.state.address ? this.state.address : this.state.user_data.address} placeholder="Address" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.register_address_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="phone" type="text" className="form-input-field" name="phone" onChange={this.changeHandlerPhone.bind(this)} value={this.state.phone ? this.state.phone : this.state.user_data.phone} placeholder="Phone number" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.register_phone_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    
                    <span className="vaidation-error error-text-red form-error">{this.state.register_server_error}</span>
                    <div id="register-buttons">
                    <button onClick={this.submitHandler.bind(this)} disabled={this.state.disable_submit} className="btn waves-effect waves-light register-btn" name="action"><i className="material-icons left">input</i>Save</button>
                    <button onClick={this.cancelHandler.bind(this)} className="btn waves-effect waves-light register-btn" name="action" type="reset"><i className="material-icons left">input</i>Cancel</button>
                    </div>
                </form>
                <article></article>
                </section>
    </>
  );
}
}

export default ProfileDetailsEdit;