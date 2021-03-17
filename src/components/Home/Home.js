import "./Home.css";

import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';

function Home() {
  return (
   <div className="App">
     <showcase className="home-main-sliders">
       <section className="home-main-sliders-left">
         <article className="home-main-sliders-big">
           <div className="main-carousel">
             <img src="slide1.jpg" className="crousel-image" style={{height: "530px"}} alt="" />
           </div>
         </article>
       </section>
       <section className="home-main-sliders-right">
         <article className="home-main-sliders-small">
         <NavLink to="/news/12esdif2ifsdfsdf23r">
             <img src="slide-small-1.jpg" className="crousel-image" alt="" />
        </NavLink>
         </article>
         <article className="home-main-sliders-small">
         <NavLink to="/news/sds43589s9dfhniwudhf">
             <img src="slide-small-2.jpg" className="crousel-image" alt="" />
             </NavLink>
         </article>
       </section>
     </showcase>

     <section className="home-info-boxes">
       <article className="home-info-boxes-item">
         <h4>Free Delivery</h4><p>For orders over $50</p>
       </article>
       <article className="home-info-boxes-item">
         <h4>Secure Payment</h4><p>100 % Secure Payment</p>
       </article>
       <article className="home-info-boxes-item">
         <h4>Money Back Guarantee</h4><p>Within 30 Days</p>
       </article>
       <article className="home-info-boxes-item">
         <h4>24/7 Support</h4><p>Within 1 Business Day</p>
       </article>
     </section>

     <section className="home-weekly-deals">
       <section className="home-weekly-deals-header">
         <article className="home-weekly-deals-header-title">
           <h2>Deals of the week</h2>
         </article>
         <article className="home-weekly-deals-header-viewall">
         <NavLink to="/books/discounted">
             <span>View All</span>
          </NavLink>
         </article>
       </section>
       <section className="home-weekly-deals-items">
         <article className="home-weekly-deals-items-item">
         <NavLink to="/books/11111">
             <img src="./books/book-1.jpg" className="home-weekly-deals-items-item-img" alt="Under a Firefly Moon (Firefly Lake Book 1)"
              />
          </NavLink>
           <article className="home-weekly-deals-items-item-info">
             <h3>
             <NavLink to="/books/11111">Under a Firefly Moon(Firefly Lake Book 1)</NavLink>
             </h3>
             <h5>
             <NavLink to="/authors/4234234">Nora Roberts</NavLink>
             </h5>
             <p>$29.99</p>
           </article>
         </article>
         <article className="home-weekly-deals-items-item">
         <NavLink to="/books/22222">
             <img src="./books/book-1.jpg" className="home-weekly-deals-items-item-img" alt="Under a Firefly Moon (Firefly Lake Book 1)"
              />
          </NavLink>
           <article className="home-weekly-deals-items-item-info">
             <h3>
             <NavLink to="/books/22222">Under a Firefly Moon(Firefly Lake Book 1)</NavLink>
             </h3>
             <h5>
             <NavLink to="/authors/534554">Nora Roberts</NavLink>
             </h5>
             <p>$29.99</p>
           </article>
         </article>
       </section>
     </section>

     <section className="home-best-sellers">
       <article className="home-best-sellers-item-big">
       <NavLink to="/books/thrillers">
           <img src="thrillers-banner.jpg" alt="Thrillers" />
           <h2>Featured Category</h2>
           <h3>Thrillers</h3>
        </NavLink>
       </article>
       <article className="home-best-sellers-items-small">
         <article className="home-best-sellers-items-item">
         <NavLink to="/books/11111">
             <img src="./books/book-1.jpg" className="home-best-sellers-items-item-img" alt="Under a Firefly Moon (Firefly Lake Book 1)" />
          </NavLink>
           <h3>
           <NavLink to="/books/11111">Under a Firefly Moon(Firefly Lake Book 1)</NavLink>
           </h3>
           <h5>
           <NavLink to="/authors/asdasdasd">Nora Roberts</NavLink>
           </h5>
           <p>$29.99</p>
         </article>
         <article className="home-best-sellers-items-item">
         <NavLink to="/books/11111">
             <img src="./books/book-1.jpg" className="home-best-sellers-items-item-img" alt="Under a Firefly Moon (Firefly Lake Book 1)" />
          </NavLink>
           <h3>
           <NavLink to="/books/11111">Under a Firefly Moon(Firefly Lake Book 1)</NavLink>
           </h3>
           <h5>
           <NavLink to="/authors/asdasdasd">Nora Roberts</NavLink>
           </h5>
           <p>$29.99</p>
         </article><article className="home-best-sellers-items-item">
         <NavLink to="/books/11111">
             <img src="./books/book-1.jpg" className="home-best-sellers-items-item-img" alt="Under a Firefly Moon (Firefly Lake Book 1)" />
          </NavLink>
           <h3>
           <NavLink to="/books/11111">Under a Firefly Moon(Firefly Lake Book 1)</NavLink>
           </h3>
           <h5>
           <NavLink to="/authors/asdasdasd">Nora Roberts</NavLink>
           </h5>
           <p>$29.99</p>
         </article><article className="home-best-sellers-items-item">
         <NavLink to="/books/11111">
             <img src="./books/book-1.jpg" className="home-best-sellers-items-item-img" alt="Under a Firefly Moon (Firefly Lake Book 1)" />
          </NavLink>
           <h3>
           <NavLink to="/books/11111">Under a Firefly Moon(Firefly Lake Book 1)</NavLink>
           </h3>
           <h5>
           <NavLink to="/authors/asdasdasd">Nora Roberts</NavLink>
           </h5>
           <p>$29.99</p>
         </article>
       </article>
     </section>

     <section className="newsletter">
       <h3>Join Our Newsletter</h3>
       <p>
         Signup to be the first to hear about exclusive deals, special offers and upcoming collections
         </p>
       <article className="newsletter-form">
         <input type="text" className="newsletter-input" placeholder="Enter your email to recieve newsletter" />
         <button type="submit" name="subscribe" className="newsletter-button">Subscribe</button>
       </article>
     </section>

     
   </div>
  );
}

export default Home;
