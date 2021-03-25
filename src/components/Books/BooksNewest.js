import "./BooksNewest.css";
import { Component } from 'react';
import BookArticle from './BookArticle';
import BooksSidebar from './BooksSidebar/BooksSidebar';
import BookFilters from './BookFilters/BookFilters';
import booksService from '../../services/booksService';


class BooksNewest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      current_category: this.props.match.params.category
    };
  }

  componentDidMount() {

    this.setState({
    current_category: this.props.match.params.category,
    });

    this.category = this.props.match.params.category;

    booksService.sortByNewest()
    .then(books => this.setState({ books }))
  };

  componentDidUpdate() {

    console.log(this.props.match.params)

    if (this.props.match.params.category !== this.state.current_category) {

    this.category = this.props.match.params.category;

    booksService.sortByNewest()
    .then(books => this.setState({ books }))

    this.setState({current_category: this.props.match.params.category});
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

export default BooksNewest;
