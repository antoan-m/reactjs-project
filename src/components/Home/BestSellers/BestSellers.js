import "./BestSellers.css";

import { NavLink } from 'react-router-dom';

function BestSellers() {
  return (

<section className="best-sellers">
       <article className="best-sellers-item-big">
       <NavLink to="#">
           <img src="best-sellers-banner.jpg" alt="Best Sellers" />
           <h2>Best Sellers</h2>
        </NavLink>
       </article>
       <article className="best-sellers-items-small">
         <article className="best-sellers-items-item">
         <NavLink to="/books/11111">
             <img src="./books/book-1.jpg" className="best-sellers-items-item-img" alt="Under a Firefly Moon (Firefly Lake Book 1)" />
          </NavLink>
           <h3>
           <NavLink to="/books/11111">Under a Firefly Moon(Firefly Lake Book 1)</NavLink>
           </h3>
           <h5>
           <NavLink to="/authors/asdasdasd">Nora Roberts</NavLink>
           </h5>
           <p>$29.99</p>
         </article>
         <article className="best-sellers-items-item">
         <NavLink to="/books/11111">
             <img src="./books/book-1.jpg" className="best-sellers-items-item-img" alt="Under a Firefly Moon (Firefly Lake Book 1)" />
          </NavLink>
           <h3>
           <NavLink to="/books/11111">Under a Firefly Moon(Firefly Lake Book 1)</NavLink>
           </h3>
           <h5>
           <NavLink to="/authors/asdasdasd">Nora Roberts</NavLink>
           </h5>
           <p>$29.99</p>
         </article><article className="best-sellers-items-item">
         <NavLink to="/books/11111">
             <img src="./books/book-1.jpg" className="best-sellers-items-item-img" alt="Under a Firefly Moon (Firefly Lake Book 1)" />
          </NavLink>
           <h3>
           <NavLink to="/books/11111">Under a Firefly Moon(Firefly Lake Book 1)</NavLink>
           </h3>
           <h5>
           <NavLink to="/authors/asdasdasd">Nora Roberts</NavLink>
           </h5>
           <p>$29.99</p>
         </article><article className="best-sellers-items-item">
         <NavLink to="/books/11111">
             <img src="./books/book-1.jpg" className="best-sellers-items-item-img" alt="Under a Firefly Moon (Firefly Lake Book 1)" />
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

  );
}

export default BestSellers;