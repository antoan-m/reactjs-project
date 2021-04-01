import "./BooksPriceBelow10.css";
import { Component } from 'react';
import BookArticle from './BookArticle';
import BooksSidebar from './BooksSidebar/BooksSidebar';
import BookFilters from './BookFilters/BookFilters';
import booksService from '../../services/booksService';


class BooksPriceBelow10 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }


  componentDidMount() {

    booksService.getAllByPriceLowHigh(0, 10)
    .then(books => this.setState({ books }))
   
  };


render() { console.log('etetet')
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

export default BooksPriceBelow10;
