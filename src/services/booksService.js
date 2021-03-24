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

export default {
  getAll,
  getAllByAuthor,
  getAllByFormat,
  getAllByPrice
};