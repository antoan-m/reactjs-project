import api from "./api";
import M from "materialize-css";

function getAllSlides() {

    return fetch(`${api.slides}?where=published%3Dtrue&sortBy=priority%20desc`, {
            headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((res) => res.json())
        .catch((error) => console.error(error));
}


function addSlide(title, description, cover, background, url, priority, published) {
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
        "description": description,
        "cover": cover,
        "background": background,
        "url": url,
        "priority": Number(priority),
        "published": published,
        "ownerId": userId
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    return fetch(`${api.slides}`, requestOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.error("error", error);
            M.toast({ html: error.message });
            return;
        });
}

function editSlide(slide_id, title, description, cover, background, url, priority, published) {
    
    let userToken = localStorage.getItem("user-token");

    var myHeaders = new Headers();
    myHeaders.append(
        "Content-Type", "application/json",
        "Access-Control-Allow-Origin", "*", 
        "user-token", userToken
    );

    var raw = JSON.stringify({
        "title": title,
        "description": description,
        "cover": cover,
        "background": background,
        "priority": Number(priority),
        "published": published,
        "url": url
    });

    var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    return fetch(`${api.slides}/${slide_id}`, requestOptions)
        .then((response) => response.json())
        .catch((error) => {
            console.error("error", error);
            M.toast({ html: error.message });
            return;
        });
}

function getMySlides(user_id) {
    let userToken = localStorage.getItem("user-token");

    let query = `?where=ownerId%3D'7AEA9A8E-54D1-43CC-AEDC-9EBF9229E1C8'&sortBy=priority%20desc&sortBy=created%20desc`;

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



    return fetch(`${api.slides}${query}`, requestOptions)
        .then((res) => res.json())
        .catch((error) => {
            console.error("error", error);
        });
}

function deleteSlide(slide_id) {
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

    return fetch(`${api.slides}/${slide_id}`, requestOptions)
        .then((result) => {
            M.toast({ html: "Slide deleted successfully!" });
        })
        .catch((error) => {
            console.error("error", error);
            M.toast({ html: error.message });
            return;
        });
}

function getSlideData(slide_id) {

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

    return fetch(`${api.slides}/${slide_id}`, requestOptions)
        .then((res) => res.json())
        .catch((error) => {
            console.error("error", error);
            return;
        });
}

export default {
    getAllSlides,
    addSlide,
    editSlide,
    deleteSlide,
    getMySlides,
    getSlideData
};