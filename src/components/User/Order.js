import "./Order.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';


class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myOrder: ''
    };
  }

  componentDidMount() {

  }

  componentDidUpdate() {

}


render() {
  return (
<div className="Order">

    <section className="Order-main">
        <section className="Order-main-left">
         
          
          <section className="Order-main-left-last-orders">
          <h2 className="Order-main-header">Last Order</h2>
          <ul className="profile-main-my-books-list">
                {/* {this.props.myOrder.map(x => {
                return (
                    <li className="profile-main-my-books-list-item-main" key={x.objectId}>
                     <article className="profile-main-my-books-list-item">   
                     <article className="profile-main-my-books-list-item-details">
                         <h5 className="profile-main-my-books-list-item-title">{x.objectId}</h5>
                         <p className="profile-main-my-books-list-item-items">{x.book_ids.split(',').length}</p>
                         <p className="profile-main-my-books-list-item-price">{x.order_total}</p>
                         <p className="profile-main-my-books-list-item-date">{new Date(x.created).toLocaleDateString('en', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'})}</p>
                     </article>
                     </article>
                     <article className="profile-main-my-books-list-item-book-buttons">
                     <Link to={`/user/profile/orders/${x.objectId}`}><button className="btn waves-effect waves-light btn-small edit-book-btn">View<i className="material-icons right">zoom_in</i></button></Link>
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
