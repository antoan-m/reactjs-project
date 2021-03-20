import "./Newsletter.css";

function Newsletter() {
  return (

<section className="newsletter">
       <h3>Join Our Newsletter</h3>
       <p>
         Signup to be the first to hear about exclusive deals, special offers and upcoming books
         </p>
       <article className="newsletter-form">
         <input type="text" className="newsletter-input" placeholder="Enter your email to signup" />
         <button type="submit" name="subscribe" className="newsletter-button">Subscribe</button>
       </article>
</section>
  );
}

export default Newsletter;