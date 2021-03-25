import "./Newsletter.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from "../../services/userService";
import newsletterService from "../../services/newsletterService";
import React from 'react';
import M from 'materialize-css';

class Newsletter extends Component {
    constructor(props) {
      super(props);
    }
    state = {
        subscribers: '',
        email: ''
      }

  //   componentDidMount() {
  //      newsletterService.getNewsletter()
  //     .then(newsletter => this.setState({current_newsletter: newsletter}))
  //   }

  //   componentDidUpdate() {
  //     newsletterService.getNewsletter()
  //    .then(newsletter => this.setState(newsletter))
  //  }

  
    changeHandlerEmail(e) {
      console.log(e.target.value);
      this.setState({email: e.target.value})
      // console.log(this.state.email);
  }

  subscribeNewsletter(e) {
      e.preventDefault();

      this.setState({email: e.target.value})

      const { email, subscribers } = this.state;
      
    this.subs = newsletterService.getNewsletter()
      .then(res => res.json())
      .then(res => {
        this.setState({subscribers: res.subscribers})
        M.toast({html: JSON.stringify(res)});
        M.toast({html: JSON.stringify(this.state.subscribers)});
    });
      
  newsletterService.subscribeNewsletter(this.state.subscribers, this.state.email)
  .then(response => response.text())
  .then(result => {console.log(result);
    M.toast({html: JSON.stringify(result)})
  })
  .catch(error => console.log('error', error));
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
         <button type="submit" name="subscribe" onClick={this.subscribeNewsletter.bind(this)} className="newsletter-button">SUBSCRIBE</button>
       </form>
    </article>
</section>
  );
}
}

export default Newsletter;