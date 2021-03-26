import './SearchResults.css';
import { Component } from 'react';
import searchService from '../../../services/searchService';
import React from 'react';
import M from 'materialize-css';
import Debounce from 'react-debounce-component';


class SearchResults extends Component {
    constructor(props) {
      super(props);
      this.state = {
        search_results: '',
        search_query: ''
      }
    }


render() {
    return(
                <article className="search-results">'ttttt'</article>
    );
}
}

export default SearchResults;