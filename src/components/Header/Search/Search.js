import './Search.css';
import { Component } from 'react';
import searchService from '../../../services/searchService';
import React from 'react';
import M from 'materialize-css';
import Debounce from 'react-debounce-component';
import SearchResults from './SearchResults';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          search_results: [],
          search_query: ''
        };
      }

    changeHandlerSearch(e) {

        console.log(e.target.value);

        searchService.getSearchResults(e.target.value)
        .then(search_results => this.setState({ search_results }))

    }



render() {
    return(
<article className="header-top-block-site-search">
           <input type="text" id="header-top-block-site-search-input search" name="search" onChange={this.changeHandlerSearch} value={this.state.search_query} placeholder="Search..." />
           <i className="fas fa-search header-top-block-site-search-input-icon"></i>
            <Debounce ms={1000}>
                <SearchResults searchData={this.state.search_results} />
            </Debounce>
</article>


    );
}
}

export default Search;