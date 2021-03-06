import { Component } from 'react';

import "./BookArticle.css";

import { Link } from 'react-router-dom';


class BookArticle extends Component {
   constructor(props) {
    super(props)
   }

render() {
  return (
  this.props.bookData.map(x => {
    return (
     <article className="book-list-item" key={x.objectId}>

<Link to={`/books/details/${x.objectId}`}><img src={x.image} className="book-list-item-details-image" image={x.image} alt={x.title} /></Link>

<article className="book-list-item-details">
<article className="book-list-item-details-top">
<Link to={`/books/details/${x.objectId}`}><h3 className="book-list-item-details-title">{x.title}</h3></Link>
<Link to={`/books/${x.author}`}><p className="book-list-item-details-author">{x.author}</p></Link>
</article>
<article className="book-list-item-details-bottom">
{x.rrp ? <p className="book-list-item-details-rrp">${x.rrp}</p> : ''}
  <p className="book-list-item-details-price">${x.price}</p>
<Link to={`/books/details/${x.objectId}`}><button className="btn waves-effect waves-light book-list-item-details-btn">Read more<i className="material-icons right">import_contacts</i></button></Link>
</article>
</article>
</article>
  )
})
  )}
}

export default BookArticle;