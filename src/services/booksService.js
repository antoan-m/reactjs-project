import api from './api';

function getAll(current_category) {

  let query = undefined;

  if (current_category) {
    query = `where=category='${current_category}'&`;
  }

  return fetch(`${api.books}?${query}sortBy=created%20desc`, {
    headers: { 'Access-Control-Allow-Origin': "*" }
  })
 .then(res => res.json())
        .catch(error => console.log(error));


}

export default {
  getAll
};