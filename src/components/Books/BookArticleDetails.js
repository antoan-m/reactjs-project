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
      <article className="book-article-details-top">
        <article className="book-article-details-image">
          <img src={this.state.BookArticleDetails.image} alt={this.state.BookArticleDetails.title} />
        </article>
        <article className="book-article-details-info">
            <h1 className="book-article-details-info-title">{this.state.BookArticleDetails.title}</h1>
	          <p className="book-article-details-info-author"><span className="book-article-details-info-author-label">Author: </span><Link to={`/books/${this.state.BookArticleDetails.author}`}>{this.state.BookArticleDetails.author}</Link></p>
            <p className="book-article-details-info-price">${this.state.BookArticleDetails.price}</p>
            <p className="book-article-details-info-short-description">{this.state.BookArticleDetails.short_description}</p>
            <article className="book-article-details-info-bullets">
              <p className="book-article-details-info-bullets-bullet"><span className="book-article-details-info-bullets-bullet-label">Category: </span><Link to={`/books/${this.state.BookArticleDetails.category}`}>{this.state.BookArticleDetails.category}</Link></p>
              <p className="book-article-details-info-bullets-bullet"><span className="book-article-details-info-bullets-bullet-label">Format: </span>{this.state.BookArticleDetails.format}</p>
              <p className="book-article-details-info-bullets-bullet"><span className="book-article-details-info-bullets-bullet-label">Pages: </span>{this.state.BookArticleDetails.pages}</p>
              <p className="book-article-details-info-bullets-bullet"><span className="book-article-details-info-bullets-bullet-label">Year: </span>{this.state.BookArticleDetails.year}</p>
            </article>
        <article className="book-article-details-info-buttons">

          <Link to="#" className="book-article-details-info-buttons-cart" title="Add to Cart">
            <button className="btn waves-effect btn-large book-article-details-info-buttons-cart-btn">Add to cart</button>
	        </Link>
         
          <article className="book-article-details-info-buttons-wishlist">
            <Link to="#" className="book-article-details-info-buttons-wishlist-link" title="Add book to your Wishlist">
            <button className="btn waves-effect btn-large book-article-details-info-buttons-wishlist-btn">
              <i className="material-icons left">favorite</i>Add to Wishlist
            </button>
            </Link>
          </article>

          <article className="book-article-details-info-buttons-like">
            <Link to="#" className="book-article-details-info-buttons-like-link" title="Like the book">
            <button className="btn waves-effect btn-large book-article-details-info-buttons-like-btn">
              <i className="material-icons left">sentiment_very_satisfied</i>
            <span className="book-article-details-info-buttons-like-btn-text">Like | {this.state.BookArticleDetails.likes}</span>
            </button>
            </Link>
          </article>
        </article>  
     </article>
     </article>
     <article className="book-article-details-bottom">
     <article className="book-article-details-more-info">
       <h3 className="book-article-details-more-info-h3">Description</h3>
            <p className="book-article-details-more-info-description">{this.state.BookArticleDetails.description}</p>
        </article>   
     </article>
     </article>
</section>

  );
}
}

export default BookArticleDetails;