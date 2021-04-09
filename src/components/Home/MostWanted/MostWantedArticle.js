import { Component } from 'react';

import "./MostWantedArticle.css";

import { NavLink } from 'react-router-dom';


class MostWantedArticle extends Component {
   constructor(props) {
    super(props)
   }

render() {
  return (
  this.props.mostWantedBooks.map(x => {
    return (
        <article className="mostwanted-items-item" key={x.objectId}>
        <NavLink to={`books/details/${x.objectId}`}>
            <img src={x.image} className="mostwanted-items-item-img" alt={x.title} />
         </NavLink>
          <h3>
          <NavLink to={`books/details/${x.objectId}`}>{x.title}</NavLink>
          </h3>
          <h5>
          <NavLink to={`/books/author/${x.author}`}>{x.author}</NavLink>
          </h5>
          <p>${x.price}</p>
        </article>
  )
})
  )}
}

export default MostWantedArticle;