import api from './api';
import M from 'materialize-css';


function contact(name, email, subject, message) {
  var myHeaders = new Headers();
  myHeaders.append(
    "Content-Type", "application/json",
    "Access-Control-Allow-Origin", "*",
    );

  var raw = JSON.stringify({
    "name": name,
    "email": email,
    "subject": subject,
    "message": message,
    "sender_id": "",
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  return fetch(`${api.contact}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      M.toast({html: 'Thank you for your message!'})
  })
    .catch(error => {console.log('error', error);
      M.toast({html: error.message})
  })
  }

  
export default {
    contact
};


