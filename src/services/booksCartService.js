import api from "./api";
import M from "materialize-css";



function checkIfInCart(book_id) {

    let cart = localStorage.getItem('cart');
    let cartItems = '';
    let result = '';

    if (cart) {
        cartItems = cart.split(',')
    }

    if (cartItems.indexOf(book_id) !== -1) {
          result = true;
      } else {
        result = false;
      }

      return result;
}


function getItemsInCart() {

    let cart = localStorage.getItem('cart');

}




function addToCart(book_id) {
   
    let cart = localStorage.getItem('cart');

  if (!cart) {
    localStorage.setItem('cart', book_id);
    M.toast({ html: "Book added to Cart!" });
  } else {

    let cartItems = localStorage.getItem('cart').split(',')

  if (cartItems.indexOf(book_id) === -1) {

    cartItems.push(book_id);
    localStorage.setItem('cart', cartItems);
    M.toast({ html: "Book added to Cart!" });

  } else {

    M.toast({ html: "Book already in Cart!" });

  }
  }
}



function removeFromCart(ownerId, book_id) {

  let query = `?where=ownerId%3D'${ownerId}'%26%26book_id%3D'${book_id}'`;

  let userToken = localStorage.getItem("user-token");

  var myHeaders = new Headers();

  myHeaders.append(
      "Content-Type", "application/json",
      "Access-Control-Allow-Origin", "*", 
      "user-token", userToken
      );

      var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };

fetch(`${api.likes}${query}`, requestOptions)
      .then(response => response.json())
      .then(result => {
  
    if (result.length > 0) {
      
      var myHeaders = new Headers();
      myHeaders.append(
          "Content-Type", "application/json",
          "Access-Control-Allow-Origin", "*", 
          "user-token", userToken
      );

      var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
};

return fetch(`${api.likes}/${result[0].objectId}`, requestOptions)
.then(response => response.json())
.then(result => {
  M.toast({ html: "Book removed from your Likes!" });
  return false
})
.catch(error => console.log('error', error));
    } else {
      return false
    };
    })
      .catch(error => console.log('error', error));
}



export default {
    checkIfInCart,
    getItemsInCart,
    addToCart,
    removeFromCart
};