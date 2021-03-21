import "./BooksSidebar.css";
import { Component } from 'react';
import FeaturedBooks from './FeaturedBooks'
import { Link } from 'react-router-dom';
import M from 'materialize-css';

class BooksSidebar extends Component {
  constructor() {
    super();
    this.state = {
        featuredBooks: []
      };
  }

  booksQuery = 'featured=true';


  componentDidMount() {

    M.AutoInit();

    console.log('mount');
    fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?where=featured%3Dtrue&sortBy=created%20desc`, {
      headers: { 'Access-Control-Allow-Origin': "*" }
    })
   .then(res => res.json())
          .then(featuredBooks => this.setState({ featuredBooks }))
          .then(console.log(this.state))

  };

render() {
  return (
<aside className="books-sidebar">

<section className="books-sidebar-categories">
  <ul className="books-sidebar-list collapsible">
    <li className="books-sidebar-list-title active">
      <div className="collapsible-header"><i className="material-icons">menu</i>CATEGORIES</div>
      <div className="collapsible-body">
        <span>
            <Link to="/books/comedy" exact className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Comedy</li></Link>
            <Link to="/books/thriller" exact className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Thriller</li></Link>
            <Link to="/books/poems" exact className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Poems</li></Link>
        </span>
      </div>
    </li>
  </ul>
</section>
<section className="books-sidebar-authors">
  <ul className="books-sidebar-list collapsible">
    <li className="books-sidebar-list-title active">
      <div className="collapsible-header"><i className="material-icons">menu</i>AUTHORS</div>
      <div className="collapsible-body">
        <span>
      <Link to="/books/author/agatha-christy" exact className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Agatha Christy</li></Link>
      <Link to="/books/author/jack-london" exact className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Jack London</li></Link>
      <Link to="/books/author/john-grisom" exact className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">John Grisom</li></Link>
        </span>
      </div>
    </li>
  </ul>
</section>
<section className="books-sidebar-authors">
  <ul className="books-sidebar-list collapsible">
    <li className="books-sidebar-list-title active">
      <div className="collapsible-header"><i className="material-icons">menu</i>FORMAT</div>
      <div className="collapsible-body">
        <span>
      <Link to="/books/author/agatha-christy" exact className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Paperback</li></Link>
      <Link to="/books/author/jack-london" exact className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Hardcover</li></Link>
      <Link to="/books/author/john-grisom" exact className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Digital</li></Link>
        </span>
      </div>
    </li>
  </ul>
</section>
<section className="books-sidebar-authors">
  <ul className="books-sidebar-list collapsible">
    <li className="books-sidebar-list-title active">
      <div className="collapsible-header"><i className="material-icons">menu</i>PRICE</div>
      <div className="collapsible-body">
        <span>
      <Link to="/books/price/under-10" exact className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Under 10</li></Link>
      <Link to="/books/price/10-20" exact className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">10 - 20</li></Link>
      <Link to="/books/price/over-20" exact className="books-sidebar-list-item-link"><li className="books-sidebar-list-item">Over 20</li></Link>
        </span>
      </div>
    </li>
  </ul>
</section> 
<section className="books-sidebar-authors">
  <ul className="books-sidebar-list collapsible">
    <li className="books-sidebar-list-title active">
      <div className="collapsible-header"><i className="material-icons">menu</i>FEATURED BOOKS</div>
      <div className="collapsible-body">
        <span>
        <FeaturedBooks featuredBooksData={this.state.featuredBooks} />
        </span>
      </div>
    </li>
  </ul>
</section>

</aside>
  )
}
}

export default BooksSidebar;