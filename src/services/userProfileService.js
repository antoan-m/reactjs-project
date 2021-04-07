import api from './api';
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";


export function userProfileService() {

    const { user, setUser } = useContext(UserContext);

getMyOrders(user_id) {

    var myHeaders = new Headers();
    myHeaders.append(
        "Content-Type", "application/json",
        "Access-Control-Allow-Origin", "*"
        );
    
    var raw = JSON.stringify({"login": login,"password": password});
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    return fetch(`${api.users}/${user_id}?property=orders`, requestOptions)
    .then(response => response.json())
      .then(result => {
        console.log(result);
        ;})
      .catch(error => {console.log('error', error);
      M.toast({html: error.message})
    })
    }


}