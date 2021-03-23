import "./BooksSidebar.css";
import { Component } from 'react';
import FeaturedBooks from '../FeaturedBooks'
import BooksSidebarCategories from './BooksSidebarCategories'
import BooksSidebarAuthors from './BooksSidebarAuthors'
import BooksSidebarFormats from './BooksSidebarFormats'
import BooksSidebarPrices from './BooksSidebarPrices'

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

    fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?where=featured%3Dtrue&sortBy=created%20desc`, {
      headers: { 'Access-Control-Allow-Origin': "*" }
    })
   .then(res => res.json())
          .then(featuredBooks => this.setState({ featuredBooks }))
          // .then(console.log(this.state));


   fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?property=category&groupBy=category&sortBy=category`, {
      headers: { 'Access-Control-Allow-Origin': "*" }
    })
   .then(res => res.json())
          .then(categories => this.setState({ categories }))
          // .then(console.log(this.state));

   fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?property=author&groupBy=author&sortBy=author`, {
      headers: { 'Access-Control-Allow-Origin': "*" }
          })
        .then(res => res.json())
        .then(authors => this.setState({ authors }))
        // .then(console.log(this.state));

    fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?property=format&groupBy=format&sortBy=format`, {
       headers: { 'Access-Control-Allow-Origin': "*" }
        })
        .then(res => res.json())
        .then(formats => this.setState({ formats }))
        // .then(console.log(this.state));

    fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?property=price&groupBy=price&sortBy=price`, {
       headers: { 'Access-Control-Allow-Origin': "*" }
        })
        .then(res => res.json())
        .then(prices => this.setState({ prices }))
        // .then(console.log(this.state));

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