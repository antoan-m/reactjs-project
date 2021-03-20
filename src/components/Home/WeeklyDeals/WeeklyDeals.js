import "./WeeklyDeals.css";

import { NavLink } from 'react-router-dom';

function WeeklyDeals() {
  return (

    <section className="weekly-deals">
    <section className="weekly-deals-header">
      <article className="weekly-deals-header-title">
        <h2>Weekly Deals</h2>
      </article>
      <article className="weekly-deals-header-viewall">
      <NavLink to="/books/discounted">
          <span>View All</span>
       </NavLink>
      </article>
    </section>
    <section className="weekly-deals-items">
      <article className="weekly-deals-items-item">
      <NavLink to="/books/11111">
          <img src="./books/book-1.jpg" className="weekly-deals-items-item-img" alt="Under a Firefly Moon (Firefly Lake Book 1)"
           />
       </NavLink>
        <article className="weekly-deals-items-item-info">
          <h3>
          <NavLink to="/books/11111">Under a Firefly Moon(Firefly Lake Book 1)</NavLink>
          </h3>
          <h5>
          <NavLink to="/authors/4234234">Nora Roberts</NavLink>
          </h5>
          <p>$29.99</p>
        </article>
      </article>
      <article className="weekly-deals-items-item">
      <NavLink to="/books/22222">
          <img src="./books/book-1.jpg" className="weekly-deals-items-item-img" alt="Under a Firefly Moon (Firefly Lake Book 1)"
           />
       </NavLink>
        <article className="weekly-deals-items-item-info">
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

  );
}

export default WeeklyDeals;