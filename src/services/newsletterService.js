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

return fetch(`${api.newsletter}/806D122F-68AB-4492-8B86-1160EE870E88`, requestOptions)
.catch(error => {console.log('error', error);
  M.toast({html: error.message})
})
}


function getSubscribers() {

let subscribersArray = [];
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

return fetch(`${api.newsletter}/806D122F-68AB-4492-8B86-1160EE870E88?property=subscribers`, requestOptions)
  .then(result => result.json())
  .catch(error => {console.log('error', error);
  M.toast({html: error.message})
})
}


function updateNewsletter(email, updated_subscribers) {
    
  var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let newArray = updated_subscribers.split(',');
    let index = newArray.indexOf(email);
      if (index !== -1) {
      newArray.splice(index, 1);
      
    let newList = newArray.toString();

    var data = JSON.stringify({
      "subscribers": newList
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: data,
      redirect: 'follow'
    };

return fetch(`${api.newsletter}/806D122F-68AB-4492-8B86-1160EE870E88`, requestOptions)
    .then(result => result.json())
    .catch(error => {console.log('error', error)
    M.toast({html: error.message})
})
} else {
  return M.toast({html: 'You are not subscribed!'})
}
}


function updateUserNewsletterStatus(userId, newsletter) {

    var myHeaders = new Headers();
    myHeaders.append(
      "Content-Type", "application/json",
      "Access-Control-Allow-Origin", "*",
      );
    
    var raw = JSON.stringify({
      "newsletter": newsletter
    });
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    return fetch(`${api.users}/${userId}`, requestOptions)
      .then(response => response.json())
      .catch(error => {console.log('error', error);
        M.toast({html: error.message})
    })
}


function countSubscribers() {

    var myHeaders = new Headers();
    myHeaders.append(
    "Content-Type", "application/json",
    "Access-Control-Allow-Origin", "*"
    );

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

return fetch(`${api.newsletter}/806D122F-68AB-4492-8B86-1160EE870E88?property=subscribers`, requestOptions)
  .then(response => response.json())
  .catch(error => console.log('error', error));
}

export default {
    getNewsletter,
    subscribeNewsletter,
    getSubscribers,
    updateNewsletter,
    updateUserNewsletterStatus,
    countSubscribers
};
