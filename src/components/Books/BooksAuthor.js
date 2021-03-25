import "./BooksAuthor.css";
import { Component } from 'react';
import BookArticle from './BookArticle';
import BooksSidebar from './BooksSidebar/BooksSidebar';
import BookFilters from './BookFilters/BookFilters';
import booksService from '../../services/booksService';


class BooksAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      current_author: this.props.match.params.id
    };
  }


  componentDidMount() {

    this.setState({
    current_author: this.props.match.params.id
    });

    this.current_author = this.props.match.params.id;

    booksService.getAllByAuthor(this.current_author)
    .then(books => this.setState({ books }))
  };

  componentDidUpdate() {

    if (this.props.match.params.id !== this.state.current_author) {

    this.current_author = this.props.match.params.id;

    booksService.getAllByAuthor(this.current_author)
    .then(books => this.setState({ books }))

    this.setState({current_author: this.props.match.params.id});
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

export default BooksAuthor;
