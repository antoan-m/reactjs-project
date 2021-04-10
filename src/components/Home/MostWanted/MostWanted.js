import "./MostWanted.css";
import { Component } from 'react';
import MostWantedArticle from './MostWantedArticle';
import booksService from '../../../services/booksService';
import wishlistService from '../../../services/booksWishlistService';

import { NavLink } from 'react-router-dom';


class MostWanted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostWantedBooksIds: [],
      mostWantedBooks: [],
    };
  }


componentDidMount() {

  wishlistService.getMostWantedBooks(4)
  .then(mostWantedBooksIds => {

    let book_ids = [];

    for (let i = 0; i < mostWantedBooksIds.length; i++) {
      const book = mostWantedBooksIds[i].book_id;
      book_ids.push(book);
    }

    wishlistService.getWishlistBooksInfo(book_ids)
    .then(mostWantedBooks => {
      this.setState({ mostWantedBooks });
    })
})

}


render() {
  return (

<section className="mostwanted">

    <article className="mostwanted-item-big">
      
           <img src="best-sellers-banner.jpg" alt="Most Wanted" />
           <h2>Most Wanted</h2>
        
    </article>

    <article className="mostwanted-items-small">
        
       <article className="mostwanted-items-small">

      <MostWantedArticle mostWantedBooks={this.state.mostWantedBooks} />

      </article>

    </article>
</section>

);
}
}

export default MostWanted;