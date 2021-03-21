import "./BookArticleDetails.css";
import BooksSidebar from './BooksSidebar'
import { Component } from 'react';
import { Link } from "react-router-dom";

class BookArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentArticleParams : props.match.params,
      BookArticleDetails: {}
  };
}


bookID = this.props.match.params.id;

componentDidMount() {
    fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books/${this.bookID}`, {
        headers: { 'Access-Control-Allow-Origin': "*" }
})
        .then(res => res.json())
        .then(BookArticleDetails => this.setState({ BookArticleDetails }))
        
};

render() {
  return (
<section className="book-details">

    <BooksSidebar />

     <article className="book-article-details">
       <h2 className="book-article-details-title">{this.state.BookArticleDetails.title}</h2>
	   <p className="book-article-details-author">{this.state.BookArticleDetails.author}</p>
       <article className="book-article-details-image">
         <img src={this.state.BookArticleDetails.image} alt={this.state.BookArticleDetails.title} />
         <p className="book-article-details-description">{this.state.BookArticleDetails.description}</p>
         <p className="book-article-details-description">{this.state.BookArticleDetails.pages}</p>
         <p className="book-article-details-description">{this.state.BookArticleDetails.format}</p>
         <p className="book-article-details-description">{this.state.BookArticleDetails.category}</p>
         <p className="book-article-details-description">{this.state.BookArticleDetails.year}</p>
         <p className="book-article-details-description">{this.state.BookArticleDetails.price}</p>
         </article>
     </article>
     
</section>

  );
}
}

export default BookArticleDetails;