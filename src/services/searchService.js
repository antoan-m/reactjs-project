import api from './api';
import M from 'materialize-css';

function getSearchResults(search_query) {
    
        let query = `title%20LIKE%20'%25${search_query}%25'%7C%7Cauthor%20LIKE%20'%25${search_query}%25'`;
        
        if (search_query) {
          query = `&where'${search_query}'&`;
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
    getSearchResults
};
