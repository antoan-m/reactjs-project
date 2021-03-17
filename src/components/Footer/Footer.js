import "./Footer.css";

import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';


function Footer() {
  return (
<section class="footer">
       <article class="footer-top">
         <article class="footer-address">
           <h5>Address</h5><p>Sofia, Oborishte Street 35</p>
           <p><span>Find us </span><NavLink to="contact-us" class="footer-address-map-link">HERE</NavLink></p>
         </article>
         <article class="footer-contacts">
           <h5>Contact</h5><p>contact.office @bookstore.com</p>
           <p>+359 333 555 999</p>
         </article>
         <article class="footer-payments">
           <img src="payments.png" alt="payments" />
         </article>
         <article class="footer-share">
           <a href="https://facebook.com">
             <i class="fab fa-facebook-square"></i>
          </a>
           <a href="https://instagram.com">
             <i class="fab fa-instagram-square"></i>
          </a>
           <a href="https://youtube.com">
             <i class="fab fa-youtube-square"></i>
          </a>
           <a href="https://twitter.com">
             <i class="fab fa-twitter-square"></i>
          </a>
           <a href="https://pinterest.com">
             <i class="fab fa-pinterest-square"></i>
          </a>
         </article>
       </article>
       <article class="footer-bottom">
          &#169;2021 Book Store. All rights reserved.
       </article>
     </section>
  );
}

export default Footer;