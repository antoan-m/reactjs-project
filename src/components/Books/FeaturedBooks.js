import "./FeaturedBooks.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';

class FeaturedBooks extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        this.props.featuredBooksData.map(x => {
            return (
                <Link to={`/books/details/${x.objectId}`} key={x.objectId}><article className="featured-book">
                    <img src={x.image} className="featured-book-img" alt={x.title} />
                    {x.rrp ? <p className="featured-book-rrp">${x.rrp}</p> : ''}
                    <p className="featured-book-price">${x.price}</p>
                    <p className="featured-book-line"></p>
                </article></Link>
               
            )
      })
    )}
}

export default FeaturedBooks;