import "./BookArticleDetails.css";
import BooksSidebar from './BooksSidebar/BooksSidebar'
import bookService from '../../services/booksService';
import booksWishlistService from '../../services/booksWishlistService';
import booksLikesService from '../../services/booksLikesService';
import booksCartService from '../../services/booksCartService';
import { Component } from 'react';
import { Link } from "react-router-dom";


class BookArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentArticleParams : props.match.params,
      bookArticleDetails: {},
      already_in_wishlist: '',
      already_in_likes: '',
      likes: '',
      already_in_cart: false
  };
}


book_id = this.props.match.params.id;

componentDidMount() {

  bookService.getBookData(this.book_id)
  .then(bookArticleDetails => {
    this.setState({ bookArticleDetails: bookArticleDetails, likes: bookArticleDetails.likes });
  });


  let userId = localStorage.getItem("id");
  booksWishlistService.checkIfInWishlist(userId, this.book_id)
  .then(result => this.setState({ already_in_wishlist: result })
  );

  booksLikesService.checkIfInLikes(userId, this.book_id)
  .then(result => {
    this.setState({ already_in_likes: result });
   
  });

  this.setState({ already_in_cart: booksCartService.checkIfInCart(this.book_id)})
  // .then(result => {
  //   this.setState({ already_in_cart: result })
  // });


};



wishlistArticleHandler(e, book_id) {

let userId = localStorage.getItem("id");

if (!this.state.already_in_wishlist) {
booksWishlistService.addToWishlist(userId, this.state.bookArticleDetails.objectId, this.state.bookArticleDetails.title, this.state.bookArticleDetails.author);
booksWishlistService.checkIfInWishlist(userId, book_id);
this.setState({ already_in_wishlist: true });
  } else {
  booksWishlistService.removeFromWishlist(userId, book_id);
  this.setState({ already_in_wishlist: false })
  }
}

likeArticleHandler(e, book_id) {
  let userId = localStorage.getItem("id");

  if (!this.state.already_in_likes) {
     
      booksLikesService.addLikeToBook(book_id, this.state.likes);

      booksLikesService.addToLikes(userId, this.state.bookArticleDetails.objectId, this.state.bookArticleDetails.title, this.state.bookArticleDetails.author);

      booksLikesService.checkIfInLikes(userId, book_id);
      this.setState({ already_in_likes: true, likes: this.state.likes + 1 });

  } else {
    
    booksLikesService.removeLikeToBook(book_id, this.state.likes)
    
    booksLikesService.removeFromLikes(userId, book_id);
    this.setState({ already_in_likes: false, likes: this.state.likes - 1 });
  }
}


addToCartHandler(e, book_id) {
 
  booksCartService.addToCart(book_id);
  this.setState({ already_in_cart: true });

}


render() {
  return (
<section className="book-details">

    <BooksSidebar />

     <article className="book-article-details">
      <article className="book-article-details-top">
        <article className="book-article-details-image">
          <img src={this.state.bookArticleDetails.image} alt={this.state.bookArticleDetails.title} />
        </article>
        <article className="book-article-details-info">
            <h1 className="book-article-details-info-title">{this.state.bookArticleDetails.title}</h1>
	          <p className="book-article-details-info-author"><span className="book-article-details-info-author-label">Author: </span><Link to={`/books/author/${this.state.bookArticleDetails.author}`}>{this.state.bookArticleDetails.author}</Link></p>
            <p className="book-article-details-info-price">{this.state.bookArticleDetails.rrp ? <span className="book-article-details-info-rrp"><span style={{textDecoration: "none"}}>WAS </span>${this.state.bookArticleDetails.rrp} | Save ${(this.state.bookArticleDetails.rrp - this.state.bookArticleDetails.price).toFixed(2)}</span> : ''}${this.state.bookArticleDetails.price}</p>
            <p className="book-article-details-info-short-description">{this.state.bookArticleDetails.short_description}</p>
            <article className="book-article-details-info-bullets">
              <p className="book-article-details-info-bullets-bullet"><span className="book-article-details-info-bullets-bullet-label">Category: </span><Link to={`/books/category/${this.state.bookArticleDetails.category}`}>{this.state.bookArticleDetails.category}</Link></p>
              <p className="book-article-details-info-bullets-bullet"><span className="book-article-details-info-bullets-bullet-label">Format: </span>{this.state.bookArticleDetails.format}</p>
              <p className="book-article-details-info-bullets-bullet"><span className="book-article-details-info-bullets-bullet-label">Pages: </span>{this.state.bookArticleDetails.pages}</p>
              <p className="book-article-details-info-bullets-bullet"><span className="book-article-details-info-bullets-bullet-label">Year: </span>{this.state.bookArticleDetails.year}</p>
            </article>
        <article className="book-article-details-info-buttons">

        {!this.state.already_in_cart ? <span className="book-article-details-info-buttons-cart" title="Add to Cart">
            <button onClick={() => {this.addToCartHandler(this, this.state.bookArticleDetails.objectId)}} className="btn waves-effect btn-large book-article-details-info-buttons-cart-btn">Add to cart</button>
	        </span> :
          <span className="book-article-details-info-buttons-cart" title="Add to Cart">
            <button onClick={() => {this.addToCartHandler(this, this.state.bookArticleDetails.objectId)}} className="btn waves-effect btn-large book-article-details-info-buttons-cart-btn">Added to cart</button>
	        </span>}
         
          <article className="book-article-details-info-buttons-wishlist">
            {!this.state.already_in_wishlist ? <span className="book-article-details-info-buttons-wishlist-link" title="Add book to your Wishlist">
            <button onClick={() => {this.wishlistArticleHandler(this, this.state.bookArticleDetails.objectId)}} type="button" className="btn waves-effect btn-large book-article-details-info-buttons-wishlist-btn">
              <i className="material-icons left add-to-wishlist-btn-icon">favorite</i>Add to Wishlist
            </button>
            </span> : <button onClick={() => {this.wishlistArticleHandler(this, this.state.bookArticleDetails.objectId)}} type="button" className="btn waves-effect btn-large book-article-details-info-buttons-wishlist-btn">
              <i className="material-icons left remove-from-wishlist-btn-icon">favorite</i>Remove from Wishlist
            </button>}
          </article>

          <article className="book-article-details-info-buttons-like">
          {!this.state.already_in_likes ? <span className="book-article-details-info-buttons-like-link" title="Like the book">
             <button onClick={() => {this.likeArticleHandler(this, this.state.bookArticleDetails.objectId)}} className="btn waves-effect btn-large book-article-details-info-buttons-like-btn">
              <i className="material-icons left add-to-likes-btn-icon">sentiment_very_satisfied</i>
            <span className="book-article-details-info-buttons-like-btn-text">Like | {this.state.likes}</span>
            </button>
            </span> :
            <button onClick={() => {this.likeArticleHandler(this, this.state.bookArticleDetails.objectId)}} className="btn waves-effect btn-large book-article-details-info-buttons-like-btn">
              <i className="material-icons left remove-from-likes-btn-icon">sentiment_very_satisfied</i>
            <span className="book-article-details-info-buttons-like-btn-text">Liked | {this.state.likes}</span>
            </button>}
          </article>
        </article>  
     </article>
     </article>
     <article className="book-article-details-bottom">
     <article className="book-article-details-more-info">
       <h3 className="book-article-details-more-info-h3">Description</h3>
            <p className="book-article-details-more-info-description">{this.state.bookArticleDetails.long_description}</p>
        </article>   
     </article>
     </article>
</section>

  );
}
}

export default BookArticleDetails;