import api from './api';
import M from 'materialize-css';
import React, { useContext } from 'react';
import Backendless from 'backendless';

function userRegister(user) {

  Backendless.UserService.register(user)
  .then(registeredUser => {
    // console.log(registeredUser);
    M.toast({html: 'Registration successful!'})
    })
  .catch(error => {
    M.toast({html: error.message})
    });


  // var myHeaders = new Headers();
  // myHeaders.append(
  //   "Content-Type", "application/json",
  //   "Access-Control-Allow-Origin", "*",
  //   );
  
  // var raw = JSON.stringify({
  //   "name": name,
  //   "email": email,
  //   "password": password,
  //   "country": country,
  //   "address": address,
  //   "phone": phone,
  //   "orders": "",
  //   "cart": "",
  //   "user_type": "user"
  // });
  
  // var requestOptions = {
  //   method: 'POST',
  //   headers: myHeaders,
  //   body: raw,
  //   redirect: 'follow'
  // };
  
  // return fetch(`${api.users}/register`, requestOptions)
  //   .then(response => response.json())
  //   .then(result => {
  //     console.log(result);
  //     M.toast({html: 'Registration successful!'})
  // })
  //   .catch(error => {console.log('error', error);
  //     M.toast({html: error.message})
  // })
  }


function userLogin(login, password) {

var myHeaders = new Headers();
myHeaders.append(
  "Content-Type", "application/json",
  "Access-Control-Allow-Origin", "*"
  );

var raw = JSON.stringify({"login": login,"password": password});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

return fetch(`${api.users}/login`, requestOptions)
.then(response => response.json())
//   .then(result => {
//     console.log(result);
//     M.toast({html: 'Hello, ' + result['name'] + '!'})
//     localStorage.name = result['name'];
//     localStorage.email = result['email'];
//     localStorage.id = result['objectId'];
//     localStorage['user-token'] = result['user-token']
//     ;})
//   .catch(error => {console.log('error', error);
//   M.toast({html: error.message})
// })
}


function userValidate(token) {

var myHeaders = new Headers();
myHeaders.append(
  "Content-Type", "application/json",
  "Access-Control-Allow-Origin", "*",
  "user-token", token
  );

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
  return fetch(`${api.users}/isvalidusertoken/${token}`, requestOptions)
  .then(response => response.json())
  .catch(error => {
    console.log('error', error);
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    localStorage.removeItem('user-token');
    M.toast({html: error.message})
})
}


function userLogout(token) {

  Backendless.UserService.logout()
 .then(res => {
   console.log(res);
   localStorage.removeItem('name');
   localStorage.removeItem('email');
   localStorage.removeItem('id');
   localStorage.removeItem('user-token');
   M.toast({html: 'Logout successful!'});
})
 .catch(error => console.error(error));
  }

  // var myHeaders = new Headers();
  // myHeaders.append(
  //   "Content-Type", "application/json",
  //   "Access-Control-Allow-Origin", "*",
  //   "user-token", token
  //   );
  
  // var requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: 'follow'
  // };
  //   return fetch(`${api.users}/logout/${token}`, requestOptions)
  //   .then(response => { 
  //     response.json();
  //     localStorage.removeItem('name');
  //     localStorage.removeItem('email');
  //     localStorage.removeItem('id');
  //     localStorage.removeItem('user-token');
  //     M.toast({html: 'Logout successful!'})
  //   })
  //   .catch(error => {
  //     console.log('error', error);

  // })
  //}

  function userUpdate(userId, name, password, country, address, phone) {
    var myHeaders = new Headers();
    myHeaders.append(
      "Content-Type", "application/json",
      "Access-Control-Allow-Origin", "*",
      );
    
    var raw = JSON.stringify({
      "name": name,
      "password": password,
      "country": country,
      "address": address,
      "phone": phone
    });
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    return fetch(`${api.users}/${userId}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        M.toast({html: 'Update successful!'})
    })
      .catch(error => {console.log('error', error);
        M.toast({html: error.message})
    })
    }


  function userData(user_id) {

    var myHeaders = new Headers();
    myHeaders.append(
      "Content-Type", "application/json",
      "Access-Control-Allow-Origin", "*",
      "user-token", localStorage.getItem('user-token')
      );
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    return fetch(`${api.users}/${user_id}`, requestOptions)
      .then(response => response.json())
      .catch(error => {
        console.log('error', error);
    })
    }


export default {
    userLogin,
    userRegister,
    userValidate,
    userLogout,
    userUpdate,
    userData
};