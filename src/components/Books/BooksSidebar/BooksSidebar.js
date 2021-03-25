import "./BooksSidebar.css";
import { Component } from 'react';
import FeaturedBooks from '../FeaturedBooks';
import BooksSidebarCategories from './BooksSidebarCategories';
import BooksSidebarAuthors from './BooksSidebarAuthors';
import BooksSidebarFormats from './BooksSidebarFormats';
import BooksSidebarPrices from './BooksSidebarPrices';
import bookService from '../../../services/booksService';

import M from 'materialize-css';

class BooksSidebar extends Component {
  constructor() {
    super();
    this.state = {
        featuredBooks: [],
        categories: [],
        authors: [],
        formats: [],
        prices: []
      };
  }

  booksQuery = 'featured=true';


  componentDidMount() {

    M.AutoInit();

    bookService.getCategories()
           .then(categories => this.setState({ categories }))
    
    bookService.getAuthors()
           .then(authors => this.setState({ authors }))

    bookService.getFormats()
           .then(formats => this.setState({ formats }))

    bookService.getPrices()
           .then(prices => this.setState({ prices }))

    bookService.getFeaturedBooks(3)
           .then(featuredBooks => this.setState({ featuredBooks }))

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
        <BooksSidebarCategories categoriesList={this.state.categories} />
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
        <BooksSidebarAuthors authorsList={this.state.authors} />
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
        <BooksSidebarFormats formatsList={this.state.formats} />
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
        <BooksSidebarPrices pricesList={this.state.prices} />
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