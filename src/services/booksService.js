import api from './api';

function getAll(current_param) {

  let query = undefined;
  
  if (current_param) {
    query = `where=category='${current_param}'&`;
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

export default {
  getAll,
  getAllByAuthor,
  getAllByFormat,
  getAllByPrice,
  getFeaturedBooks,
  getBestSellersBooks,
  getWeeklyDealsBooks
};