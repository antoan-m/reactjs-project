import "./Wishlist.css";
import { Component } from 'react';
import userService from "../../services/userService";
import UserPanel from "./panels/UserPanel";
import AdminPanel from "./panels/AdminPanel";
import WishlistPanel from "./panels/WishlistPanel";
import booksWishlistService from "../../services/booksWishlistService";


class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_data: '',
      user_id: localStorage.getItem('id'),
      my_wishlist: '',
      my_wishlist_ids: ''
    };
  }

  componentDidMount() {
    userService.userData(this.state.user_id)
    .then(data => this.setState({ user_data: data }))

    let array = [];
    booksWishlistService.getWishlistBookIds(this.state.user_id)
    .then(result => {
      for (let i = 0; i < result.length; i++) {
        const el = result[i].book_id;
        array.push(el);
      }
      this.setState({ my_wishlist_ids: array });
  })
  booksWishlistService.getWishlistBooksInfo(this.state.my_wishlist_ids)
  .then(result => {
    this.setState({ my_wishlist: result });
  })
  }

  componentDidUpdate() {
    if (this.state.user_data === '') {
        userService.userData(this.state.user_id)
        .then(data => this.setState({ user_data: data }))
        }

    if (this.state.my_wishlist === '') {
        let array = [];
        booksWishlistService.getWishlistBookIds(this.state.user_id)
        .then(result => {
          for (let i = 0; i < result.length; i++) {
            const el = result[i].book_id;
            array.push(el);
          }
          this.setState({ my_wishlist_ids: array });
      })
      booksWishlistService.getWishlistBooksInfo(this.state.my_wishlist_ids)
      .then(result => {
        this.setState({ my_wishlist: result });
      })
    }
  }


render() {
  return (
<div className="wishlist">

    <section className="wishlist-main">
         
        <UserPanel userData={this.state.user_data} />

        <WishlistPanel myWishlist={this.state.my_wishlist_ids} />

        <AdminPanel userData={this.state.user_data} />

    </section>
</div>
  );
}
}

export default Wishlist;
