import "./Books.css";
import { Link } from 'react-router-dom';
import BookArticle from './BookArticle';
import { useEffect, useState } from 'react';

function Books() {

  const [books, setBooks] = useState([]);

  let booksQuery = '';
  //let booksQuery = `year%3D1999`; //equals
  //let booksQuery = `title%20LIKE%20%27%25Proba%25%27`; //contains
  //let booksQuery = `price%3E%3D0%20AND%20price%20%3C%3D%2020`; //between

  useEffect(() => {
    fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?where=${booksQuery}`, {
    headers: { 'Access-Control-Allow-Origin': "*" }
  })
 .then(res => res.json())
 .then(result => setBooks(result))
  }, [])

    console.log(books);


  return (
   <div className="App" id="books">

     <aside className="books-sidebar">

      <section className="books-sidebar-categories">
      <ul className="books-sidebar-list">
        <li className="books-sidebar-list-title">CATEGORIES</li>
        <Link to="/books/category/comedy" className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Comedy</li></Link>
        <Link to="/books/category/thriller" className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Thriller</li></Link>
        <Link to="/books/category/poems" className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Poems</li></Link>
      </ul>
      </section>
      <section className="books-sidebar-authors">
      <ul className="books-sidebar-list">
        <li className="books-sidebar-list-title">AUTHORS</li>
        <Link to="/books/author/agatha-christy" className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Agatha Christy</li></Link>
        <Link to="/books/author/jack-london" className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Jack London</li></Link>
        <Link to="/books/author/john-grisom" className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">John Grisom</li></Link>
      </ul>
      </section>
      <section className="books-sidebar-format">
      <ul className="books-sidebar-list">
        <li className="books-sidebar-list-title">FORMAT</li>
        <Link to="/books/author/agatha-christy" className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Paperback</li></Link>
        <Link to="/books/author/jack-london" className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Hardcover</li></Link>
        <Link to="/books/author/john-grisom" className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Digital</li></Link>
      </ul>
      </section>
      <section className="books-sidebar-price">
      <ul className="books-sidebar-list">
        <li className="books-sidebar-list-title">PRICES</li>
        <Link to="/books/price/under-10" className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Under 10</li></Link>
        <Link to="/books/price/10-20" className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">10 - 20</li></Link>
        <Link to="/books/price/over-20" className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Over 20</li></Link>
      </ul>
      </section>
      <section className="books-sidebar-featured-books">
      <ul className="books-sidebar-list">
        <li className="books-sidebar-list-title">FEATURED BOOKS</li>
        <Link to="/books/details/asdasdasfasdasf" className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Book 1</li></Link>
        <Link to="/books/details/sdfsdasdfasdf" className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Book 2</li></Link>
        <Link to="/books/details/gerfsdsdfasdfasd" className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Book 3</li></Link>
      </ul>
      </section>
     </aside>

     <section className="books-list">

       <article className="book-list-item" key={books.map(x => x.objectid)}>
        <h1>{books.map(x => x.title)}</h1>
        <h2>{books.map(x => x.author)}</h2>
        <h3>{books.map(x => x.price)}</h3>
        <h4>{books.map(x => x.year)}</h4>
        <h5>{books.map(x => x.format)}</h5>
        <h6>{books.map(x => x.objectId)}</h6>
        <img src={books.map(x => x.image)} alt={books.map(x => x.objectId)} />
       </article>
       
       <BookArticle bookData={this.state.books} />

     </section>

   </div>
  );
}

export default Books;
