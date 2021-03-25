import api from './api';

function getAll(current_param) {

  let query = undefined;
  
  if (current_param) {
    query = `&where=category='${current_param}'&`;
  } else {
    query = '';
  }

  return fetch(`${api.books}?${query}sortBy=created%20desc`, {
    headers: { 'Access-Control-Allow-Origin': "*" }
  })
 .then(res => res.json())
        .catch(error => console.error(error));
}

function getAllByAuthor(current_param) {

  let query = undefined;
  
  if (current_param) {
    query = `where=author='${current_param}'&`;
  } else {
    query = '';
  }

  return fetch(`${api.books}?${query}sortBy=created%20desc`, {
    headers: { 'Access-Control-Allow-Origin': "*" }
  })
 .then(res => res.json())
        .catch(error => console.error(error));
}

function getAllByFormat(current_param) {

  let query = undefined;
  
  if (current_param) {
    query = `where=format='${current_param}'&`;
  } else {
    query = '';
  }

  return fetch(`${api.books}?${query}sortBy=created%20desc`, {
    headers: { 'Access-Control-Allow-Origin': "*" }
  })
 .then(res => res.json())
        .catch(error => console.error(error));
}

function getAllByPrice(current_param) {

  let query = undefined;
  
  if (current_param) {
    query = `where=price='${current_param}'&`;
  } else {
    query = '';
  }

  return fetch(`${api.books}?${query}sortBy=created%20desc`, {
    headers: { 'Access-Control-Allow-Origin': "*" }
  })
 .then(res => res.json())
        .catch(error => console.error(error));
}


function getFeaturedBooks(limit) {

  let query = `pageSize=${limit}&where=featured%3Dtrue&`;

  return fetch(`${api.books}?${query}sortBy=created%20desc`, {
    headers: { 'Access-Control-Allow-Origin': "*" }
  })
 .then(res => res.json())
        .catch(error => console.error(error));
}


function getBestSellersBooks(limit) {

  let query = `pageSize=${limit}&sortBy=orders%20desc`;

  return fetch(`${api.books}?${query}`, {
    headers: { 'Access-Control-Allow-Origin': "*" }
  })
 .then(res => res.json())
        .catch(error => console.error(error));
}

function getWeeklyDealsBooks(limit) {

  let query = ``;

  if (limit) {
      query = `pageSize=${limit}&where=promo%3Dtrue&sortBy=orders%20desc`;
  } else {
      query = `where=promo%3Dtrue&sortBy=orders%20desc`;
  }
 

  return fetch(`${api.books}?${query}`, {
    headers: { 'Access-Control-Allow-Origin': "*" }
  })
 .then(res => res.json())
        .catch(error => console.error(error));
}

function getCategories() {
  return fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?property=category&groupBy=category&sortBy=category`, {
    headers: { 'Access-Control-Allow-Origin': "*" }
  })
 .then(res => res.json())
        .catch(error => console.error(error));
}

function getAuthors() {
  return fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?property=author&groupBy=author&sortBy=author`, {
    headers: { 'Access-Control-Allow-Origin': "*" }
  })
 .then(res => res.json())
        .catch(error => console.error(error));
}

function getFormats() {
  return fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?property=format&groupBy=format&sortBy=format`, {
    headers: { 'Access-Control-Allow-Origin': "*" }
  })
 .then(res => res.json())
        .catch(error => console.error(error));
}

function getPrices() {
  return fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?property=price&groupBy=price&sortBy=price`, {
    headers: { 'Access-Control-Allow-Origin': "*" }
  })
 .then(res => res.json())
        .catch(error => console.error(error));
}

function sortByNewest() {
  return fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?sortBy=created%20desc`, {
    headers: { 'Access-Control-Allow-Origin': "*" }
  })
 .then(res => res.json())
        .catch(error => console.error(error));
}

function sortByOldest() {
  return fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?sortBy=created%20`, {
    headers: { 'Access-Control-Allow-Origin': "*" }
  })
 .then(res => res.json())
        .catch(error => console.error(error));
}

function sortByPriceAsc() {
  return fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?sortBy=price%20asc`, {
    headers: { 'Access-Control-Allow-Origin': "*" }
  })
 .then(res => res.json())
        .catch(error => console.error(error));
}

function sortByPriceDesc() {
  return fetch(`http://eu-api.backendless.com/7ECE9EFE-DB9E-D320-FF17-04C136319800/D25AC5BB-3B9F-4F71-866A-6F9F6ED00656/data/books?sortBy=price%20desc`, {
    headers: { 'Access-Control-Allow-Origin': "*" }
  })
 .then(res => res.json())
        .catch(error => console.error(error));
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
  getFeaturedBooks,
  getBestSellersBooks,
  getWeeklyDealsBooks,
  sortByNewest,
  sortByOldest,
  sortByPriceAsc,
  sortByPriceDesc
};