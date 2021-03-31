import api from "./api";
import M from "materialize-css";

function checkIfInWishlist(ownerId, book_id) {

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

return fetch(`${api.wishlist}${query}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
      if (result.length > 0) {
        return true
      } else {
        return false
      };
      })
  .catch(error => console.log('error', error));
}


function addToWishlist(user_id, book_id, book_title, book_author) {
   
    let userToken = localStorage.getItem("user-token");

    var myHeaders = new Headers();
    myHeaders.append(
        "Content-Type", "application/json",
        "Access-Control-Allow-Origin", "*", 
        "user-token", userToken
    );

    var raw = JSON.stringify({
        "book_id": book_id,
        "book_title": book_title,
        "book_author": book_author,
        "ownerId": user_id
      });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

return fetch(`${api.wishlist}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            M.toast({ html: "Book added to your Wishlist!" });
            return true
        })
        .catch((error) => {
            console.error("error", error);
            M.toast({ html: error.message });
            return false;
        });
}

function removeFromWishlist(ownerId, book_id) {

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

fetch(`${api.wishlist}${query}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result[0].objectId);
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

return fetch(`${api.wishlist}/${result[0].objectId}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    M.toast({ html: "Book removed from your Wishlist!" });
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
    checkIfInWishlist,
    addToWishlist,
    removeFromWishlist
};