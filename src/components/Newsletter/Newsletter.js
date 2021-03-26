import "./Newsletter.css";
import { Component } from 'react';
import newsletterService from "../../services/newsletterService";
import React from 'react';
import M from 'materialize-css';
import Debounce from 'react-debounce-component';


class Newsletter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        subscribers: '',
        email: '',
        newsletterError: ''
      }
    }
    
    componentDidMount() {
       this.subs = newsletterService.getNewsletter()
      .then(res => res.json())
      .then(res => {
        this.setState({subscribers: res.subscribers})
        // M.toast({html: JSON.stringify(res)});
        // M.toast({html: JSON.stringify(this.state.subscribers)});
    });
    }

    componentDidUpdate() {
      
   }

  
    changeHandlerEmail(e) {

      // console.log('TARGET:' + e.target.value);

      this.setState({email: e.target.value},

          function validateEmail() {

            if (!this.state.email.includes('@')) { this.setState({newsletterError: "Invalid email!"}) } 
            else { this.setState({newsletterError: ""}) }

            if (this.state.email.length < 6) { this.setState({newsletterError: "Invalid email!"}) }

            if (this.state.email === '') { this.setState({newsletterError: ""}) }
          }
      )
      newsletterService.getNewsletter()
        .then(res => res.json())
        .then(res => {
      
        this.setState({subscribers: res.subscribers})
    });
  }

  subscribeNewsletter(e) {
      e.preventDefault();

      this.setState({email: e.target.value})

      const { email, subscribers } = this.state;
      
    this.subs = newsletterService.getNewsletter()
      .then(res => res.json())
      .then(res => {
        this.setState({subscribers: res.subscribers})
        
    });

    if (this.state.email !== '' && this.state.newsletterError === '') {
        this.newSubscriber = newsletterService.subscribeNewsletter(this.state.subscribers, this.state.email)
        .then(response => response.text())
        .then(result => {console.log(result);
          M.toast({html: 'Thank you for subscribing!'});
  })
        .catch(error => console.log('error', error));
      } else if (this.state.email === ''){
        this.setState({newsletterError: "Enter valid email!"})
        return
    }
      
      };

      

render() {
      return (
<section className="newsletter">
       <h3>Join Our Newsletter</h3>
       <p>
         Signup to be the first to hear about exclusive deals, special offers and upcoming books
         </p>
    <article className="newsletter-section">
       <form className="newsletter-form">
         <input type="text" className="newsletter-input" id="email" name="email" onChange={this.changeHandlerEmail.bind(this)} value={this.state.email} placeholder="Enter your email..." />
         <button type="submit" name="subscribe" disabled={this.state.newsletterError} onClick={this.subscribeNewsletter.bind(this)} className="newsletter-button">SUBSCRIBE</button>
       </form>
       <Debounce ms={1000}>
          <p className="newsletter-error">{this.state.newsletterError}</p>
       </Debounce>
    </article>
</section>
  );
}
}

export default Newsletter;