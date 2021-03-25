import "./BookFilters.css";

import { Link } from 'react-router-dom';


function BookFilter() {
  return (
<section className="books-filter">
    <span className="books-filter-item"><Link to="/books/newest">NEWEST</Link></span> | 
    <span className="books-filter-item"><Link to="/books/oldest">OLDEST</Link></span> | 
    <span className="books-filter-item"><Link to="/books/lowprice">LOW PRICE</Link></span> | 
    <span className="books-filter-item"><Link to="/books/highprice">HIGH PRICE</Link></span>
</section>
  );
}

export default BookFilter;
