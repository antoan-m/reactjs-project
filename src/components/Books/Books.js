import "./Books.css";
import { Component } from 'react';
import BookArticle from './BookArticle';
import BooksSidebar from './BooksSidebar/BooksSidebar';
import booksService from '../../services/booksService'


class Books extends Component {
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

    booksService.getAll(this.category, this.author, this.format, this.price)
    .then(books => this.setState({ books }))
  };

  componentDidUpdate() {

    console.log(this.props.match.params)

    if (this.props.match.params.category !== this.state.current_category) {

    this.category = this.props.match.params.category;

    booksService.getAll(this.category, this.props.match.params)
    .then(books => this.setState({ books }))

    this.setState({current_category: this.props.match.params.category});
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

export default Books;
