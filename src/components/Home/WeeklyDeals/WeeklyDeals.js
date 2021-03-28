import "./WeeklyDeals.css";
import { Component } from 'react';
import WeeklyDealsArticle from './WeeklyDealsArticle'
import booksService from '../../../services/booksService'

import { NavLink } from 'react-router-dom';


class WeeklyDeals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weeklyDealsBooks: [],
    };
  }


componentDidMount() {

  booksService.getWeeklyDealsBooks(2)
  .then(weeklyDealsBooks => this.setState({ weeklyDealsBooks }))
};


render() {
  return (

    <section className="weekly-deals">
    <section className="weekly-deals-header">
      <article className="weekly-deals-header-title">
        <h2>Weekly Deals</h2>
      </article>
      <article className="weekly-deals-header-viewall">
      <NavLink to="/books/discounted">
          <span>View All</span>
       </NavLink>
      </article>
    </section>
    <section className="weekly-deals-items">

    <WeeklyDealsArticle weeklyDealsBooks={this.state.weeklyDealsBooks} />
      
    </section>
  </section>

);
}
}

export default WeeklyDeals;