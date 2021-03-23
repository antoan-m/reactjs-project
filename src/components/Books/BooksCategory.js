import "./BooksCategory.css";
import { Component } from 'react';
import BookArticle from './BookArticle';
import BooksSidebar from './BooksSidebar/BooksSidebar';
import booksService from '../../services/booksService'

class BooksCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      category: this.props.match.params.category
    };
  }

  
  
  booksQuery = '';

  componentDidMount() {

    this.category = this.props.match.params.category;

    booksService.getAll(this.category)
    .then(books => this.setState({ books }));

}

componentDidUpdate() {

    this.category = this.props.match.params.category;

    booksService.getAll(this.category)
    .then(books => this.setState({ books }));

}

  render() {
  return (
<div className="books">

<BooksSidebar />

    <section className="books-main">

     <section className="books-filter"><span>NEWEST</span> | <span>OLDEST</span> | <span>LOW PRICE</span> | <span>HIGH PRICE</span></section>

     <section className="books-list">

       <BookArticle bookData={this.state.books} />

     </section>
</section>
   </div>
  );
}
}

export default BooksCategory;
