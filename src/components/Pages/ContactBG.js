import "./Contact.css";
import { Component } from 'react';
import React from 'react';
import contactService from "../../services/contactService";
// import { contactMap } from "../../services/contactMapService";
import Debounce from 'react-debounce-component';


class ContactBG extends Component {
    constructor(props) {
      super(props);
      this.state = {
        current_user: '',
        contact_server_error: '',
        contact_name_error: '',
        contact_email_error: '',
        contact_subject_error: '',
        contact_message_error: '',
        name: '',
        email: '',
        subject: '',
        message: '',
        message_length: 0
      }
    }

    componentDidMount() {
    
    // contactMap();

    let currentName = localStorage.getItem('name');
    let currentEmail = localStorage.getItem('email');

    if (currentName) { this.setState({name: currentName})}
    if (currentEmail) { this.setState({email: currentEmail})}
  
    }

changeHandlerName(e) {

    this.setState({name: e.target.value},

        function validateName() {

          if (this.state.name.length < 3) { this.setState({contact_name_error: "Name should be at least 3 characters long!"}) }
          else { this.setState({contact_name_error: ""}) }
        }
    )
  };

changeHandlerEmail(e) {

    this.setState({email: e.target.value},

        function validateEmail() {

            if (!this.state.email.includes('@')) { this.setState({contact_email_error: "Email should contain '@'!"}) } 
            else if (!this.state.email.includes('.')) { this.setState({contact_email_error: "Invalid email!"}) }
            else if (this.state.email.indexOf(' ') !== -1) { this.setState({contact_email_error: "Invalid email!"}) }
            else if (this.state.email.length < 6) { this.setState({contact_email_error: "Invalid email!"}) }
            else if (this.state.email === '') { this.setState({contact_email_error: ""}) }
            else { this.setState({contact_email_error: ""}) }
        }
    )
  };

  changeHandlerSubject(e) {

    this.setState({subject: e.target.value},

        function validateSubject() {

          if (this.state.subject.length === 0) { this.setState({contact_subject_error: "Enter subject!"}) }
          else if (this.state.subject.length < 4) { this.setState({contact_subject_error: "Subject is too short!"}) }
          else { this.setState({contact_subject_error: ""}) }
        }
    )
  }

  changeHandlerMessage(e) {

    this.setState({message: e.target.value},

        function validateMessage() {
           this.setState({ message_length: e.target.value.length });

          if (this.state.message.length < 10) { this.setState({contact_message_error: "Message is too short!"}) }
          else if (this.state.message === '') { this.setState({contact_message_error: ""}) }
          else { this.setState({contact_message_error: ""}) }
        }
    )
  }


submitHandler(e) {
e.preventDefault();

const { history } = this.props;

const { name, email, subject, message } = this.state;

if(name === '') {
    return this.setState({contact_name_error: "Name is empty!"});
};

if(email === '') {
   return this.setState({contact_email_error: "Email is empty!"});
};

if(subject === '') {
   return this.setState({contact_subject_error: "Subject is empty!"});
};

if(message === '') {
   return this.setState({contact_message_error: "Message is empty!"});
}


contactService.contact(name, email, subject, message);

    if (history) { history.push('/') };
};

submitClearHandler = () => { 
    this.setState({
    contact_name_error: '',
    contact_email_error: '',
    contact_subject_error: '',
    contact_message_error: '',
    name: '',
    email: '',
    subject: '',
    message: '',
    message_length: ''
});
  }

render() {
    return (
    <>
      <h2 className="page-title contact">CONTACT US</h2>
      <article className="about-us about-us">
      
          <article id="contact-map-placeholder" className="contact-map" style={{backgroundColor: `process.env.PUBLIC_URL + '/payments.png'}`}}>
<iframe width="1400" height="450" frameBorder="0" scrolling="no" src="https://www.bgmaps.com/link/map/CA094FE2FA760B156B7CC692E1FFA6C4"></iframe>
          </article>

          <h2 className="contact-h2">Contact Information</h2>

          <h3 className="contact-h3">We will answer any questions you may have about our online sales, rights or partnership service right here.</h3>

          <article className="contact-details">
            <h5>Local Store</h5>
            <p>Sofia, Oborishte Street 35</p>
            <p>contact@bookstore-project.com</p>
            <p>+359 333 555 999</p>
          </article>

          <form id="user-contact">
                    <div className="row">
                        <div className="form-field-group">
                            <input id="name" type="text" onChange={this.changeHandlerName.bind(this)} value={this.state.name} className="form-input-field" name="name" placeholder="Name" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.contact_name_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="email" type="email" onChange={this.changeHandlerEmail.bind(this)} value={this.state.email} className="form-input-field" name="email" placeholder="Email" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.contact_email_error}</span>
                            </Debounce>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="form-field-group">
                            <input id="subject" type="text" onChange={this.changeHandlerSubject.bind(this)} value={this.state.subject} className="form-input-field" name="subject" placeholder="Subject" />
                            <Debounce ms={1000}>
                            <span className="vaidation-error error-text-red">{this.state.contact_subject_error}</span>
                            </Debounce>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-field-group">
                            <textarea id="contact-message" onChange={this.changeHandlerMessage.bind(this)} value={this.state.message} type="text" className="materialize-textarea form-input-field contact-textarea" name="message" placeholder="Message"></textarea>
                            <span className="vaidation-error error-text-red with-counter">
                                <Debounce ms={1000}>
                                    <span>{this.state.contact_message_error}</span>
                                </Debounce>
                            <span className="contact-message-counter">{this.state.message_length}</span>
                            </span>
                        </div>
                    </div>

                    <div className="submit-buttons">
                    <button className="btn waves-effect waves-light submit-btn" name="action" onClick={this.submitHandler.bind(this)}><i className="material-icons left">input</i>Submit</button>
                    </div>
                </form>
        
      </article>
    </>
  );
}
}

export default ContactBG;
