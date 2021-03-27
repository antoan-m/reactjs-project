import './SearchResults.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';


class SearchResults extends Component {
    constructor(props) {
      super(props);
    }

render() {
    console.log(this.props.searchData);
    return(
        this.props.searchData.map(x => {
            return (
            <Link to={`/books/details/${x.objectId}`} key={x.objectId}>  
                <article className="search-results-item">
                    <img src={x.image} className="search-results-image" image={x.image} alt={x.title} />
                    <article className="search-results-more-info">
                        <h5 className="search-results-more-info-title">{x.title}</h5>
                        <p className="search-results-more-info-price">{x.author}</p>
                        <p className="search-results-more-info-price">{x.price}</p>
                    </article>
                </article>
            </Link>
            
    )}))
}
}

export default SearchResults;