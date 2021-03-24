import "./BestSellers.css";
import { Component } from 'react';
import BestSellersArticle from './BestSellersArticle'
import booksService from '../../../services/booksService'

import { NavLink } from 'react-router-dom';


class BestSellers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestSellersBooks: [],
    };
  }


componentDidMount() {

  booksService.getBestSellersBooks(4)
  .then(bestSellersBooks => this.setState({ bestSellersBooks }))
};


render() {
  return (

<section className="bestsellers">

    <article className="bestsellers-item-big">
       <NavLink to="/books">
           <img src="best-sellers-banner.jpg" alt="Best Sellers" />
           <h2>Best Sellers</h2>
        </NavLink>
    </article>

    <article className="bestsellers-items-small">
        
       <article className="bestsellers-items-small">

      <BestSellersArticle bestSellersBooks={this.state.bestSellersBooks} />

      </article>

    </article>
</section>

);
}
}

export default BestSellers;