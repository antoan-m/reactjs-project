import api from "./api";
import M from "materialize-css";

function getAllNews() {

    return fetch(`${api.news}?sortBy=created%20desc`, {
            headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((res) => res.json())
        .catch((error) => console.error(error));
}


function addNews(title, short_description, long_description, image) {
    let userToken = localStorage.getItem("user-token");
    let userId = localStorage.getItem("id");

    var myHeaders = new Headers();
    myHeaders.append(
        "Content-Type", "application/json",
        "Access-Control-Allow-Origin", "*", 
        "user-token", userToken
    );

    var raw = JSON.stringify({
        "title": title,
        "short_description": short_description,
        "long_description": long_description,
        "image": image,
        "ownerId": userId
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    return fetch(`${api.news}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            M.toast({ html: "News added successfully!" });
        })
        .catch((error) => {
            console.error("error", error);
            M.toast({ html: error.message });
            return;
        });
}

function editNews(news_id, title, short_description, long_description, image) {
    
    let userToken = localStorage.getItem("user-token");

    var myHeaders = new Headers();
    myHeaders.append(
        "Content-Type", "application/json",
        "Access-Control-Allow-Origin", "*", 
        "user-token", userToken
    );

    var raw = JSON.stringify({
        "title": title,
        "short_description": short_description,
        "long_description": long_description,
        "image": image
    });

    var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    return fetch(`${api.news}/${news_id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            M.toast({ html: "News edited successfully!" });
        })
        .catch((error) => {
            console.error("error", error);
            M.toast({ html: error.message });
            return;
        });
}

function getMyNews(user_id) {
    let userToken = localStorage.getItem("user-token");

    let query = `?where=ownerId%3D'7AEA9A8E-54D1-43CC-AEDC-9EBF9229E1C8'&sortBy=created%20desc`;

    var myHeaders = new Headers();
    myHeaders.append(
        "Content-Type", "application/json",
        "Access-Control-Allow-Origin", "*",
        "user-token", userToken
    );

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };



    return fetch(`${api.news}${query}`, requestOptions)
        .then((res) => res.json())
        .catch((error) => {
            console.error("error", error);
        });
}

function deleteNews(news_id) {
    let userToken = localStorage.getItem("user-token");

    var myHeaders = new Headers();
    myHeaders.append(
        "Content-Type", "application/json",
        "Access-Control-Allow-Origin", "*",
        "user-token",  userToken
    );

    var requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
    };

    return fetch(`${api.news}/${news_id}`, requestOptions)
        .then((result) => {
            M.toast({ html: "News deleted successfully!" });
        })
        .catch((error) => {
            console.error("error", error);
            M.toast({ html: error.message });
            return;
        });
}

function getNewsData(news_id) {

    var myHeaders = new Headers();
    myHeaders.append(
        "Content-Type", "application/json",
        "Access-Control-Allow-Origin", "*"
    );

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    return fetch(`${api.news}/${news_id}`, requestOptions)
        .then((res) => res.json())
        .catch((error) => {
            console.error("error", error);
            return;
        });
}

export default {
    getAllNews,
    addNews,
    editNews,
    deleteNews,
    getMyNews,
    getNewsData
};