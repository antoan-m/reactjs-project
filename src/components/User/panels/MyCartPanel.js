import "./MyCartPanel.css";
import { Link } from 'react-router-dom';
import cartService from "../../../services/cartService";
import React, { useState, useEffect } from 'react';
import M from "materialize-css";

function MyCartPanel(props) {
  
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [my_cart, setMyCart] = useState([]);
    const [localCart, setLocalCart] = useState([]);
    const [my_total, setTotal] = useState(0);
    const [newTotal, setNewTotal] = useState(0);
    const [cartEmpty, setCartEmpty] = useState(true);

    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
    var instance = M.Modal.getInstance(elems);

useEffect(() => {
        setUser(props.userData);
        setMyCart(props.myCart);
        setLocalCart(props.localCart);
        calculateTotal();
        if (props.userData.email !== undefined) {
          setLoggedIn(true);
        }
        
          for(var i = 0; i < localCart.length; i++){
              if(localCart[i] === "")   
              localCart.splice(i, 1);
          }
        
        if (localCart.length > 0) {
          setCartEmpty(false);
        }
    });

useEffect(() => {
   if (my_cart === '' ) {
    setUser(props.userData);
    setMyCart(props.myCart);
    setLocalCart(props.localCart);
    calculateTotal();
    if (props.userData.email !== undefined) {
      setLoggedIn(true);
    }
    if (localCart.length > 0) {
      setCartEmpty(false);
    }
};
});


function calculateTotal() {
  
  let calculatedTotal = 0;

  for (let i = 0; i < my_cart.length; i++) {
    const el = my_cart[i].price;
    calculatedTotal += Number(el);
  }
  setTotal(calculatedTotal);

}


function deleteFormCartHandler(e, book_id, book_price) {

    let index = localCart.indexOf(book_id);
    let tempCart = localCart;
    let tempTotal = my_total;

    if (index !== -1) {
      tempCart.splice(index, 1);
      tempTotal -= book_price;
    } else {
      return; 
    }
    
    localStorage.setItem('cart', tempCart);
    setLocalCart(tempCart);
    setNewTotal(tempTotal);
    setTotal(tempTotal);

    if (localCart.length === 0) {
      setNewTotal(0);
      setTotal(0);
      setCartEmpty(true);
    }
      
  e.target.parentNode.parentNode.remove();
}

function orderHandler(e) {
  console.log(e);
  console.log(props.userData)
  console.log(loggedIn)
  console.log(localCart);
  console.log(my_cart);
  console.log(cartEmpty);



  
}

return (

<section className="profile-main-my-cart">
{!cartEmpty ? <h2 className="profile-main-header">Cart</h2> : <h2 className="profile-main-header">Cart is empty...</h2>}
          {!cartEmpty ? 
                <ul className="profile-main-my-cart-list">
                {my_cart.map(x => {
                return (
                    <li className="profile-main-my-cart-list-item-main" key={x.objectId}>
                     <article className="profile-main-my-cart-list-item">   
                     <article className="profile-main-my-cart-list-item-image">
                         <img src={x.image} alt={x.title} />
                     </article>
                     <article className="profile-main-my-cart-list-item-details">
                         <h5 className="profile-main-my-cart-list-item-title">{x.title}</h5>
                         <p className="profile-main-my-cart-list-item-author">Author: {x.author}</p>
                         <p className="profile-main-my-cart-list-item-category">Category: {x.category}</p>
                     </article>
                     </article>
                     <article className="profile-main-my-cart-list-item-book-buttons">
                     <span className="profile-main-my-cart-list-item-price">${x.price}</span>
                     </article>
                     <article className="profile-main-my-cart-list-item-book-buttons">
                     <Link to={`/books/details/${x.objectId}`}><button className="btn waves-effect waves-light btn-small edit-book-btn">View<i className="material-icons right">zoom_in</i></button></Link>
                     <button onClick={(e) => {deleteFormCartHandler(e, x.objectId, x.price)}} type="button" className="btn waves-effect waves-light btn-small delete-book-btn">Delete<i className="material-icons right">delete</i></button>
                     </article>
                    </li>
                  )})}
                </ul> : ''}
                {!cartEmpty ?
                <article className="profile-main-my-cart-total">Total: <span className="total-price">${newTotal ? newTotal.toFixed(2) : my_total.toFixed(2)}</span></article>
                : ''}
                {!cartEmpty && loggedIn ?
                <button onClick={(e) => {orderHandler(e)}} type="button" data-target="confirm-order-modal" className="cart-order-btn modal-trigger">COMPLETE ORDER</button>
                : ''}
                <div id="confirm-order-modal" className="modal cart-order-confirm">
                  <div className="modal-content">
                    <h4>Confirm Order</h4>
                    <div class="progress">
                      <div class="indeterminate"></div>
                    </div>
                    <p>Please, confirm your order...</p>
                  </div>
                  <div className="modal-footer">
                    <Link to="/user/profile/orders" className="modal-close waves-effect waves-green btn-flat agree-btn">Agree</Link>
                  </div>
                </div>
                {!cartEmpty && !loggedIn ?
                <article className="profile-main-my-cart-buttons">
                <p className="cart-not-loggedin-message">Please, log in to your account or create a new one.</p>
                <article>
                <Link to='/user/register'><button type="button" className="btn waves-effect waves-light btn-small cart-register-btn">Register<i className="material-icons right">zoom_in</i></button></Link>
                <Link to='/user/login'><button type="button" className="btn waves-effect waves-light btn-small cart-login-btn">Login<i className="material-icons right">zoom_in</i></button></Link>
                </article>
                </article> : ''}
                 
</section>
)
}

export default MyCartPanel;