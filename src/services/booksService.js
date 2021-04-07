import api from "./api";
import M from "materialize-css";

function getAll(current_param) {
    let query = undefined;

    if (current_param) {
        query = `&where=category='${current_param}'&`;
    } else {
        query = "";
    }

    return fetch(`${api.books}?${query}sortBy=created%20desc`, {
            headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((res) => res.json())
        .catch((error) => console.error(error));
}

function getAllByAuthor(current_param) {
    let query = undefined;

    if (current_param) {
        query = `where=author='${current_param}'&`;
    } else {
        query = "";
    }

    return fetch(`${api.books}?${query}sortBy=created%20desc`, {
            headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((res) => res.json())
        .catch((error) => console.error(error));
}

function getAllByFormat(current_param) {
    let query = undefined;

    if (current_param) {
        query = `where=format='${current_param}'&`;
    } else {
        query = "";
    }

    return fetch(`${api.books}?${query}sortBy=created%20desc`, {
            headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((res) => res.json())
        .catch((error) => console.error(error));
}

function getAllByPrice(current_param) {
    let query = undefined;

    if (current_param) {
        query = `where=price='${current_param}'&`;
    } else {
        query = "";
    }

    return fetch(`${api.books}?${query}sortBy=created%20desc`, {
            headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((res) => res.json())
        .catch((error) => console.error(error));
}

function getAllByPriceLowHigh(low, high) {

var myHeaders = new Headers();
myHeaders.append(
    "Content-Type", "application/json",
    "Access-Control-Allow-Origin", "*"
);

var query = `?where=price > ${Number(low)} AND price < ${Number(high)}`;

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

return fetch(`${api.books}${query}`, requestOptions) 
    .then((res) => res.json())
    .catch((error) => console.error(error));
}


function getFeaturedBooks(limit) {
    let query = `pageSize=${limit}&where=featured%3Dtrue&`;

    return fetch(`${api.books}?${query}sortBy=created%20desc`, {
            headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((res) => res.json())
        .catch((error) => console.error(error));
}

function getBestSellersBooks(limit) {
    let query = `pageSize=${limit}&sortBy=orders%20desc`;

    return fetch(`${api.books}?${query}`, {
            headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((res) => res.json())
        .catch((error) => console.error(error));
}

function getWeeklyDealsBooks(limit) {
    let query = ``;

    if (limit) {
        query = `pageSize=${limit}&where=promo%3Dtrue&sortBy=orders%20desc`;
    } else {
        query = `where=promo%3Dtrue&sortBy=orders%20desc`;
    }

    return fetch(`${api.books}?${query}`, {
            headers: { "Access-Control-Allow-Origin": "*" },
        })
        .then((res) => res.json())
        .catch((error) => console.error(error));
}

function getCategories() {
    return fetch(
            `https://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?property=category&groupBy=category&sortBy=category`, {
                headers: { "Access-Control-Allow-Origin": "*" },
            }
        )
        .then((res) => res.json())
        .catch((error) => console.error(error));
}

function getAuthors() {
    return fetch(
            `https://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?property=author&groupBy=author&sortBy=author`, {
                headers: { "Access-Control-Allow-Origin": "*" },
            }
        )
        .then((res) => res.json())
        .catch((error) => console.error(error));
}

function getFormats() {
    return fetch(
            `https://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?property=format&groupBy=format&sortBy=format`, {
                headers: { "Access-Control-Allow-Origin": "*" },
            }
        )
        .then((res) => res.json())
        .catch((error) => console.error(error));
}

function getPrices() {
    return fetch(
            `https://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?property=price&groupBy=price&sortBy=price`, {
                headers: { "Access-Control-Allow-Origin": "*" },
            }
        )
        .then((res) => res.json())
        .catch((error) => console.error(error));
}

function sortByNewest() {
    return fetch(
            `https://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?sortBy=created%20desc`, {
                headers: { "Access-Control-Allow-Origin": "*" },
            }
        )
        .then((res) => res.json())
        .catch((error) => console.error(error));
}

function sortByOldest() {
    return fetch(
            `https://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?sortBy=created%20`, {
                headers: { "Access-Control-Allow-Origin": "*" },
            }
        )
        .then((res) => res.json())
        .catch((error) => console.error(error));
}

function sortByPriceAsc() {
    return fetch(
            `https://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?sortBy=price%20asc`, {
                headers: { "Access-Control-Allow-Origin": "*" },
            }
        )
        .then((res) => res.json())
        .catch((error) => console.error(error));
}

function sortByPriceDesc() {
    return fetch(
            `https://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?sortBy=price%20desc`, {
                headers: { "Access-Control-Allow-Origin": "*" },
            }
        )
        .then((res) => res.json())
        .catch((error) => console.error(error));
}

function addBook(title, author, category, short_description, long_description, image, format, pages, year, price, rrp, featured, promo) {
    let userToken = localStorage.getItem("user-token");
    let userId = localStorage.getItem("id");

    var myHeaders = new Headers();
    myHeaders.append(
        "Content-Type", "application/json",
        "Access-Control-Allow-Origin", "*", 
        "user-token", userToken
    );

    var raw = JSON.stringify({
        title: title,
        author: author,
        category: category,
        short_description: short_description,
        long_description: long_description,
        image: image,
        format: format,
        pages: Number(pages),
        year: Number(year),
        price: Number(price),
        rrp: Number(rrp),
        featured: featured,
        promo: promo,
        ownerId: userId,
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    return fetch(`${api.books}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            M.toast({ html: "Book added successfully!" });
        })
        .catch((error) => {
            console.error("error", error);
            M.toast({ html: error.message });
            return;
        });
}

function editBook(book_id, title, author, category, short_description, long_description, image, format, pages, year, price, rrp, featured, promo) {
    
    let userToken = localStorage.getItem("user-token");

    var myHeaders = new Headers();
    myHeaders.append(
        "Content-Type", "application/json",
        "Access-Control-Allow-Origin", "*", 
        "user-token", userToken
    );

    var raw = JSON.stringify({
        title: title,
        author: author,
        category: category,
        short_description: short_description,
        long_description: long_description,
        image: image,
        format: format,
        pages: Number(pages),
        year: Number(year),
        price: Number(price),
        rrp: Number(rrp),
        featured: featured,
        promo: promo,
    });

    var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    return fetch(`${api.books}/${book_id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            M.toast({ html: "Book edited successfully!" });
        })
        .catch((error) => {
            console.error("error", error);
            M.toast({ html: error.message });
            return;
        });
}

function getMyBooks(user_id) {
    let userToken = localStorage.getItem("user-token");

    let query = `?where=ownerId='2FAEC5F6-C59A-4CD4-8FFD-24522DB02CF3'&sortBy=created%20desc`;

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

    return fetch(`${api.books}${query}`, requestOptions)
        .then((res) => res.json())
        .catch((error) => {
            console.error("error", error);
        });
}

function deleteBook(book_id) {
    let userToken = localStorage.getItem("user-token");

    var myHeaders = new Headers();
    myHeaders.append(
        "Content-Type",
        "application/json",
        "Access-Control-Allow-Origin",
        "*",
        "user-token",
        userToken
    );

    var requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
    };

    return fetch(`${api.books}/${book_id}`, requestOptions)
        .then((result) => {
            M.toast({ html: "Book deleted successfully!" });
        })
        .catch((error) => {
            console.error("error", error);
            M.toast({ html: error.message });
            return;
        });
}

function getBookData(book_id) {

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

    return fetch(`${api.books}/${book_id}`, requestOptions)
        .then((res) => res.json())
        .catch((error) => {
            console.error("error", error);
            return;
        });
}

export default {
    getAll,
    getCategories,
    getAuthors,
    getFormats,
    getPrices,
    getAllByAuthor,
    getAllByFormat,
    getAllByPrice,
    getAllByPriceLowHigh,
    getFeaturedBooks,
    getBestSellersBooks,
    getWeeklyDealsBooks,
    sortByNewest,
    sortByOldest,
    sortByPriceAsc,
    sortByPriceDesc,
    addBook,
    editBook,
    getMyBooks,
    editBook,
    deleteBook,
    getBookData,
};