import api from './api';
import M from 'materialize-css';

function getNewsletter() {

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

return fetch(`${api.newsletter}/806D122F-68AB-4492-8B86-1160EE870E88`, requestOptions)
  .catch(error => {console.log('error', error);
  M.toast({html: error.message})
})
}

function subscribeNewsletter(updated_subscribers, email) {
    
    var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let listArray = updated_subscribers.split(',');
      listArray.push(email);
      let newList = listArray.toString();

      var data = JSON.stringify({
        "subscribers": newList
      });

      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
      };

return fetch("http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/newsletter/806D122F-68AB-4492-8B86-1160EE870E88", requestOptions)
.catch(error => {console.log('error', error);
  M.toast({html: error.message})
})
}

export default {
    getNewsletter,
    subscribeNewsletter
};
