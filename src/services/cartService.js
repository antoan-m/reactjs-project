import api from "./api";
import M from "materialize-css";


function getCartBooksInfo(array) {

    let ids = '';
    for (let i = 0; i < array.length; i++) {
      const el = array[i];
      if (i !== array.length - 1) {
      ids += `objectId%20%3D%20'${el}'%20OR%20`;
      } else {
        ids += `objectId%20%3D%20'${el}'`;
      }
    }
    
    let query = `?where=${ids}`;
    var myHeaders = new Headers();
    myHeaders.append( "Content-Type", "application/json", "Access-Control-Allow-Origin", "*", "charset", "utf-8" );
    var requestOptions = { method: 'GET', headers: myHeaders, redirect: 'follow' };
  
  return fetch(`${api.books}${query}`, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}


function removeFromCart(cart, book_id) {

  // let usercart = cart;
  // let deleteFromCart = book_id;






  // M.toast({ html: "Book removed from your Cart!" });
 


}


export default {
    getCartBooksInfo,
    removeFromCart
}