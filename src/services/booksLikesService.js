import api from "./api";
import M from "materialize-css";



function checkIfInLikes(ownerId, book_id) {

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

return fetch(`${api.likes}${query}`, requestOptions)
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


function addToLikes(user_id, book_id, book_title, book_author) {
   
    let userToken = localStorage.getItem("user-token");

    var myHeaders = new Headers();
    myHeaders.append(
        "Content-Type", "application/json",
        "Access-Control-Allow-Origin", "*", 
        "user-token", userToken
    );

    var data = JSON.stringify({
        "book_id": book_id,
        "book_title": book_title,
        "book_author": book_author,
        "ownerId": user_id
      });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: data,
        redirect: "follow",
    };

return fetch(`${api.likes}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            M.toast({ html: "Book added to your Likes!" });
            return true
        })
        .catch((error) => {
            console.error("error", error);
            M.toast({ html: error.message });
            return false;
        });
}


function removeFromLikes(ownerId, book_id) {

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


function addLikeToBook(book_id) {

  let userToken = localStorage.getItem("user-token");

  var myHeaders = new Headers();
  myHeaders.append(
    "Content-Type", "application/json",
    "Access-Control-Allow-Origin", "*", 
    "user-token", userToken
);

return fetch(`${api.books}/${book_id}?property=likes`, { method: 'GET', headers: myHeaders, redirect: 'follow' })
  .then(response => response.json())
  .then(result => {

    var data = JSON.stringify({
        "likes": Number(result.likes) + 1
    });

    fetch(`${api.books}/${book_id}`, { method: 'PUT', headers: myHeaders, body: data, redirect: 'follow' })
    .then(response => response.json())
    .then(result)
    .catch(error => console.log('error', error));
  })
  .catch(error => console.log('error', error));
 }


 function removeLikeToBook(book_id) {

  let userToken = localStorage.getItem("user-token");

  var myHeaders = new Headers();
  myHeaders.append(
    "Content-Type", "application/json",
    "Access-Control-Allow-Origin", "*", 
    "user-token", userToken
);

return fetch(`${api.books}/${book_id}?property=likes`, { method: 'GET', headers: myHeaders, redirect: 'follow' })
  .then(response => response.json())
  .then(result => {

    var data = JSON.stringify({
        "likes": Number(result.likes) - 1
    });

    fetch(`${api.books}/${book_id}`, { method: 'PUT', headers: myHeaders, body: data, redirect: 'follow' })
    .then(response => response.json())
    .then(result)
    .catch(error => console.log('error', error));
  })
  .catch(error => console.log('error', error));
 }






export default {
    checkIfInLikes,
    addToLikes,
    removeFromLikes,
    addLikeToBook,
    removeLikeToBook
};