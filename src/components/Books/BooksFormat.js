import "./BooksFormat.css";
import { Component } from 'react';
import BookArticle from './BookArticle';
import BooksSidebar from './BooksSidebar/BooksSidebar';
import BookFilters from './BookFilters/BookFilters';
import booksService from '../../services/booksService';


class BooksFormat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      current_format: this.props.match.params.id
    };
  }


  componentDidMount() {

    this.setState({
    current_format: this.props.match.params.id
    });

    this.current_format = this.props.match.params.id;

    booksService.getAllByFormat(this.current_format)
    .then(books => this.setState({ books }))
  };

  componentDidUpdate() {

    if (this.props.match.params.id !== this.state.current_format) {

    this.current_format = this.props.match.params.id;

    booksService.getAllByFormat(this.current_format)
    .then(books => this.setState({ books }))

    this.setState({current_format: this.props.match.params.id});
    }
    
  
}


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

export default BooksFormat;
