import "./FeaturedCategory.css";

import { NavLink } from 'react-router-dom';

function FeaturedCategory() {
  return (

<section className="featured-category">
       <article className="featured-category-item-big">
       <NavLink to="/books/thrillers">
           <img src="thrillers-banner.jpg" alt="Thrillers" />
           <h2>Featured Category</h2>
           <h3>Thrillers</h3>
        </NavLink>
       </article>
       <article className="featured-category-items-small">
         <article className="featured-category-items-item">
         <NavLink to="/books/11111">
             <img src="./books/book-1.jpg" className="featured-category-items-item-img" alt="Under a Firefly Moon (Firefly Lake Book 1)" />
          </NavLink>
           <h3>
           <NavLink to="/books/11111">Under a Firefly Moon(Firefly Lake Book 1)</NavLink>
           </h3>
           <h5>
           <NavLink to="/authors/asdasdasd">Nora Roberts</NavLink>
           </h5>
           <p>$29.99</p>
         </article>
         <article className="featured-category-items-item">
         <NavLink to="/books/11111">
             <img src="./books/book-1.jpg" className="featured-category-items-item-img" alt="Under a Firefly Moon (Firefly Lake Book 1)" />
          </NavLink>
           <h3>
           <NavLink to="/books/11111">Under a Firefly Moon(Firefly Lake Book 1)</NavLink>
           </h3>
           <h5>
           <NavLink to="/authors/asdasdasd">Nora Roberts</NavLink>
           </h5>
           <p>$29.99</p>
         </article><article className="featured-category-items-item">
         <NavLink to="/books/11111">
             <img src="./books/book-1.jpg" className="featured-category-items-item-img" alt="Under a Firefly Moon (Firefly Lake Book 1)" />
          </NavLink>
           <h3>
           <NavLink to="/books/11111">Under a Firefly Moon(Firefly Lake Book 1)</NavLink>
           </h3>
           <h5>
           <NavLink to="/authors/asdasdasd">Nora Roberts</NavLink>
           </h5>
           <p>$29.99</p>
         </article><article className="featured-category-items-item">
         <NavLink to="/books/11111">
             <img src="./books/book-1.jpg" className="featured-category-items-item-img" alt="Under a Firefly Moon (Firefly Lake Book 1)" />
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

export default FeaturedCategory;