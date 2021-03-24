import { Component } from 'react';

import "./FeaturedCategoryArticle.css";

import { NavLink } from 'react-router-dom';


class FeaturedCategoryArticle extends Component {
   constructor(props) {
    super(props)
   }


   getFeaturedBooks

render() {
  return (
  this.props.featuredBooks.map(x => {
    return (
        <>
        <article className="featured-category-items-item" key={x.objectId}>
        <NavLink to={`books/details/${x.objectId}`}>
            <img src={x.image} className="featured-category-items-item-img" alt={x.title} />
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

export default FeaturedCategoryArticle;