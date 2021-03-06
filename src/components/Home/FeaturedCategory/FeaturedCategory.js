import "./FeaturedCategory.css";
import { Component } from 'react';
import FeaturedCategoryArticle from './FeaturedCategoryArticle'
import booksService from '../../../services/booksService'

import { NavLink } from 'react-router-dom';


class FeaturedCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredBooks: [],
    };
  }


componentDidMount() {

  booksService.getFeaturedBooks(4)
  .then(featuredBooks => this.setState({ featuredBooks }))
};

 render() {
  return (

<section className="featured-category">

       <article className="featured-category-item-big">
           <img src="thrillers-banner.jpg" alt="Thrillers" />
           <h2>Featured Books</h2>
           
       
       </article>

       <article className="featured-category-items-small">

         <FeaturedCategoryArticle featuredBooks={this.state.featuredBooks} />

       </article>
     </section>

);
}
}

export default FeaturedCategory;