import "./BooksPrice.css";
import { Component } from 'react';
import BookArticle from './BookArticle';
import BooksSidebar from './BooksSidebar/BooksSidebar';
import booksService from '../../services/booksService'



class BooksPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      current_price: this.props.match.params.id
    };
  }


  componentDidMount() {

    this.setState({
    current_price: this.props.match.params.id
    });

    this.current_price = this.props.match.params.id;

    booksService.getAllByPrice(this.current_price)
    .then(books => this.setState({ books }))
  };

  componentDidUpdate() {

    if (this.props.match.params.id !== this.state.current_price) {

    this.current_price = this.props.match.params.id;

    booksService.getAllByPrice(this.current_price)
    .then(books => this.setState({ books }))

    this.setState({current_price: this.props.match.params.id});
    }
    
  
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

export default BooksPrice;
