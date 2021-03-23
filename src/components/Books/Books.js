import "./Books.css";
import { Component } from 'react';
import BookArticle from './BookArticle';
import BooksSidebar from './BooksSidebar';

class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  booksQuery = '';

  componentDidMount() {
    
    fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?sortBy=created%20desc`, {
      headers: { 'Access-Control-Allow-Origin': "*" }
    })
   .then(res => res.json())
          .then(books => this.setState({ books }))
          .then(console.log(this.state))
          
  };

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
