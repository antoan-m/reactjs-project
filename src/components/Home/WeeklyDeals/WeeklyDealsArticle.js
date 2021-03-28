import { Component } from 'react';

import "./WeeklyDealsArticle.css";

import { NavLink } from 'react-router-dom';


class WeeklyDealsArticle extends Component {
   constructor(props) {
    super(props)
   }

render() {
  return (
  this.props.weeklyDealsBooks.map(x => {
    return (
      <article className="weekly-deals-items-item" key={x.objectId}>
      <NavLink to={`books/details/${x.objectId}`}>
          <img src={x.image} className="weekly-deals-items-item-img" alt={x.title}
           />
       </NavLink>
        <article className="weekly-deals-items-item-info">
          <h3>
          <NavLink to={`books/details/${x.objectId}`}>{x.title}</NavLink>
          </h3>
          <h5>
          <NavLink to={`/books/author/${x.author}`}>{x.author}</NavLink>
          </h5>
          <p>$29.99</p>
        </article>
      </article>
  )
})
  )}
}

export default WeeklyDealsArticle;