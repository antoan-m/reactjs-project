import "./Footer.css";

import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';


function Footer() {
  return (
<section className="footer">
       <article className="footer-top">
         <article className="footer-address">
           <h5>Address</h5><p>Sofia, Oborishte Street 35</p>
           <p><span>Find us </span><NavLink to="/contact" className="footer-address-map-link">HERE</NavLink></p>
         </article>
         <article className="footer-contacts">
           <h5>Contact</h5><p>contact.office@bookstore.com</p>
           <p>+359 333 555 999</p>
         </article>
         <article className="footer-payments">
           <img src={process.env.PUBLIC_URL + '/payments.png'} alt="payments" />
         </article>
         <article className="footer-share">
           <a href="https://facebook.com">
             <i className="fab fa-facebook-square"></i>
          </a>
           <a href="https://instagram.com">
             <i className="fab fa-instagram-square"></i>
          </a>
           <a href="https://youtube.com">
             <i className="fab fa-youtube-square"></i>
          </a>
           <a href="https://twitter.com">
             <i className="fab fa-twitter-square"></i>
          </a>
           <a href="https://pinterest.com">
             <i className="fab fa-pinterest-square"></i>
          </a>
         </article>
       </article>
       <article className="footer-bottom">
          &#169;2021 Book Store. All rights reserved.
       </article>
     </section>
  );
}

export default Footer;