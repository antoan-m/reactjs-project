import "./Order.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../services/userService';
import cartService from '../../services/cartService';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_data: '',
      user_id: localStorage.getItem('id'),
      my_order_id: this.props.match.params.id,
      my_order: '',
      my_order_book_ids: ''
    };
  }

componentDidMount() {

  userService.userData(this.state.user_id)
  .then(data => this.setState({ user_data: data }))

  cartService.getMyOrderInfo(this.state.user_id, this.state.my_order_id)
  .then(data => this.setState({ my_order_book_ids: data.book_ids.split(',') }));

  cartService.getCartBooksInfo(this.state.my_order_book_ids)
  .then(data => this.setState({ my_order: data }));
}

componentDidUpdate() {
  if (this.state.user_data === '') {
      userService.userData(this.state.user_id)
      .then(data => this.setState({ user_data: data }))
      }

  if (this.state.my_order_book_ids === '') {
    cartService.getMyOrderInfo(this.state.user_id, this.state.my_order_id)
    .then(data => this.setState({ my_order_book_ids: data.book_ids.split(',') }))
  };
  if (this.state.my_order === '') {
    cartService.getCartBooksInfo(this.state.my_order_book_ids)
    .then(data => this.setState({ my_order: data }));
  }

}


render() {
  console.log(this.state.my_order);

  return (
<div className="profile">
    <section className="profile-main">
        <section className="profile-main-left">
          <section className="profile-main-left-last-orders">
          <h2 className="profile-main-header">Order Details</h2>
          <ul className="profile-main-my-books-list">
          {/* {this.state.my_order.map(x => {
                return (
                    <li className="profile-main-my-books-list-item-main" key={x.objectId}>
                     <article className="profile-main-my-books-list-item">   
                     <article className="profile-main-my-books-list-item-image">
                         <img src={x.image} alt={x.title} />
                     </article>
                     <article className="profile-main-my-books-list-item-details">
                         <h5 className="profile-main-my-books-list-item-title">{x.title}</h5>
                         <p className="profile-main-my-books-list-item-author">Author: {x.author}</p>
                         <p className="profile-main-my-books-list-item-category">Category: {x.category}</p>
                         <p className="profile-main-my-books-list-item-price">Price: {x.price}</p>
                     </article>
                     </article>
                    </li>
                  )})} */}
                </ul>
          </section>
          
        </section>

</section>
   </div>
  );
}
}

export default Order;
