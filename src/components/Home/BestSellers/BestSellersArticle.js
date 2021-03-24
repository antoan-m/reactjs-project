import { Component } from 'react';

import "./BestSellersArticle.css";

import { NavLink } from 'react-router-dom';


class BestSellersArticle extends Component {
   constructor(props) {
    super(props)
   }

render() {
  return (
  this.props.bestSellersBooks.map(x => {
    return (
        <>
        <article className="bestsellers-items-item" key={x.objectId}>
        <NavLink to={`books/details/${x.objectId}`}>
            <img src={x.image} className="bestsellers-items-item-img" alt={x.title} />
         </NavLink>
          <h3>
          <NavLink to={`books/details/${x.objectId}`}>{x.title}</NavLink>
          </h3>
          <h5>
          <NavLink to={`/books/author/${x.author}`}>{x.author}</NavLink>
          </h5>
          <p>${x.price}</p>
        </article>
        </>
  )
})
  )}
}

export default BestSellersArticle;