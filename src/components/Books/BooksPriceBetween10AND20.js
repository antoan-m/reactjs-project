import "./BooksPriceBetween10AND20.css";
import { Component } from 'react';
import BookArticle from './BookArticle';
import BooksSidebar from './BooksSidebar/BooksSidebar';
import BookFilters from './BookFilters/BookFilters';
import booksService from '../../services/booksService';


class BooksPriceBetween10AND20 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      current_price: this.props.match.params.id
    };
  }


  componentDidMount() {

    booksService.getAllByPriceLowHigh(9.99, 20)
    .then(books => this.setState({ books }))
  };


render() {
  return (
<div className="books">

<BooksSidebar />

    <section className="books-main">

    <BookFilters />

     <section className="books-list">

       <BookArticle bookData={this.state.books} />

     </section>
</section>
   </div>
  );
}
}

export default BooksPriceBetween10AND20;
