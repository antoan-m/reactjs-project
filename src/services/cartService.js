import api from "./api";
import M from "materialize-css";
import Backendless from 'backendless';

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


function cartCompleteOrder(user_id, book_ids, order_total) {

    let userToken = localStorage.getItem("user-token");

    var myHeaders = new Headers();
    myHeaders.append(
        "Content-Type", "application/json",
        "Access-Control-Allow-Origin", "*", 
        "user-token", userToken
    );

    var raw = JSON.stringify({
        "ownerId": user_id,
        "book_ids": book_ids.toString(),
        "order_total": order_total
      });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

return fetch(`${api.orders}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            M.toast({ html: "Order completed successfuly!" });
            return true
        })
        .catch((error) => {
            console.error("error", error);
            M.toast({ html: error.message });
            return false;
        });
}


function getMyOrders(user_id) {

  let query = `?where=ownerId%3D'${user_id}'&property=book_ids&property=created&property=order_total&property=objectId&sortBy=created%20desc`;

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
      
 return fetch(`${api.orders}${query}`, requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));
}


function getMyOrderInfo(user_id, order_id) {

  let query = `/${order_id}?where=ownerId%3D'${user_id}'`;

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
      
 return fetch(`${api.orders}${query}`, requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));
}


function getOrderBooksInfo(array) {

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


function getAllOrders() {
  
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
        
   return fetch(`${api.orders}`, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
  }



  
function getTotalSales() {
  
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
        
   return fetch(`${api.orders}?property=Sum(order_total)%20as%20total_sales`, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
  }

 

export default {
    getCartBooksInfo,
    cartCompleteOrder,
    getMyOrders,
    getMyOrderInfo,
    getOrderBooksInfo,
    getAllOrders,
    getTotalSales
  }