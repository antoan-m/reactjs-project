import api from './api';

function getSearchResults(search_query) {
    
        let query = undefined;
        
        if (search_query) {
          query = `where=title%20LIKE%20'%25${search_query}%25'%7C%7Cauthor%20LIKE%20'%25${search_query}%25'%7C%7Ccategory%20LIKE%20'%25${search_query}%25'&`;
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

//`where=title%20LIKE%20'%25${search_query}%25'%7C%7Cauthor%20LIKE%20'%25${search_query}%25'%7C%7Ccategory%20LIKE%20'%25${search_query}%25'`