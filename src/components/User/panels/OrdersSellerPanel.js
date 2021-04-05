import "./MyOrdersSellerPanel.css";
import { Link } from 'react-router-dom';
import cartService from "../../../services/cartService";
import React, { useState, useEffect } from 'react';

function MyOrdersSellerPanel(props) {
   

return (
 
<section className="profile-main-my-books">
          <h2 className="profile-main-header">My Orders</h2>
          <li className="profile-main-my-books-list-item-main">
                     <article className="profile-main-my-books-list-item">   
                     <article className="profile-main-my-books-list-item-details">
                         <h5 className="profile-main-my-books-list-item-title header">Order No.</h5>
                         <p className="profile-main-my-books-list-item-items header">Items</p>
                         <p className="profile-main-my-books-list-item-price header">Order Total</p>
                         <p className="profile-main-my-books-list-item-date header">Date</p>
                     </article>
                     </article>
            </li>
                <ul className="profile-main-my-books-list">
                {props.myOrders.map(x => {
                return (
                    <li className="profile-main-my-books-list-item-main" key={x.objectId}>
                     <article className="profile-main-my-books-list-item">   
                     <article className="profile-main-my-books-list-item-details">
                         <h5 className="profile-main-my-books-list-item-title">{x.objectId}</h5>
                         <p className="profile-main-my-books-list-item-items">{x.book_ids.split(',').length}</p>
                         <p className="profile-main-my-books-list-item-price">{x.order_total}</p>
                         <p className="profile-main-my-books-list-item-date">{new Date(x.created).toLocaleDateString('en', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'})}</p>
                     </article>
                     </article>
                     <article className="profile-main-my-books-list-item-book-buttons">
                     <Link to={`/user/profile/orders/${x.objectId}`}><button className="btn waves-effect waves-light btn-small edit-book-btn">View<i className="material-icons right">zoom_in</i></button></Link>
                     </article>
                    </li>
                  )})}
                </ul>
</section>

)
}

export default MyOrdersSellerPanel;