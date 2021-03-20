import "./News.css";

import { Link } from 'react-router-dom';
import NewsArticle from "./NewsArticle";


function News() {
  return (
    <article className="news">
    <aside className="books-sidebar">
<section className="books-sidebar-featured-books">
<ul className="books-sidebar-list">
 <li className="books-sidebar-list-title">FEATURED BOOKS</li>
 <Link to="/books/details/asdasdasfasdasf" exact className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Book 1</li></Link>
 <Link to="/books/details/sdfsdasdfasdf" exact className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Book 2</li></Link>
 <Link to="/books/details/gerfsdsdfasdfasd" exact className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Book 3</li></Link>
</ul>
</section>
</aside>

<section className="news-list">

<NewsArticle />
<NewsArticle />
<NewsArticle />
<NewsArticle />
<NewsArticle />


</section>
  </article>
  );
}

export default News;