import "./Contact.css";

// import { Route, Link, NavLink, Redirect, Switch } from "react-router-dom";

function Contact() {
  return (
    <>
      <h2 className="page-title contact">CONTACT US</h2>
      <article className="about-us about-us">
          <article className="contact-map">

          </article>

          <h2 className="contact-h2">Contact Information</h2>

          <h3 className="contact-h3">We will answer any questions you may have about our online sales, rights or partnership service right here.</h3>

          <article className="contact-details">
            <h5>Local Store</h5>
            <p>Sofia, Oborishte Street 35</p>
            <p>contact.office@bookstore.com</p>
            <p>+359 333 555 999</p>
          </article>

          <form id="user-register">
                    <div className="row">
                        <div className="form-field-group">
                            <input id="name" type="text" className="form-input-field" name="name" placeholder="Name" />
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
                            <input id="subject" type="text" className="form-input-field" name="subject" placeholder="Subject" />
                            <span className="vaidation-error error-text-red">Subject is required!</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-field-group">
                            <textarea id="contact-message" type="text" className="materialize-textarea form-input-field contact-textarea" name="message" placeholder="Message"></textarea>
                            <span className="vaidation-error error-text-red">Message is required!</span>
                        </div>
                    </div>

                    <div className="submit-buttons">
                        <button className="btn waves-effect waves-light submit-btn" name="action"><i className="material-icons left">input</i>Submit</button>

                    </div>
                </form>
        
      </article>
    </>
  );
}

export default Contact;
