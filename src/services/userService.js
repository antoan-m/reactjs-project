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

export default {
    userLogin
};




