import "./WishlistPanel.css";
import { Link } from 'react-router-dom';
import booksWishlistService from "../../../services/booksWishlistService";
import React, { useState, useEffect } from 'react';

function WishlistPanel(props) {
   
    const [my_wishlist, setMyWishlist] = useState([]);

useEffect(() => {
      booksWishlistService.getWishlistBooksInfo(props.myWishlist)
      .then(result => {
        setMyWishlist(result);
  });
    });

useEffect(() => {
   if (my_wishlist === '' ) {
  booksWishlistService.getWishlistBooksInfo(this.props.myWishlist)
  .then(result => {
    setMyWishlist(result);
  })
};
});

function deleteFormWishlistHandler(e, book_id) {
  e.target.parentNode.parentNode.remove();
  booksWishlistService.removeFromWishlist(book_id);
}

  return (
 
<section className="profile-main-my-books">
          <h2 className="profile-main-header">Wishlist</h2>
                <ul className="profile-main-my-books-list">
                {my_wishlist.map(x => {
                return (
                    <li className="profile-main-my-books-list-item-main" key={x.objectId}>
                     <article className="profile-main-my-books-list-item">   
                     <article className="profile-main-my-books-list-item-image">
                         <img src={x.image} alt={x.title} />
                     </article>
                     <article className="profile-main-my-books-list-item-details">
                         <h5 className="profile-main-my-books-list-item-title">{x.title}</h5>
                         <p className="profile-main-my-books-list-item-author">Author: {x.author}</p>
                         <p className="profile-main-my-books-list-item-category">Category: {x.category}</p>
                         <p className="profile-main-my-books-list-item-price">Price: {x.price}</p>
                     </article>
                     </article>
                     <article className="profile-main-my-books-list-item-book-buttons">
                     <Link to={`/books/details/${x.objectId}`}><button className="btn waves-effect waves-light btn-small edit-book-btn">View<i className="material-icons right">zoom_in</i></button></Link>
                     <button onClick={(e) => {deleteFormWishlistHandler(e, x.objectId)}} type="button" className="btn waves-effect waves-light btn-small delete-book-btn">Delete<i className="material-icons right">delete</i></button>
                     </article>
                    </li>
                  )})}
                </ul>
</section>

)
}

export default WishlistPanel;