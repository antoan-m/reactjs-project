import api from './api';
import M from 'materialize-css';

function userLogin(login, password) {

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"login": login,"password": password});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

return fetch(`${api.users}/login`, requestOptions)
.then(response => response.json())
  .then(result => {console.log(result);
    M.toast({html: 'Hello, ' + result['name'] + '!'})
    localStorage.name = result['name'];
    localStorage.email = result['email'];
    localStorage['user-token'] = result['user-token'];})
  .catch(error => {console.log('error', error);
  M.toast({html: error.message})
})
}

function userRegister(name, email, password, country, address, phone) {
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": name,
  "email": email,
  "password": password,
  "country": country,
  "address": address,
  "phone": phone,
  "wishlist": "",
  "orders": "",
  "cart": "",
  "user_type": "user"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/users/register", requestOptions)
  .then(response => response.json())

  .then(result => {console.log(result);
    M.toast({html: 'Hello, ' + result['name'] + '!'})
    localStorage.name = result['name'];
    localStorage.email = result['email'];
    localStorage['user-token'] = result['user-token'];})

  .catch(error => {console.log('error', error);
    M.toast({html: error.message})
})
}


export default {
    userLogin,
    userRegister
};




